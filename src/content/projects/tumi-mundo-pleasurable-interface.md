---
url: https://pleasurable-ui-p9p8.onrender.com/
title: Tumi Mundo Pleasurable Interface
date: 2024-05-29
description: For this project I had to design and create an interface for a
  client that would make users happy.
githubUrl: https://github.com/Annevd/pleasurable-ui
image:
  url: /src/assets/images/tumi-mundo.png
tags:
  - "2024"
  - Pleasurable
  - NodeJS
---

## About Tumi Mundo

Tumi Mundo is a language learning app designed for young children in, for example, multilingual households. It encourages learning through fun and engaging activities like **interactive storybooks**, **playlists**, and **exercises**.


## Enhancing the Interface 

The main goal of this project was to make the interface **joyful and engaging** through **client-side scripting** and animation. We added delightful interactions to key elements:

- Animated menu open/close and icon toggle  
- Carousel pagination animation  
- “Like” interaction with animated feedback  
- CSS hover effects

These small touches turn basic interactions into pleasurable moments, creating an experience that feels alive.

## My contribution

My personal contributions included:

- Developing an **animated pagination system** for the storybook carousel
- Creating a **"like" animation** for playlists, including a floating heart and a shortcut icon in the menu  
- Ensuring all interactions give clear, immediate feedback to the user
- Applying **progressive enhancement** in four layers:
  1. **Functional:** semantic HTML and structured content  
  2. **Reliable:** basic CSS styling for usability  
  3. **Usable:** interactivity through JavaScript  
  4. **Pleasurable:** animations and micro-interactions using JS and CSS  

Importantly, I made sure the **carousel works without JavaScript** using `overflow-x: scroll` and `scroll-snap`. This way, the experience stays functional for all users, even if JS is disabled or unavailable.

## Demo

<img src="/assets/demos/tumi-mundo-demo.gif" alt="Tumi Mundo Website Demo" loading="lazy"/>

## Technical details

This was a team project, built using:

- **Node.js** and **Express**
- **Vanilla JavaScript** and **CSS** for animation
- **Progressive Enhancement** to layer features gradually
- ```CSS scroll-snap``` and `overflow-x: scroll` for accessible, JS-free carousel functionality
- **Keyframe animations** and hovers for UI polish
