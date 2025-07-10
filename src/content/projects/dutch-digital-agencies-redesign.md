---
url: https://proof-of-concept-ezyj.onrender.com/
title: Dutch Digital Agencies Redesign
date: 2024-06-20
description: Project where I had to redesign and build the current website of the DDA.
githubUrl: https://github.com/Annevd/proof-of-concept
image:
  url: /src/assets/images/dda.png
tags:
  - "2024"
  - Redesign
  - NodeJS
  - Scroll Driven Animations
---

## The assignment

This assignment marked the final project of the second half of year 1 and challenged me to apply everything I had learned across six sprints. That included:

- API data fetching
- Node.js and Express
- EJS templating
- Server-side rendering
- Accessibility and performance

[De Voorhoede](https://www.voorhoede.nl/nl/) commissioned the project, tasking us with redesigning and rebuilding the homepage of **Dutch Digital Agencies (DDA)**. The homepage needed to feature:

- Upcoming events  
- Latest vacancies  
- Latest news  
- A call-to-action for agencies to become members  
- An agency overview  

## What I Did

This wasn’t just about building a homepage, it was about making strategic design and development choices. I was responsible for:

- Creating a modular EJS component structure using partials
- Fetching and rendering real data from APIs  
- Implementing **scroll-driven animations** to enhance storytelling  
- Applying **progressive enhancement** in four layers:
  1. **Functional:** semantic HTML and structured content  
  2. **Reliable:** base CSS for clean, usable design  
  3. **Usable:** client-side JS for interactivity  
  4. **Pleasurable:** subtle animation and scroll effects for polish  
- Designing **carousels and interactive sections** that work *entirely without JavaScript*, using **CSS-only solutions** like `overflow-x: scroll` and `scroll-snap`  
- Experimenting with new CSS techniques like `subgrid` and `scroll-timeline`  
- Optimizing for **performance and accessibility**

## Demo

<img src="/assets/demos/DDA-demo.gif" alt="DDA Website Demo" loading="lazy"/>

## What I Learned

This project taught me how to think more like a professional developer, not just coding, but making intentional decisions about **structure, accessibility, and performance**.

Some key takeaways:

- How to **structure EJS components/partials** in a scalable and maintainable way
- The value of **progressive enhancement:** building in layers to ensure the site works for everyone, regardless of device or browser
- Working with **real API data** and transforming it for display using server-side rendering
- How to use **scroll-driven animations** responsibly: making them subtle and enhancing UX, not overwhelming it
- Gained confidence using **new CSS features** like `subgrid` and `scroll-timeline`

Most of all, I learned how to balance creativity and usability. Making something visually engaging that still loads fast and works well for everyone.


## Technical details

- **Stack**: Node.js, Express, EJS, CSS  
- **Concept**: Progressive Enhancement  
- **Animations**: Scroll-driven animations and keyframe-based transitions  
- **Layout**: `subgrid`, responsive and fluid design principles  