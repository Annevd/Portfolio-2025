---
url: https://annevd.github.io/Q42-responsive-interactieve-website/the-sprint-main/public/
title: Q42 Responsive Interactive Website
date: 2024-01-24
description: For this assignment I had to build a page for the Q42 website. On
  this website Q42 wanted to proudly show all their colleagues to the outside
  world.
githubUrl: https://github.com/Annevd/Q42-responsive-interactieve-website
image:
  url: /assets/images/q42.png
tags:
  - "2024"
  - Interactive
  - Static
---

## The assignment

This assignment focused on creating a **responsive, interactive team page** for [Q42](https://q42.nl), a creative tech company.

Q42 wanted to showcase all their colleagues in a fun and professional way, using a photo grid that lets visitors view each Q'er from two sides:

- A **serious side** (portrait, name, and email)
- A **playful side** (custom Disney-style photo and fun tags)

The goal was to make the page interactive, user-friendly, responsive, and engaging.


## What I did

I kept the **Q42 visual identity** intact by reusing their layout and navigation styles.

Key additions and enhancements I implemented:

- A **"Skip to Content"** button for accessibility  
- A **responsive filter system**:
  - On large screens: filters appear above the photo grid
  - On small screens: filters are **collapsible** for a cleaner UI
- Dual photo modes:
  - One professional image per Q’er
  - One fun Disney-style photo, revealed by flipping the card
- UI styling:
  - Rounded corners (`border-radius`) on photos for a friendly tone
  - Added whitespace to give breathing room between cards
- **Dark Mode** that responds to the user's system preferences using:
  ```@media (prefers-color-scheme: dark) {}```

## Demo

<img src="/assets/demos/q42-demo.gif" alt="Q42 Website Demo"/>

## Technical details

Technologies and techniques used:

- **CSS Grid** with `auto-fill` for a responsive layout
- **Custom filter system** using:
  - `document.querySelectorAll`
  - `addEventListener()`
  - `classList.toggle()` and `classList.add/remove()`
- **JavaScript card flip** effect for switching between serious/playful photos
- **Responsive design**  using media queries
- **System-based dark mode** using `prefers-color-scheme`

Everything was built as a **static site** using only HTML, CSS, and vanilla JavaScript, without external frameworks.