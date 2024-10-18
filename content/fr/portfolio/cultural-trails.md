---
image: "portfolio/cultural-trails/cover.png"
title: "FR Cultural trails"
description: "A mobile-first web application that allows users to explore the cultural trails of the Canton of Vaud."
date: 2024-07-12
gallery-slug: "cultural-trails"
tags: "Full-stack, App Architecture"
---

# {{ $doc.title }}

::AppMdLinks{:links='["https://github.com/HEIG-COMEM/HEIG-VD_ProjArt_Sentiers-Culturels_ASFJ", "https://sentiers-culturels-vd.ch/home"]'}
::

## Context

The ProjArt 2024 project is a collaborative initiative where students develop a web application from a fictitious brief, simulating real-life conditions.
It focuses on UX and UI, asking participants to create a compelling application that meets the customer's needs.
Students go through stages of planning, data modeling and technical implementation, while focusing on project management and teamwork. The final product demonstrates their technical skills and their ability to justify their design choices in a presentation to the teaching team and the customer.
This project is an essential step in applying their knowledge and preparing them for future professional challenges.

## The team

To complete the ProjArt 2024 project, the team was composed of the following members:

-  Project Manager: [Antoine Uldry](https://www.linkedin.com/in/antoineuldry/)
-  UX / Design Manager: [Steve Pasche](https://www.linkedin.com/in/steve-pasche/)
-  External Communication Manager / UX & UI: [Fabrice Regamey](https://www.linkedin.com/in/fabrice-regamey/)
-  Lead Frontend/Backend Developer: _myself_

## Project Overview

We developed a mobile-first web application that allows users to explore the cultural trails of the Canton of Vaud. The app enhances local tourism by offering interactive, thematic trails, allowing users to engage with the region’s cultural heritage in a fun and immersive way. Designed for both residents and tourists, this project encourages physical activity while showcasing lesser-known areas and promoting the local economy.

### Key Objectives

-  Promote Local Tourism: The app highlights the cultural and historical trails of the Canton of Vaud, encouraging both residents and visitors to discover the region’s rich heritage.
-  Encourage Physical Activity: By incorporating hiking routes into the app, users are motivated to explore the region’s natural and cultural landmarks on foot, promoting physical and mental well-being.
-  Mobile-First Experience: Designed with a focus on mobile usability, the app offers a smooth and engaging experience on smartphones, catering to the growing trend of mobile-based tourism.

## Features & Functionality

### 1. User-Centric Design:

The app was developed with a strong focus on user experience, emphasizing ease of use, accessibility, and interactivity. Key elements include:

-  **Navigation Bar**: Easy access to five primary sections: Home, Discovery, Map, Favorites, and Profile.
-  **Trail Suggestions**: Based on user location, the app provides recommended trails, highlighting popular and nearby options.
-  **Interactive Help**: Users can access detailed instructions to help them navigate the app’s features.
-  **Accessibility**: The app is designed to be accessible to all users, with features like text-to-speech functionality to describe the directions when completing a path.

### 2. Discovery & Exploration:

-  **Cultural Trails and Points of Interest**: The app offers a wide variety of trails and points of interest, each with detailed descriptions, images, and ratings.
-  **Filter & Search**: Users can search trails by difficulty and apply filters to find specific points of interest or themes.
-  **Free Navigation Mode**: Users can freely explore the interactive map to discover nearby cultural points of interest without committing to a specific trail.

### 3. Gamification:

-  **Badge Collection**: Users are rewarded with badges for completing trails and visiting points of interest. Badges are grouped into thematic collections (e.g., Lavaux region) that encourage users to complete all associated trails.
-  **Achievements**: Users can earn badges for milestones like distance covered, the number of trails completed, or the number of points of interest visited.

### 4. Weather & Offline Access:

-  **Weather Integration**: Users can check a 3-day weather forecast to plan their hikes, ensuring they choose the best time for exploration.
-  **Offline Mode**: Trails can be downloaded, allowing users to access trail maps and details without requiring an active internet connection. <br> _Conceptual state only_

### 5. Admin Access & Content Management:

-  **Back-Office Functionality**: Admin users can manage trails and points of interest directly through the desktop version of the app, with options to add, modify, or delete content.
-  **Admin Request Process**: Users can request admin access, subject to approval from the Canton of Vaud.

## Development Highlights

-  **Mobile-First Development**: Given the dominance of mobile devices in modern web usage, the app was developed with a mobile-first approach to ensure optimal performance on smartphones while maintaining compatibility with desktop usage for admin features.
-  **Interactive Map**: The core feature of the app, an interactive map, allows users to navigate trails, explore points of interest, and access route details with real-time positioning.
-  **Gamification and Engagement**: The badge system not only encourages users to explore more trails but also creates a sense of accomplishment, driving user engagement and repeat visits.

## Technologies Used

-  **Frontend**: Vue.js for the user interface and for the map maplibre-gl
-  **Backend**: Laravel for the backend functionality and Inertia.js for seamless frontend/backend integration
-  **Database**: MySQL for storing user data, trail information, and points of interest
-  **API Integration**: Weather API for providing 3-day forecasts and OpenRouteService API for calculating trail distances and durations
-  **Responsive Design**: The app is fully responsive, ensuring a seamless experience on both mobile devices and desktop platforms
-  **PWA**: The app is a Progressive Web Application, allowing users to install it on their devices

## My Role

As the Lead Frontend/Backend Developer, my responsibilities included:

-  **Technical Planning**: Collaborating with the team to define the technical requirements and architecture of the application.
-  **Frontend Development**: Implementing the user interface, interactive map, and gamification features using Vue.js and maplibre-gl.
-  **Backend Development**: Creating the backend functionality, database structure, and API integrations using Laravel and Inertia.js.
-  **Testing & Debugging**: Ensuring the application functions correctly across various devices and browsers, addressing any bugs or issues that arise.
-  **Documentation**: Providing detailed documentation for the codebase, API integrations, and overall application structure.

## Conclusion

The Cultural Trails app offers an engaging and interactive way for users to explore the cultural heritage of the Canton of Vaud. By combining elements of gamification, user-centric design, and mobile-first development, the app provides a unique experience that encourages users to discover new trails, learn about local history, and engage with the region’s cultural offerings. Whether you’re a resident looking to explore your surroundings or a tourist seeking an immersive experience, the Cultural Trails app offers a compelling way to engage with the rich heritage of the Canton of Vaud.

## Live Application

The Cultural Trails app is available [here](https://sentiers-culturels-vd.ch/) for a limited time.
Or you can check the [GitHub repository](https://github.com/HEIG-COMEM/HEIG-VD_ProjArt_Sentiers-Culturels_ASFJ) for more details.

::AppGallery{baseUrl="/img/portfolio/cultural-trails" :imagesUrl='["SCVD-1.png", "SCVD-2.png", "SCVD-3.png", "SCVD-4.png", "SCVD-5.png", "SCVD-6.png", "SCVD-7.png"]'}
::
