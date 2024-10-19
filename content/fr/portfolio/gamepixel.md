---
image: "portfolio/gamepixel/GamePixel-Cover.png"
title: "GamePixel"
description: "Une application interactive visualisant l'évolution graphique et les tendances des jeux vidéo."
date: 2024-05-17
gallery-slug: "gamepixel"
tags: "DataViz, Frontend"
---

# {{ $doc.title }}

::AppMdLinks{:links='["https://github.com/HEIG-COMEM/HEIG-VD_VisualDon_GamePixel", "https://gamepixel-visualdon.netlify.app/"]'}
::

## GamePixel : Plongée interactive dans l’histoire graphique des jeux vidéo

GamePixel est une application web interactive conçue pour explorer et visualiser l’histoire graphique des jeux vidéo. Ce projet utilise des données extraites de [Kaggle](https://www.kaggle.com/) et enrichies par des sources supplémentaires, permettant aux utilisateurs d’explorer en profondeur les tendances des jeux vidéo, la popularité des genres, ainsi que les jalons technologiques à travers l’histoire du jeu.

## Vue d’ensemble du projet

L’objectif de GamePixel est de mettre en lumière les moments clés de l’évolution des graphismes dans les jeux vidéo, depuis les premières sorties jusqu'aux avancées modernes. En analysant des données de jeux vidéo comme les évaluations, les genres, les plateformes et les informations des développeurs, les utilisateurs peuvent découvrir les tendances et les motifs qui ont façonné l’industrie. Chaque grande avancée graphique est illustrée par des jeux emblématiques de l’époque, offrant un mélange unique de contexte historique et d’informations basées sur les données.

## Technologies utilisées

Les données utilisées pour GamePixel proviennent de Kaggle et ont été enrichies pour créer un jeu de données personnalisé avec 14 colonnes et plus de 100 000 entrées. Les principales technologies utilisées dans ce projet incluent :

-  **Structures de données CSV** : Pour stocker et gérer des informations détaillées sur les jeux.
-  **JSON pour les mises à jour dynamiques des données** : Permettant à l'application de s'adapter à l'ajout de nouvelles données et de garder les visualisations à jour.
-  **Netlify** : Pour le déploiement et l'hébergement sans effort de l’application web.

## Visualisation dynamique des données

La force de GamePixel réside dans sa conception dynamique. L’application s’adapte automatiquement aux nouvelles données, ce qui signifie qu’elle continue d’évoluer parallèlement à l’industrie du jeu vidéo. Cette flexibilité est rendue possible grâce à un fichier JSON personnalisé contenant toutes les données clés à afficher, notamment :

-  Les détails des jeux tels que le nom, la date de sortie, les genres, les plateformes et les évaluations.
-  Les événements majeurs dans l’histoire des jeux vidéo, permettant aux utilisateurs d’explorer des périodes spécifiques et des transitions technologiques.

## Objectifs du projet

**GamePixel** a été créé pour :

-  Visualiser l’évolution des graphismes des jeux vidéo au fil du temps.
-  Mettre en avant les avancées technologiques significatives et les jeux qui ont marqué ces changements.
-  Analyser l’état du marché des jeux vidéo à différents moments historiques, en comparant les tendances, les genres et les préférences des consommateurs.

Pour atteindre ces objectifs, GamePixel intègre **Pixie**, un "assistant virtuel" qui introduit l’utilisateur à l’application et le guide à travers les différentes fonctionnalités.

Grâce à cette approche, GamePixel offre un aperçu fascinant de l’évolution des jeux vidéo, tant sur le plan technique qu’artistique.

## Application web

GamePixel est hébergé sur Netlify pour un accès facile. Explorez l’application et plongez-vous dans l’histoire graphique des jeux vidéo en visitant le lien suivant :

[Application web GamePixel](https://gamepixel-visualdon.netlify.app/)

::AppGallery{baseUrl="/img/portfolio/gamepixel" :imagesUrl='["GamePixel-1.png", "GamePixel-2.png", "GamePixel-3.png", "GamePixel-4.png"]'}
::

## Défi : Gestion de grands ensembles de données

La contrainte imposée par le cours exigeait que l’application soit **exclusivement côté client**, ce qui signifie que tout le traitement des données et la visualisation devaient se faire sur l’appareil de l’utilisateur. Aucun traitement côté serveur n’était permis, ce qui a posé un défi lors de la gestion de grands ensembles de données.

Un défi majeur dans le développement de GamePixel était de gérer un volume considérable de données — plus de 100 000 entrées de jeux — ce qui a entraîné des problèmes de performance notables lors du chargement et de la visualisation des données.

Pour résoudre ces problèmes et améliorer l’expérience utilisateur, nous avons mis en œuvre une combinaison de **"caching"** et de **"session storage"**. Cette stratégie permet de minimiser la nécessité de retraiter les données en continu, optimisant ainsi les performances dès le second chargement de la page. Grâce au cache et à l’utilisation du "session storage", GamePixel a considérablement réduit les temps de chargement tout en conservant la capacité d'afficher des mises à jour en temps réel à mesure que de nouvelles données deviennent disponibles. Cette solution a garanti une expérience utilisateur fluide et réactive, même lors de la gestion de gros volumes de données, permettant à l’application de fonctionner efficacement sous de lourdes charges de données.

## Source de données et références

Ce projet utilise des données issues de [Kaggle](https://www.kaggle.com/datasets/gsimonx37/backloggd), consolidées avec des sources supplémentaires pour fournir des informations complètes. Le jeu de données a également été utilisé pour générer des statistiques et visualisations, hébergées sur notre dépôt GitHub.

## Conclusion

GamePixel offre une exploration approfondie des jalons graphiques de l’industrie du jeu vidéo, en combinant visualisation des données et contexte historique. La capacité de l’application à s’adapter dynamiquement aux nouvelles données garantit sa pertinence à mesure que de nouveaux jeux et technologies émergent. Que vous soyez un joueur, un développeur ou simplement curieux de l’évolution des jeux vidéo, GamePixel est un moyen informatif et captivant d’explorer l’histoire et le présent de cette industrie.
