---
image: "portfolio/cultural-trails/cover.png"
title: "Sentiers Culturels"
description: "Développement d'une application web mobile pour découvrir les sentiers culturels du canton de Vaud."
date: 2024-07-12
gallery-slug: "cultural-trails"
tags: "Full-stack, Architecture d'application"
---

# {{ $doc.title }}

::AppMdLinks{:links='["https://github.com/HEIG-COMEM/HEIG-VD_ProjArt_Sentiers-Culturels_ASFJ", "https://sentiers-culturels-vd.ch/home"]'}
::

## Contexte

Le projet ProjArt 2024 est une collaboration au travers de laquelle les étudiants développent une application web à partir d'un cahier des charges fictif, simulant des conditions de travail réelles.
Le projet met l'accent sur l'UX et l'UI, en demandant aux participants de créer une application convaincante qui réponde aux besoins du client.
Les étudiants passent par des étapes de planification, de modélisation des données et de mise en œuvre technique, tout en se concentrant sur la gestion de projet et le travail d'équipe. Le produit final démontre leurs compétences techniques et leur capacité à justifier leurs choix de conception lors d'une présentation à l'équipe enseignante et au client.
Ce projet est une étape essentielle dans la mise en œuvre de leurs connaissances et les prépare aux défis professionnels futurs.

::AppGallery{baseUrl="/img/portfolio/cultural-trails" :imagesUrl='["SCVD-5.png"]'}
::

## L'équipe

Pour mener à bien le projet ProjArt 2024, l'équipe était composée des membres suivants :

-  Chef de projet : [Antoine Uldry](https://www.linkedin.com/in/antoineuldry/)
-  Responsable UX / Design : [Steve Pasche](https://www.linkedin.com/in/steve-pasche/)
-  Responsable communication externe / UX & UI : [Fabrice Regamey](https://www.linkedin.com/in/fabrice-regamey/)
-  Développeur responsable Frontend/Backend : _Moi-même_

## Présentation du projet

Nous avons développé une application web mobile qui permet aux utilisateurs d'explorer les sentiers culturels du canton de Vaud. L'application renforce le tourisme local en proposant des parcours thématiques interactifs, permettant aux utilisateurs de s'engager dans le patrimoine culturel de la région d'une manière amusante et immersive. Conçu pour les résidents et les touristes, ce projet encourage l'activité physique tout en mettant en valeur des zones moins connues et en promouvant l'économie locale.

### Objectifs clés

-  Promouvoir le tourisme local : L'application met en valeur les sentiers culturels et historiques du canton de Vaud, encourageant les résidents et les visiteurs à découvrir le riche patrimoine de la région.
-  Encourager l'activité physique : En intégrant des itinéraires de randonnée dans l'application, les utilisateurs sont incités à explorer à pied les sites naturels et culturels de la région, ce qui favorise le bien-être physique et mental.
-  Une expérience centrée sur le mobile : Conçue en mettant l'accent sur la convivialité mobile, l'application offre une expérience fluide et attrayante sur les smartphones, répondant ainsi à la tendance croissante du tourisme mobile.

## Fonctionnalités

### 1. Conception centrée sur l'utilisateur :

L'application a été développée avec un fort accent sur l'expérience utilisateur, mettant l'accent sur la facilité d'utilisation, l'accessibilité et l'interactivité. Les éléments clés incluent :

-  **Barre de navigation** : Accès facile aux cinq sections principales : Accueil, Découverte, Carte, Favoris et Profil.
-  **Suggestions de parcours** : En fonction de la localisation de l'utilisateur, l'application propose des parcours recommandés, en mettant en avant les options populaires et à proximité.
-  **Aide interactive** : Les utilisateurs peuvent accéder à des instructions détaillées pour les aider à naviguer dans les fonctionnalités de l'application.
-  **Accessibilité** : L'application est conçue pour être accessible à tous, avec des fonctionnalités comme la synthèse vocale pour décrire les directions lors de la réalisation d'un parcours.

### 2. Découverte et exploration :

-  **Parcours culturels et points d'intérêt** : L'application offre une grande variété de parcours et de points d'intérêt, chacun accompagné de descriptions détaillées, d'images et de notes.
-  **Filtre et recherche** : Les utilisateurs peuvent rechercher des parcours par niveau de difficulté et appliquer des filtres pour trouver des points d'intérêt spécifiques ou des thèmes particuliers.
-  **Mode navigation libre** : Les utilisateurs peuvent explorer librement la carte interactive pour découvrir des points d'intérêt culturels à proximité sans s'engager sur un parcours spécifique.

### 3. Gamification :

-  **Collection de badges** : Les utilisateurs sont récompensés par des badges lorsqu'ils complètent des parcours et visitent des points d'intérêt. Les badges sont regroupés en collections thématiques (par exemple, la région de Lavaux) qui encouragent les utilisateurs à compléter tous les parcours associés.
-  **Réalisations** : Les utilisateurs peuvent gagner des badges pour des jalons tels que la distance parcourue, le nombre de parcours terminés ou le nombre de points d'intérêt visités.

### 4. Météo et accès hors ligne :

-  **Intégration météo** : Les utilisateurs peuvent consulter une prévision météo sur 3 jours pour planifier leurs randonnées et choisir le meilleur moment pour explorer.
-  **Mode hors ligne** : Les parcours peuvent être téléchargés, permettant aux utilisateurs d'accéder aux cartes et détails des parcours sans nécessiter une connexion Internet active. <br> _État conceptuel uniquement_

### 5. Accès admin et gestion de contenu :

-  **Fonctionnalité back-office** : Les utilisateurs administrateurs peuvent gérer les parcours et points d'intérêt directement via la version de bureau de l'application, avec des options pour ajouter, modifier ou supprimer du contenu.
-  **Processus de demande d'accès admin** : Les utilisateurs peuvent demander un accès administrateur, soumis à l'approbation du Canton de Vaud.

## Points forts du développement

-  **Développement mobile-first** : Compte tenu de la domination des appareils mobiles dans l'utilisation actuelle du web, l'application a été développée selon une approche mobile-first, garantissant des performances optimales sur les smartphones tout en restant compatible avec les fonctionnalités de bureau pour les options administratives.
-  **Carte interactive** : La fonctionnalité principale de l'application, une carte interactive, permet aux utilisateurs de naviguer dans les parcours, d'explorer les points d'intérêt et d'accéder aux détails des itinéraires avec une localisation en temps réel.
-  **Gamification et engagement** : Le système de badges encourage non seulement les utilisateurs à explorer davantage de parcours, mais crée également un sentiment d'accomplissement, favorisant l'engagement des utilisateurs et les visites répétées.

## Technologies utilisées

-  **Frontend** : Vue.js pour l'interface utilisateur et maplibre-gl pour la carte interactive.
-  **Backend** : Laravel pour les fonctionnalités backend et Inertia.js pour une intégration fluide entre le frontend et le backend.
-  **Base de données** : MySQL pour stocker les données des utilisateurs, les informations sur les parcours et les points d'intérêt.
-  **Intégration API** : API météo pour fournir des prévisions sur 3 jours et OpenRouteService API pour calculer les distances et durées des parcours.
-  **Design réactif** : L'application est entièrement réactive, garantissant une expérience fluide sur les appareils mobiles et les plateformes de bureau.
-  **PWA** : L'application est une Progressive Web App, permettant aux utilisateurs de l'installer sur leurs appareils.

## Mon rôle

En tant que développeur principal frontend/backend, mes responsabilités incluaient :

-  **Planification technique** : Collaborer avec l'équipe pour définir les exigences techniques et l'architecture de l'application.
-  **Développement frontend** : Implémenter l'interface utilisateur, la carte interactive et les fonctionnalités de gamification avec Vue.js et maplibre-gl.
-  **Développement backend** : Créer les fonctionnalités backend, la structure de la base de données et les intégrations API avec Laravel et Inertia.js.
-  **Tests et débogage** : Garantir le bon fonctionnement de l'application sur divers appareils et navigateurs, en résolvant les bugs ou problèmes rencontrés.
-  **Documentation** : Fournir une documentation détaillée sur la base de code, les intégrations API et la structure générale de l'application.

## Conclusion

L'application de sentiers culturels offre une manière engageante et interactive pour les utilisateurs d'explorer le patrimoine culturel du Canton de Vaud. En combinant des éléments de gamification, une conception centrée sur l'utilisateur et un développement mobile-first, l'application propose une expérience unique qui encourage les utilisateurs à découvrir de nouveaux parcours, à en apprendre davantage sur l'histoire locale et à interagir avec les richesses culturelles de la région. Que vous soyez un résident cherchant à explorer vos environs ou un touriste à la recherche d'une expérience immersive, l'application de sentiers culturels constitue une manière captivante de découvrir le riche patrimoine du Canton de Vaud.

## Application live

L'application des sentiers culturels est disponible [ici](https://sentiers-culturels-vd.ch/) pour une durée limitée.
Ou vous pouvez consulter le [dépôt GitHub](https://github.com/HEIG-COMEM/HEIG-VD_ProjArt_Sentiers-Culturels_ASFJ) pour plus de détails.

::AppGallery{baseUrl="/img/portfolio/cultural-trails" :imagesUrl='["SCVD-1.png", "SCVD-2.png", "SCVD-3.png", "SCVD-4.png", "SCVD-5.png", "SCVD-6.png", "SCVD-7.png"]'}
::
