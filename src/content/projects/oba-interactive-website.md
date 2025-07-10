---
url: https://annevd.github.io/fix-the-flow-interactive-website/
title: OBA Interactive Website
date: 2023-12-21
description: For this assignment I had to design and create an interactive
  website for a client.
githubUrl: https://github.com/Annevd/fix-the-flow-interactive-website
image:
  url: /src/assets/images/oba.png
tags:
  - "2023"
  - Static
---

## The assignment

Design and build an interactive website for a real-world client, in this case, **[OBA (Openbare Bibliotheek Amsterdam)](https://oba.nl/nl)**.

The assignment focused on creating an **interactive user flow** based on a **user story**, where the user has to complete an action such as:

- Clicking through a step-by-step form or questionnaire  
- Filtering content  
- Or, in my case: **removing a book from their reading list**

To complete this, I had to **design effective feedback and feedforward** mechanisms, making it clear what the user is doing, what will happen next, and confirming whether their action was successful.

## What I did

I created a user flow in which a user removes a book from their reading list.

Here’s how the interaction works:

- The user clicks the red **trash can** icon next to a book
- A **confirmation dialog** appears with two options:
  - _“Yes, delete”:_ Confirms the removal  
  - _“No, cancel”:_ Cancels the action
- If confirmed:
  - A second **success message** appears letting the user know the book was removed
  - The user can exit this by clicking the **close** icon
- If canceled:
  - The user is redirected back to the homepage

This structure helps avoid accidental deletions and gives the user control over their actions with clear visual feedback and feedforward.

## Demo

<img src="/assets/demos/oba-demo.gif" alt="OBA Website Demo" loading="lazy"/>

## Technical details

I built the project using **vanilla HTML, CSS, and JavaScript**.

Key technical features:

- **Three-step JavaScript interaction** pattern:
  1. `querySelector()`: selects the trash can icons  
  2. `addEventListener()`: listens for clicks  
  3. `classList.add/remove/toggle()`: shows/hides modal windows
- Used `forEach()` to attach events to multiple trash can icons
- Clear separation of functionality for:
  - Confirmation modals
  - State transitions
  - Cancel/close behavior

This is a **static project** and focuses purely on client-side interaction.
