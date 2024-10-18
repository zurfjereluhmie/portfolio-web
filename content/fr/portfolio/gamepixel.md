---
image: "portfolio/gamepixel/GamePixel-Cover.png"
title: "FR GamePixel"
description: "An interactive app visualizing video game graphic evolution, trends, and milestones using dynamic data."
date: 2024-05-17
gallery-slug: "gamepixel"
tags: "DataViz, Frontend"
---

# {{ $doc.title }}

::AppMdLinks{:links='["https://github.com/HEIG-COMEM/HEIG-VD_VisualDon_GamePixel", "https://gamepixel-visualdon.netlify.app/"]'}
::

GamePixel is an interactive web application developed to explore and visualize the graphic history of video games. This project uses data extracted from [Kaggle](https://www.kaggle.com/) and enriched with additional sources, allowing users to dive deep into video game trends, genre popularity, and technological milestones throughout gaming history.

## Project Overview

The goal of GamePixel is to highlight key moments in the evolution of video game graphics, from early releases to modern advancements. By analyzing video game data such as ratings, genres, platforms, and developer insights, users can uncover trends and patterns that have shaped the industry. Each major graphical advancement is showcased with notable games of the time, offering a unique blend of historical context and data-driven insights.

## Technologies Used

The data used for GamePixel was sourced from Kaggle and enhanced to create a customized dataset with 14 columns and over 100,000 entries. The main technologies used in this project include:

-  **CSV Data Structures**: Storing and managing detailed information about games.
-  **JSON for Dynamic Data Updates**: Allowing the application to adapt as new data is added, keeping the visualizations up-to-date.
-  **Netlify**: For seamless deployment and hosting of the web application.

## Dynamic Data Visualization

The strength of GamePixel lies in its dynamic design. The app automatically adapts to new data, meaning it continues to evolve alongside the gaming industry. This flexibility is powered by a custom-built JSON file that holds all the key data to be displayed, including:

-  Game details such as name, release date, genres, platforms, and ratings.
-  Major events in the history of gaming, allowing users to explore specific periods and technological shifts.

## Project Goals

**GamePixel** was created to:

-  Visualize the evolution of video game graphics over time.
-  Highlight significant technological advancements and the games that marked those changes.
-  Analyze the state of the gaming market at various historical points, comparing trends, genres, and consumer preferences.

To achieve these goals, GamePixel introduce the users using Pixie. Pixie is a "virtual assistant" that introduces the user to the application and guides them through the various features and functionalities.

Through this approach, GamePixel provides a compelling look at how video games have evolved, both technically and artistically.

## Live Application

GamePixel is hosted using Netlify for easy access. Explore the application and immerse yourself in the graphic history of video games by visiting the following link:

[GamePixel Live Application](https://gamepixel-visualdon.netlify.app/)

::AppGallery{baseUrl="/img/portfolio/gamepixel" :imagesUrl='["GamePixel-1.png", "GamePixel-2.png", "GamePixel-3.png", "GamePixel-4.png"]'}
::

## Challenge: Handling Large Data Sets

The constraint of the course required the application to be **client-side only**, meaning that all data processing and visualization had to be done on the user’s device. No server-side processing was allowed, which presented a challenge when handling large datasets.

A significant challenge in developing GamePixel was managing a vast volume of data—over 100,000 game entries—which resulted in notable performance issues during data loading and visualization.

To address these challenges and enhance the user experience, we implemented a combination of caching and session storage. This strategy minimizes the need for continuous data reprocessing, allowing the application to optimize performance on the second page load. By caching data and utilizing session storage, GamePixel significantly reduced loading times while retaining the ability to display real-time updates as new data becomes available. This solution ensured a smooth and responsive user experience, even when handling substantial datasets, allowing the app to perform efficiently under high data loads.

## Data Source and References

This project leverages data from [Kaggle](https://www.kaggle.com/datasets/gsimonx37/backloggd), consolidated with additional sources to provide comprehensive insights. The dataset was also used to generate meaningful statistics and visualizations hosted on our GitHub repository.

## Conclusion

GamePixel offers a rich exploration of the video game industry’s graphic milestones, combining data visualization with historical insights. The app’s ability to adapt dynamically to new data ensures that it remains relevant as new games and technologies emerge. Whether you’re a gamer, developer, or simply curious about the evolution of video games, GamePixel is an informative and engaging way to explore the industry’s past and present.
