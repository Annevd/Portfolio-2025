---
url: https://connect-your-tribe-squad-page-j6wz.onrender.com/
title: Squadpage
date: 2024-02-29
description: Project where I had to build a website for our squad with a team
  using Node and data from an API. The website contains a game where you fight
  against your classmates!
githubUrl: https://github.com/Annevd/connect-your-tribe-squad-page
image:
  url: /assets/images/squadpage.png
tags:
  - "2024"
  - Interactive
  - NodeJS
  - Scroll Driven Animations
---

## The assignment

This assignment challenged our team to build a custom website for our FDND squad using Node.js and the [whois.fdnd.nl](https://whois.fdnd.nl) API.

On our finished squad page, you can:

- View all members of **Squad 1D**
- Click on each individual to read more and leave a message
- Play a fun browser game where you **battle your classmates**!

We were responsible for both the **design** and **functionality** of the site from start to finish.

## My contribution

I was responsible for the **entire visual design** of the project, inspired by nostalgic retro video games.

Highlights of what I built:

- Designed a **glitchy, retro-style UI** using layered neon colors: **magenta, yellow, aqua, and black**
- Created a **scroll-driven layout** using CSS `scroll-timeline`:
  - Three vertical columns animate in and out as you scroll
  - The middle column scrolls in the **opposite direction** for a dynamic effect
- Made the member columns **sortable by name**, even with the complex layout
- Designed UI elements like buttons and fonts to feel game-like and animated

## Demo

<img src="/assets/demos/squadpage-demo.gif" alt="Squadpage Website Demo"/>

## Technical details

The project was built with:

- **Node.js** for server-side JavaScript
- **Express** for routing and serving content
- **EJS** for templating and rendering squad data from the API
- **CSS scroll-driven animations** for visual storytelling
- **Vanilla JS** for the in-browser game and interactivity