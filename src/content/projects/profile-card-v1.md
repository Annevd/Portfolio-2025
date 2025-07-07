---
url: https://connect-your-tribe-profile-card-8nf5.onrender.com/
title: Profile Card V1
date: 2024-02-08
description: Project where I had to design and build a profile card. On
  hover/click a slideshow with my artworks appears.
githubUrl: https://github.com/Annevd/connect-your-tribe-profile-card
image:
  url: /assets/images/profile-card-1.png
tags:
  - "2024"
  - NodeJS
  - Keyframe animations
---


## Concept & Design

This profile card is a creative way to show **who I am**, what I enjoy, and how to connect with me.

The card includes:

- A short biography
- My location, email address, GitHub, and Codepen profiles
- A **hover- or click-triggered slideshow** of my personal drawings and paintings, allowing me to share my artistic side

The data is dynamically loaded using the [whois.fdnd.nl](https://whois.fdnd.nl) API.


## Features

- **Responsive Design**  
  On small screens, text says “Click me” instead of “Hover me,” making the interaction intuitive on all devices.

- **Keyframe Animations**  
  Hovering or clicking the profile image starts an **infinite slideshow** of my artwork using pure CSS animations.

- **Progressive Enhancement**  
  - Works without JavaScript: All content remains accessible, and the layout still functions.
  - JavaScript is used only for interaction enhancements (`mouseenter`, `click`, etc.).


## Demo

<img src="/assets/demos/profile-card-1-demo.gif" alt="Profile Card V1 Demo"/>

## Technical Details

- Built with **Node.js**, **Express**, and **EJS**
- Uses the [whois.fdnd.nl](https://whois.fdnd.nl) API to fetch all personal data dynamically
- CSS `@keyframes` creates the looping slideshow
- JavaScript is used conditionally to handle:
  - `mouseenter`/`mouseleave` on desktop
  - `click` events for mobile users

The slideshow images are **absolutely positioned** and animated in sequence. 