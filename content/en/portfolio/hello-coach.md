---
image: "portfolio/hello-coach/cover.png"
title: "Hello Coach"
description: "Simulation & narrative website to encourage more women to become football coaches"
date: 2025-08-19
gallery-slug: "hello-coach"
tags: "UX, UI, Full-stack"
---

# {{ $doc.title }}

::AppMdLinks{:links='["https://hello-coach.ch", "https://whynotyou.ch"]'}
::

## TL;DR

_European campaign (proof of concept) designed in 5 weeks for UEFA and Amazon. Goal: lower barriers, spark vocations, and make coaching more accessible to women through an immersive, replicable experience._

---

## Context

This real-world commission was carried out by a team as part of a partnership between the **HEIG-VD / Media Engineering Institute, UEFA and Amazon**. In five weeks, we delivered an interactive simulation, a narrative website, and a set of prototypes tested with women participants. The core challenge was to propose a solution that is scalable and replicable at the European level, with a concrete impact on women’s representation in football coaching.

## Project overview

We designed **Hello Coach**, a two-part experience. The simulation puts the user in the shoes of a coach and invites her to manage a team, make tactical decisions, and navigate realistic human situations. The narrative website extends this experience by structuring information, answering key questions, and clearly guiding users toward next steps: learning more, training, signing up for events, or getting in touch.

::AppGallery{baseUrl="/img/portfolio/hello-coach" :imagesUrl='["poster.png"]'}
::

## Objectives

-   **Foster projection**: help young women see themselves in the role of coach.
-   **Reduce cognitive load**: clear interactions and guided journeys.
-   **Ensure replicability**: modular architecture, translatable content, multi-context deployment (web, events, tablets).

## Key features

### Immersive simulation

In the simulation, unified navigation via arrow keys and tap lets users progress scene by scene without interruption, while a fixed progress bar displays the active chapter (title and number) and the advancement status to keep constant bearings. Scripted micro-choices mirror real aspects of the job: management, tactics, communication, and feedback.

::AppGallery{baseUrl="/img/portfolio/hello-coach" :imagesUrl='["descision-making.png", "descision-making-2.png"]'}
::

### Narrative website

On the narrative website, the landing moment is treated as decisive: a clear key message, an immersive visual, and intentionally placed CTAs. The content hierarchy, first sketched in wireframes, then validated through tested prototypes, supports goal-oriented paths: understand, overcome barriers, take action.

::AppGallery{baseUrl="/img/portfolio/hello-coach" :imagesUrl='["home-1.png", "home-2.png", "hsp-1.png", "hsp-2.png"]'}
::

## Architecture & technologies

-   **Vue.js**: modular structure, reusable components, simple and robust state management.
-   **Reveal.js**: slide-based immersive flow with smooth transitions.
-   **TailwindCSS**: clear, minimal, responsive design.
-   **Externalized content** (JSON) to ease translation and adaptation per country/event.
-   **Designed POC → production**: an evolutive, replicable base that integrates easily into a larger ecosystem.

## UX process

We started with empathy: understanding expectations and barriers, defining personas and usage scenarios. Wireframes helped structure information and anticipate user flows; prototypes were tested, iterated, and validated before development. Explicit guidance, progress bar, action labels, state feedback, reduces cognitive load and strengthens the sense of control.

## Challenges & solutions

We balanced immersion and simplicity through minimal yet coherent interactions (arrow keys / tap) and a permanently visible progression. Scalability was achieved with **data-driven storytelling**, where chapters, dialogues, and visuals are configurable to accelerate localization and translation. The multi-device context guided responsive choices and adaptive components to ensure a stable experience from web to tablets and event environments.

## Results

Part of our work, especially the simulation, was retained and integrated into the solution selected by UEFA, presented during a conference on the day of the **UEFA Women’s EURO 2025** final. The project delivered a replicable, future-proof base, ready to grow with new languages, thematic variations, and additional scenarios, while fitting into a pan-European campaign.

::AppGallery{baseUrl="/img/portfolio/hello-coach" :imagesUrl='["uefa-final-1.jpeg", "uefa-final-2.jpeg", "uefa-final-3.jpeg", "uefa-final-4.jpeg"]'}
::

## Team

::AppGallery{baseUrl="/img/portfolio/hello-coach" :imagesUrl='["team.jpeg"]'}
::

[Adem Ahmetovic](https://www.linkedin.com/in/adem-ahmetovic/), [Antoine Uldry](https://www.linkedin.com/in/antoineuldry/), [Fabrice Regamey](https://www.linkedin.com/in/fabrice-regamey/), [Jérémie Zurflüh](https://www.linkedin.com/in/jeremie-zurfluh/), [Lohann Kasper](https://www.linkedin.com/in/lohann-kasper/), [Micael Ribeiro](https://www.linkedin.com/in/micael-pinto-ribeiro/), [Steve Pasche](https://www.linkedin.com/in/steve-pasche/), [Zoé Maître](https://www.linkedin.com/in/zoe-maitre/)
