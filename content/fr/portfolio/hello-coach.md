---
image: "portfolio/hello-coach/cover.png"
title: "Hello Coach"
description: "Simulation & site narratif pour encourager les femmes à devenir coachs"
date: 2025-08-19
gallery-slug: "hello-coach"
tags: "UX, UI, Full-stack"
---

# {{ $doc.title }}

::AppMdLinks{:links='["https://hello-coach.ch", "https://whynotyou.ch"]'}
::

## TL;DR

_Campagne européenne (proof of concept) conçue en 5 semaines pour l’UEFA et Amazon. Objectif : abaisser les freins, susciter des vocations et rendre le coaching plus accessible aux femmes, à travers une expérience immersive et réplicable._

---

## Contexte

Ce mandat réel a été mené en équipe dans le cadre d’un partenariat entre la **HEIG-VD / Media Engineering Institute, l’UEFA et Amazon**. En cinq semaines, nous avons livré une simulation interactive, un site narratif et une série de prototypes testés auprès d’utilisatrices. L’enjeu central consistait à proposer une solution scalable et réplicable à l’échelle européenne, avec un impact concret sur la représentation féminine dans le coaching de football.

## Aperçu du projet

Nous avons conçu **Hello Coach**, une expérience en deux volets complémentaires. La simulation place l’utilisatrice dans la peau d’une coache et l’invite à gérer une équipe, prendre des décisions tactiques et résoudre des situations humaines réalistes. Le site narratif prolonge cette expérience en structurant l’information, en répondant aux questions clés et en orientant clairement vers les prochaines étapes : se renseigner, se former, s’inscrire à des événements ou entrer en contact.

::AppGallery{baseUrl="/img/portfolio/hello-coach" :imagesUrl='["poster.png"]'}
::

## Objectifs

-   **Susciter la projection** : permettre à de jeunes femmes de se voir dans le rôle de coach.
-   **Réduire la charge cognitive** : interactions claires et parcours guidé.
-   **Assurer la réplicabilité** : architecture modulaire, contenus traduisibles, déploiement multi-contextes (web, événements, tablettes).

## Fonctionnalités clés

### Simulation immersive

Dans la simulation, la navigation unifiée au clavier et au tap permet d’avancer scène après scène sans rupture, tandis qu’une barre de progression fixe affiche le chapitre actif (titre et numéro) et l’état d’avancement pour maintenir un repère constant. Les micro-choix scénarisés font écho aux réalités du métier : management, tactique, communication, feedback.

::AppGallery{baseUrl="/img/portfolio/hello-coach" :imagesUrl='["descision-making.png", "descision-making-2.png"]'}
::

### Site narratif

Sur le site narratif, l’arrivée est pensée comme un moment décisif : un message clé immédiatement visible, un visuel immersif et des call-to-actions placés avec intention. La hiérarchie des contenus, d’abord esquissée en wireframes puis validée via des prototypes testés, soutient des parcours orientés objectifs : comprendre, lever les freins, passer à l’action.

::AppGallery{baseUrl="/img/portfolio/hello-coach" :imagesUrl='["home-1.png", "home-2.png", "hsp-1.png", "hsp-2.png"]'}
::

## Architecture & technologies

-   **Vue.js** : structure modulaire, composants réutilisables, state management simple et robuste.
-   **Reveal.js** : organisation du parcours en slides immersives, transitions fluides.
-   **TailwindCSS** : design clair, épuré et responsive.
-   **Contenus externalisés** (JSON) pour faciliter la traduction et l’adaptation pays/événement.
-   **Pensé POC → production** : base évolutive, réplicable et facile à intégrer dans un écosystème plus large.

## Process UX

Notre approche a débuté par l’empathie : compréhension des attentes et des freins, définition de personas et de scénarios d’usage. Les wireframes ont permis de structurer l’information et d’anticiper les parcours, puis les prototypes ont été testés, itérés et validés en amont du développement. Le guidage explicite, barre de progression, libellés d’action, feedback d’état, réduit la charge cognitive et renforce la sensation de contrôle.

## Défis & solutions

L’équilibre entre immersion et simplicité a été recherché par des interactions minimales mais cohérentes (flèches / tap) et par une progression lisible en permanence. La scalabilité a été assurée par une narration pilotée par les données, où chapitres, dialogues et visuels sont configurables pour accélérer les déclinaisons et traductions. Le contexte multi-supports a guidé des choix responsive et des composants adaptatifs pour garantir une expérience stable du web aux tablettes et aux dispositifs d’événementiel.

## Résultats

Une partie de notre travail, en particulier la simulation, a été conservée et intégrée dans la solution retenue par l’UEFA, présentée lors d’une conférence le jour de la finale de l’**UEFA Women’s EURO 2025**. Le projet a livré une base réplicable et prête à évoluer, capable d’accueillir de nouvelles langues, des déclinaisons thématiques et des scénarios additionnels, tout en s’inscrivant dans une campagne paneuropéenne

::AppGallery{baseUrl="/img/portfolio/hello-coach" :imagesUrl='["uefa-final-1.jpeg", "uefa-final-2.jpeg", "uefa-final-3.jpeg", "uefa-final-4.jpeg"]'}
::

## Équipe

::AppGallery{baseUrl="/img/portfolio/hello-coach" :imagesUrl='["team.jpeg"]'}
::

[Adem Ahmetovic](https://www.linkedin.com/in/adem-ahmetovic/), [Antoine Uldry](https://www.linkedin.com/in/antoineuldry/), [Fabrice Regamey](https://www.linkedin.com/in/fabrice-regamey/), [Jérémie Zurflüh](https://www.linkedin.com/in/jeremie-zurfluh/), [Lohann Kasper](https://www.linkedin.com/in/lohann-kasper/), [Micael Ribeiro](https://www.linkedin.com/in/micael-pinto-ribeiro/), [Steve Pasche](https://www.linkedin.com/in/steve-pasche/), [Zoé Maître](https://www.linkedin.com/in/zoe-maitre/)
