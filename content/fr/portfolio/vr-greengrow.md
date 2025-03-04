---
image: "portfolio/vr-greengrow/cover.png"
title: "GreenGrow - Jardin VR Interactif"
description: "GreenGrow est une expérience VR basée sur le web où les utilisateurs peuvent créer leur propre jardin virtuel."
date: 2025-03-04
gallery-slug: "vr-greengrow"
tags: "VR, Frontend"
---

# {{ $doc.title }}

::AppMdLinks{:links='["https://github.com/zurfjereluhmie/aframe-zen-garden", "https://zurfjereluhmie.github.io/aframe-zen-garden/"]'}
::

## Contexte

Ce projet a été développé lors d’un cours de deux semaines à la HEIG, avec pour objectif d’explorer le framework A-Frame et de créer une expérience VR immersive et engageante.

Avec GreenGrow, les utilisateurs peuvent interagir avec un jardin virtuel apaisant, où ils plantent, arrosent et voient leurs fleurs grandir dans un environnement 3D immersif. Le projet met l’accent sur la relaxation, l’exploration et des interactions VR simples mais captivantes.

::AppGallery{baseUrl="/img/portfolio/vr-greengrow" :imagesUrl='["flowers.png"]'}
::

## Présentation du projet

GreenGrow est une expérience VR accessible depuis un navigateur, permettant aux joueurs de créer leur propre jardin virtuel. Grâce à des mécaniques VR intuitives, ils peuvent creuser la terre, planter des graines, arroser leurs fleurs et même échanger avec un NPC pour recevoir un appareil photo et capturer leurs créations.

### Fonctionnalités principales

-   **Simulation de jardinage**: Creusez, plantez et faites pousser vos propres fleurs.
-   **Système d’arrosage**: Assurez la croissance de vos plantes en les maintenant hydratées.
-   **Échange avec un NPC**: Offrez une fleur pour obtenir un appareil photo et débloquer de nouvelles interactions.
-   **Mode photographie**: Capturez et sauvegardez des images de vos créations.
-   **Ambiance Zen**: Créez votre propre étagère florale et personnalisez votre espace.

## Performance & Low-Poly

Créer une expérience VR dans un navigateur nécessite une optimisation minutieuse pour garantir des performances fluides, notamment sur les casques VR autonomes et les appareils mobiles.

### Pourquoi utiliser un style visuel Low-Poly ?

-   Meilleures performances: Un nombre réduit de polygones **diminue la charge sur le moteur de rendu** du navigateur, permettant des taux de rafraîchissement plus élevés en WebXR.
-   Temps de chargement plus rapides: Des assets légers garantissent un **chargement rapide sur le web**, rendant l’expérience plus accessible, même avec une connexion limitée.
-   Simplicité esthétique: Un style épuré et stylisé **renforce l’ambiance zen**, en évitant une surcharge visuelle inutile.
-   Optimisé pour les casques VR autonomes: Des appareils comme le Meta Quest ont une puissance de calcul limitée par rapport aux casques PC VR, rendant les environnements low-poly particulièrement adaptés.

Ce choix visuel garantit que GreenGrow fonctionne sans accroc sur une large gamme d’appareils tout en offrant une immersion agréable et fluide.

## Technologies utilisées

GreenGrow a été développé avec des technologies web modernes pour assurer des performances optimales et une compatibilité sur différents supports:

### A-Frame

-   Framework principal utilisé pour créer l’expérience WebXR.
-   Simplifie la création d’environnements 3D et d’interactions VR.

### Vue.js

-   Utilisé pour structurer l’interface et gérer l’état de manière efficace.
-   Permet un développement réactif et modulaire pour de meilleures performances.

### Blender

-   Utilisé pour modéliser et optimiser des assets low-poly pour de meilleures performances.
-   Garantit des fichiers 3D légers et optimisés pour le rendu en temps réel.

## Application en ligne

Démo: [GreenGrow VR](https://zurfjereluhmie.github.io/aframe-zen-garden/)

::AppGallery{baseUrl="/img/portfolio/vr-greengrow" :imagesUrl='["camera.png", "night-shot.png", "picture-wall-x-camera.png"]'}
::
