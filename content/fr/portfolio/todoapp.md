---
image: "portfolio/todoapp/ToDoApp-cover.png"
title: "Application de gestion de tâches"
description: "Projet de ToDo App, une application web de gestion de tâches avec authentification utilisateur."
date: 2023-12-07
gallery-slug: "todoapp"
tags: "Full-stack"
---

# {{ $doc.title }}

::AppMdLinks{:links='["https://github.com/zurfjereluhmie/HEIG-VD_ProgServ2_ToDoApp"]'}
::

## ToDo App: Gestion des tâches avec authentification utilisateur

Dans le cadre de mon cours ProgServ2 à la HEIG-VD, j'ai collaboré avec [Antoine Uldry](https://www.linkedin.com/in/antoineuldry/) pour développer une application web de gestion de tâches. Cette application permet aux utilisateurs d'organiser leurs tâches de manière efficace, tout en intégrant un système d'authentification pour sécuriser l'accès aux données.

## Vue d'ensemble du projet

L'application ToDo est conçue pour aider les utilisateurs à gérer facilement leurs tâches quotidiennes et leurs projets. Elle permet d'effectuer des opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) sur des tâches, de les organiser en dossiers catégorisés, et de suivre l'avancement. L'ajout d'un système d'authentification garantit que seuls les utilisateurs enregistrés peuvent accéder et gérer leurs tâches, protégeant ainsi les données contre tout accès non autorisé.

### Les fonctionnalités clés incluent :

-  Système d'authentification utilisateur pour une gestion sécurisée des tâches.
-  Opérations CRUD pour la gestion des tâches.
-  Catégorisation des tâches dans des dossiers pour une meilleure organisation.
-  Support multilingue pour un public global.

## Technologies utilisées

Ce projet intègre plusieurs technologies :

-  **Docker** : Configuration de l’environnement dans des conteneurs pour un déploiement facile.
-  **Composer** : Gestionnaire de dépendances pour les applications basées sur PHP.
-  **Apache** : Serveur web pour gérer les requêtes et servir l’application.
-  **PHP** : Logique back-end pour le traitement des requêtes utilisateur, les opérations sur la base de données, et l'authentification.
-  **SQLite** : Solution de base de données légère pour stocker les tâches et les données utilisateur.
-  **MailHog** : Outil de test d’e-mails pour capturer les notifications envoyées lors de l’inscription des utilisateurs.

## Fonctionnement

Une fois l’application installée, les utilisateurs peuvent se connecter et commencer à organiser leurs tâches. Voici un aperçu des principales fonctionnalités :

1. **Authentification utilisateur** : Les nouveaux utilisateurs doivent s’inscrire, et les utilisateurs existants peuvent se connecter avec leurs identifiants. Cela garantit la confidentialité et la sécurité des données de chaque utilisateur.
2. **Opérations CRUD** : Les utilisateurs peuvent ajouter de nouvelles tâches, visualiser les tâches existantes, modifier les détails d’une tâche et supprimer des tâches lorsqu’elles sont terminées. Cette fonctionnalité est essentielle pour l’ergonomie de l’application.
3. **Catégorisation des tâches** : Les utilisateurs peuvent regrouper leurs tâches dans des dossiers, ce qui leur permet d’organiser plus efficacement leurs projets, priorités ou objectifs personnels.

## Galerie

::AppGallery{baseUrl="/img/portfolio/todoapp" :imagesUrl='["ToDoApp-1.png", "ToDoApp-2.png", "ToDoApp-3.png", "ToDoApp-4.png", "ToDoApp-5.png"]'}
::
