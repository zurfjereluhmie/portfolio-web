---
image: "portfolio/etter/cover.png"
title: "etter"
description: "Apprendre aux machines à comprendre la notion de 'lieu' : faire le lien entre le langage naturel et la recherche géographique à l'aide des LLMs"
date: 2026-05-06
gallery-slug: "etter"
tags: "AI / LLMs, NLP, Geospatial, Python"
---

# {{ $doc.title }}

::AppMdLinks{:links='["https://pypi.org/project/etter/", "https://github.com/geoblocks/etter", "https://geoblocks.github.io/etter/"]'}
::

## TL;DR

**Ce que c'est :** Un package Python open-source qui utilise LangChain et les LLM pour traduire des requêtes géographiques imprécises en langage naturel en filtres structurés et fortement typés.

**Le problème :** Les géocodeurs standards ne comprennent que les adresses exactes et échouent complètement face à des relations spatiales telles que "près de", "à l'intérieur de" ou "au sud de".

**La solution :** Un outil agnostique vis-à-vis du fournisseur (provider) qui extrait ces relations spatiales complexes et génère des modèles Pydantic strictement typés, prêts pour les bases de données spatiales en aval comme PostGIS.

## Apprendre aux machines à comprendre le « où »

Les moteurs de recherche ont toujours été incroyablement performants pour trouver _ce_ que nous cherchons, mais ils rencontrent systématiquement des difficultés avec le _où_.

Lorsqu'un utilisateur tape une requête comme _"sentiers de randonnée à moins de 5 km d'une gare au nord de Lausanne"_, la recherche textuelle traditionnelle atteint ses limites. Le système doit séparer l'activité ("sentiers de randonnée") des filtres géographiques complexes et à plusieurs niveaux. Les géocodeurs standards échouent ici car ils sont conçus pour renvoyer des coordonnées correspondant au nom exact d'un lieu ; ils ne comprennent pas les concepts relationnels ni la géographie humaine.

Pour résoudre ce problème, [Frédéric Junod](https://www.linkedin.com/in/fredericjunod/) et moi-même avons créé **etter** : un package Python qui transforme les requêtes de localisation en langage naturel en filtres géographiques structurés et exploitables. Propulsé par de grands modèles de langage (LLM), `etter` extrait les relations spatiales, les distances et les lieux de référence, agissant comme une couche de traduction hautement spécialisée entre la pensée humaine et les bases de données spatiales.

::AppGallery{baseUrl="/img/portfolio/etter" :imagesUrl='["etter-1.png", "etter-2.png"]'}
::

## L'origine suisse : Qu'est-ce qu'un « etter » ?

L'inspiration pour ce projet est née sur les rives du lac Léman, lors du traitement de jeux de données géographiques locaux. Nous avons nommé le package **etter** (prononcé /ˈɛtɐ/). En suisse allemand, un _etter_ est la limite ou la clôture marquant le bord d'un village ou d'une commune, une démarcation naturelle entre les zones habitées et non habitées.

Nous avons estimé que c'était la métaphore parfaite pour ce que fait le package : il dessine une frontière programmatique claire autour de l'intention géographique de la requête d'un utilisateur. Pour prouver le concept, nous avons construit notre premier serveur API de démonstration combinant l'analyse des requêtes d'`etter` avec une résolution géographique locale utilisant les données de [SwissNames3D](https://www.swisstopo.admin.ch/en/landscape-model-swissnames3d).

## L'architecture

Nous avons développé `etter` avec une philosophie stricte, de type UNIX : faire une seule chose et la faire parfaitement. La seule responsabilité d'`etter` est d'extraire le filtre géographique.

Si un utilisateur cherche _"restaurants végétariens avec menu enfant à environ 2 miles du lac Léman"_, l'architecture le gère en laissant l'**Application Parente** identifier les entités (_"restaurants"_, _"végétariens"_, _"avec menu enfant"_), tandis qu'**etter** ignore explicitement les attributs et se concentre entièrement sur la géographie.

### Comment ça marche : le pipeline à trois couches

Pour garder un système modulaire et prévisible, nous avons conçu `etter` autour d'une architecture en trois étapes :

**Couche 1 | L'analyse (Parsing).** Tout commence avec le `GeoFilterParser`. Cette couche charge le LLM d'interpréter la requête en langage naturel et d'en extraire les contraintes géographiques fondamentales : le lieu de référence (par ex., "Lac Léman" ou "Rhône"), la relation spatiale (par ex., "north_of" ou "right_bank"), et les éventuelles valeurs de distance. Pour éviter que des réponses imprévisibles de l'IA ne fassent planter l'application, le LLM est contraint de renvoyer un modèle Pydantic `GeoQuery` strictement typé. Cela isole parfaitement le gros du travail sémantique du reste du code.

**Couche 2 | La résolution.** Ensuite, la `GeoDataSource` traduit le lieu de référence textuel en géométrie réelle. Par défaut, nous fournissons des adaptateurs pour PostGIS,[SwissNames3D](https://www.swisstopo.admin.ch/en/landscape-model-swissnames3d) (toponymie suisse) et la [BD-CARTO de l'IGN](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-CARTO?redirected_from=geoservices.ign.fr) (géographie française). Cependant, nous avons construit cette couche pour qu'elle soit complètement indépendante du backend. Comme elle repose sur une interface Python simple, les développeurs peuvent facilement la relier à leurs propres API REST, à des bases de données spatiales personnalisées, ou même à des fichiers GeoJSON statiques.

**Couche 3 | Les opérations spatiales.** Enfin, la fonction `apply_spatial_relation()` façonne physiquement la géométrie pour qu'elle corresponde à l'intention de l'utilisateur. C'est ici qu'interviennent les mathématiques spatiales. "Au nord de Lausanne" est calculé comme un secteur géométrique pointant vers le nord. "Sur les rives du lac Léman" calcule une zone tampon (ring buffer) autour du périmètre du lac tout en soustrayant précisément la surface en eau elle-même. La fonction peut même gérer une logique directionnelle complexe, comme calculer le sens d'écoulement d'une rivière pour dessiner correctement une zone tampon exclusivement sur la "rive droite".

### Fonctionnalités clés sous le capot

- **Sortie structurée :** Transformer un langage naturel imprécis en modèles Pydantic strictement typés garantit une sécurité de type totale pour les opérations de base de données en aval. Nous avons mis en place des seuils de confiance stricts (`confidence_threshold`) pour rejeter les requêtes ambiguës.
- **Agnostique au LLM :** Construit sur LangChain, `etter` est par conception indépendant du fournisseur. Vous pouvez y brancher OpenAI, Anthropic, ou des modèles open-source hébergés localement en fonction de votre infrastructure et de vos exigences de confidentialité.
- **Streaming en temps réel :** Attendre la réponse d'un LLM brise l'immersion de l'utilisateur. Nous avons intégré la prise en charge du streaming (`parse_stream`) qui renvoie des événements de raisonnement en temps réel. Dans une interface web, cela fournit un retour visuel où l'utilisateur voit le modèle "réfléchir" et dessiner du GeoJSON.
- **Analyse multilingue :** Parce qu'il s'appuie sur des LLM, le package comprend nativement l'anglais, le français, l'allemand, l'italien et d'autres langues sans avoir à maintenir des logiques de parsing séparées.

## Portée mondiale et applications

Bien qu'`etter` ait débuté avec des données suisses sur les rives du lac Léman, son architecture est fondamentalement mondiale. Les LLM ayant ingéré d'énormes quantités de données mondiales, le package comprend par nature la géographie du monde entier.

Qu'une application ait besoin d'analyser _"plages près de Sydney"_ ou _"parcs au sud de Paris"_, `etter` offre un moyen standardisé et évolutif pour les moteurs de recherche modernes, les plateformes immobilières et les applications d'itinéraires partout dans le monde d'interpréter de manière fluide la géographie humaine.

## Stack technique

- [LangChain](https://docs.langchain.com/oss/python/langchain/overview) pour l'intégration des LLM (OpenAI, Anthropic, Local). -[Shapely](https://shapely.readthedocs.io/en/stable/) pour les opérations géométriques et le raisonnement spatial.
- [Pydantic](https://pydantic.dev/docs/) pour des sorties structurées avec une sécurité de type complète tout au long du pipeline.

### À quoi cela ressemble dans le code

installation:

```
pip install etter
# ou avec le support de PostGIS :
pip install etter[postgis]
```

utilisation :

```python
from langchain.chat_models import init_chat_model
from etter import GeoFilterParser

llm = init_chat_model(model="gpt-4o", temperature=0, api_key="...")
parser = GeoFilterParser(llm=llm)

result = parser.parse("sur les rives du lac Léman")
# result.spatial_relation → "on_shores_of"
# result.reference_location → "Lac Léman"
# result.confidence → 0.97
```

Les couches 2 et 3 résolvent l'emplacement et produisent la géométrie finale. L'API de démonstration est livrée avec [SwissNames3D](https://www.swisstopo.admin.ch/en/landscape-model-swissnames3d) et [IGN BD-CARTO](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-CARTO?redirected_from=geoservices.ign.fr) pour montrer le flux complet de bout en bout.

::AppGallery{baseUrl="/img/portfolio/etter" :imagesUrl='["etter-3.png"]'}
::
