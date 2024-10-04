---
image: "portfolio/todoapp/ToDoApp-cover.png"
title: "Task Management Web Application"
description: "Explore my ToDo App project, a task management web application with user authentication."
date: 2023-12-07
gallery-slug: "todoapp"
tags: "Full-stack"
---

# {{ $doc.title }}

::AppMdLinks{:links='["https://github.com/zurfjereluhmie/HEIG-VD_ProgServ2_ToDoApp"]'}
::

As part of my coursework in the ProgServ2 class at HEIG-VD, in a group of two students (I have been paired with [Antoine Uldry](https://www.linkedin.com/in/antoineuldry/)), we developed a web-based task management tool that allows users to organize their tasks efficiently with the added layer of user authentication.

## Project Overview

The ToDo App is designed to help users manage their daily tasks and projects with ease. The app allows users to perform CRUD (Create, Read, Update, Delete) operations on tasks, organize them into categorized folders, and track progress seamlessly. The addition of a user authentication system ensures that only registered users can access and manage their tasks, securing the data from unauthorized access.

The key functionalities include:

-  User authentication system for secure task management.
-  CRUD operations for managing tasks.
-  Task categorization into folders for better organization.
-  Multiple language support for a global user base.

## Technologies Used

This project integrates several technologies :

-  Docker: Containerized environment setup for easy deployment.
-  Composer: Dependency management for PHP-based applications.
-  Apache: Web server to handle requests and serve the application.
-  PHP: Back-end logic for handling user requests, database operations, and authentication.
-  SQLite: A lightweight database solution for storing tasks and user data.
-  MailHog: An email testing tool used to capture email notifications sent during the user registration process.

## How It Works

Once the application is set up, users can log in and start organizing their tasks. Here’s a breakdown of the main features:

1. User Authentication: New users must register, and existing users can log in with their credentials. This ensures that each user’s data is private and secure.
2. CRUD Operations: Users can add new tasks, view existing ones, update task details, and delete tasks once they’re completed. This core functionality is central to the app’s usability.
3. Task Categorization: Users can group tasks into folders, allowing them to organize projects, priorities, or personal goals more effectively.

## Gallery

::AppGallery{baseUrl="/img/portfolio/todoapp" :imagesUrl='["ToDoApp-1.png", "ToDoApp-2.png", "ToDoApp-3.png", "ToDoApp-4.png", "ToDoApp-5.png"]'}
::
