---
url: https://biebinbloei.nl/
title: Bieb in Bloei
date: 2025-01-24
description: Enriched and improved the Bieb in Bloei website with mascot Harry,
  responsiveness and accessibility.
githubUrl: https://github.com/Annevd/buurtcampus-oost
image:
  url: /assets/images/bieb-in-bloei.png
tags:
  - "2025"
  - Responsive
  - Sveltekit
---

## About the Project

**Bieb in Bloei** is a digital platform that highlights sustainable community projects from **[Buurtcampus Oost](https://www.buurtcampus.amsterdam/oost)**, a welcoming and inclusive space for learning, collaboration, and green initiatives. Projects featured include:

- **De Stekjesbieb**  
- **De Zadenbieb**  
- **De Geveltuin**  
- ... and more to come!

The platform brings these community efforts to life online and is designed to inform and inspire local residents.

## Improving and enriching the Bieb in Bloei website

We were tasked with **improving and enriching the existing Bieb in Bloei website**.

A previous CMD minor group had already experimented with several fun ideas, including:
- Seasonal theming
- A playful mascot named **Harry**
- A weather-based dynamic interface

Our goal was to take these creative elements and **refine them into a responsive, accessible, and production-ready experience.**

## My contribution

I focused mainly on **responsiveness, usability, and accessibility** across the site.

Specific improvements I worked on:

- Fixed responsiveness issues and related layout bugs  
- Performed **contrast checks** and adjusted colors for better accessibility  
- Refactored and improved component-level UX for clarity and feedback  
- Enhanced the **contact form**, with special attention to:
  - Feedback messages and animations  
  - Retaining input with `localStorage` so users don’t lose their progress if they accidentally close the page or tab  

## Demo

<img src="/assets/demos/BIB-demo.gif" alt="Bieb in Bloei Website Demo"/>

## What I Learned

- How to **refactor and build on top of an existing codebase**
- Handling **form resilience** with `localStorage` for a better user experience
- Improved my skills with **SvelteKit** and headless CMS integration

## Technical details

- Built with **SvelteKit**
- Integrated with **Hygraph (headless CMS)**
- Used **Atomic Design structure** for reusable components
- Data stored and retrieved using **localStorage**
- Progressive enhancement principles applied to form and interaction behavior