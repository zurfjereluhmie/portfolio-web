---
image: "portfolio/vr-greengrow/cover.png"
title: "GreenGrow - Interactive VR Garden"
description: "GreenGrow is a web-based VR experience where users can create their own virtual garden."
date: 2025-03-04
gallery-slug: "vr-greengrow"
tags: "VR, Frontend"
---

# {{ $doc.title }}

::AppMdLinks{:links='["https://github.com/zurfjereluhmie/aframe-zen-garden", "https://zurfjereluhmie.github.io/aframe-zen-garden/"]'}
::

## Context

This project was developed during a two-week course at HEIG, where the objective was to explore the A-Frame framework and create an engaging VR experience.

With GreenGrow, users can interact with a serene virtual garden, where they plant, water, and watch their flowers grow in an immersive 3D environment. The project focuses on relaxation, exploration, and simple but engaging VR interactions.

::AppGallery{baseUrl="/img/portfolio/vr-greengrow" :imagesUrl='["flowers.png"]'}
::

## Project Overview

GreenGrow is a web-based VR experience where players can create their own virtual garden. Using intuitive VR mechanics, they can dig the soil, plant seeds, water flowers, and even trade with an NPC to receive a camera and capture their creations.

### Key Features

-   **Gardening Simulation**: Dig, plant, and grow your own flowers.
-   **Watering System**: Ensure your plants thrive by keeping them hydrated.
-   **NPC Trading**: Trade flowers to receive a camera and unlock new interactions.
-   **Photography Mode**: Capture and save snapshots of your beautiful creations.
-   **Zen Ambiance**: Create your own flower shelf.

## Performance & Low-Poly

Creating a VR experience in the browser requires careful optimization to ensure smooth performance, especially on standalone VR headsets and mobile devices.

### Why Use a Low-Poly Visual Style?

-   Better Performance: Lower polygon counts **reduce the strain on the browser’s rendering engine**, allowing for higher frame rates in WebXR.
-   Faster Loading Times: Lightweight assets ensure **quick loading over the web**, improving accessibility for users with slower connections.
-   Aesthetic Simplicity: The clean, stylized look **enhances the Zen atmosphere**, making the experience more relaxing without excessive visual noise.
-   Optimized for Standalone VR: Devices like the Meta Quest have limited processing power compared to PC VR, making low-poly environments ideal.

This visual choice ensures GreenGrow runs smoothly across devices while maintaining an engaging and immersive experience.

## Technologies Used

GreenGrow was built using modern web technologies to ensure smooth performance and compatibility across devices:

### A-Frame

-   The core framework for building WebXR experiences.
-   Simplifies the creation of 3D environments and VR interactions.

### Vue.js

-   Used for structuring the UI and managing state efficiently.
-   Enables reactive and modular development for better performance.

### Blender

-   Used to create and optimize low-poly 3D models for performance.
-   Ensures assets are lightweight and optimized for real-time rendering.

## Live Application

Live Demo: [GreenGrow VR](https://zurfjereluhmie.github.io/aframe-zen-garden/)

::AppGallery{baseUrl="/img/portfolio/vr-greengrow" :imagesUrl='["camera.png", "night-shot.png", "picture-wall-x-camera.png"]'}
::
