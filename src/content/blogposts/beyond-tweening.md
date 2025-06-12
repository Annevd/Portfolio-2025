---
title: Beyond Tweening
date: 2025-03-07
description: Een we-love-web van Cassie Evans, Creative developer bij GSAP
image:
    url: /assets/images/gsap-cover.jpg
tags:
    - Creative
    - GSAP
---

## About Cassie Evans

- Creative developer at GSAP
- [Website](https://www.cassie.codes/)

## What is GSAP?

GSAP (GreenSock Animation Platform) is a **framework-agnostic** JavaScript library for high-performance animations. It works across all modern browsers and is optimized for smooth, efficient motion.

> GSAP is like an animation toolbox full of everything you need to create **responsive, cross-browser-friendly** animations on the web.

## **Core GSAP Features**

### **Tweens** (Single Animations)

Tweens are the basic building blocks of GSAP. They animate a single property over time.

#### Example: Move an element 200px to the right

```JS
gsap.to(".box", { x: 200 });
```

- `.to()` → Animates properties **from current state** to target values
- `.from()` → Animates properties **from** a specified value
- `.fromTo()` → Explicitly defines **start and end values**

## **Timelines (Sequencing Animations)**

Timelines make it easy to **chain and coordinate** multiple animations. This is hard to achieve with pure CSS.

### **Example: Animating in sequence**

```JS
let tl = gsap.timeline();

tl.to(".box", { x: 200, duration: 1 })
  .to(".box", { rotation: 180, duration: 1 })
  .to(".box", { scale: 1.5, duration: 1 });
```

## ScrollTrigger: The Most Popular GSAP Plugin

ScrollTrigger allows animations to **respond to scroll position**.

### **Example: Animate when an element enters the viewport**

```JS
gsap.to(".box", {
  scrollTrigger: {
    trigger: ".box",
    start: "top 80%",
    end: "top 20%",
    scrub: true
  },
  x: 300
});
```

- `start: "top 80%"` → Animation starts when the .box enters at 80% viewport
- `end: "top 20%"` → Animation ends at 20% viewport
- `scrub: true` → Links animation progress to scroll progress

### Container Animations

- ScrollTrigger **inside another ScrollTrigger**
- Useful for **nested scrolling interactions**

> If all you have is a hammer, everything looks like a nail.

## GSAP Utilities

GSAP provides helper utilities for randomness, mapping, and more.

### `utils.random()`

Generates random numbers or values from an array.

```JS
// Random number between -100 and 100
gsap.utils.random(-100, 100);

// Random number between 0 and 500, in steps of 5
gsap.utils.random(0, 500, 5);

// Random color from an array
gsap.utils.random(["red", "blue", "green"]);
```

### `utils.mapRange()`

Maps one range of values to another. Useful for responsive animations. Handy when you want to animate based on screenwidths.

```JS
let scaledValue = gsap.utils.mapRange(0, 100, 0, 1, 50);
console.log(scaledValue); // 0.5
```

### `utils.wrap()`

Loops through values in an array, useful for modifiers.

```JS
let wrap = gsap.utils.wrap([0, 100, 200]);
console.log(wrap(1)); // 100
```

### `utils.pipe()`

Combines multiple utility functions into a pipeline.

```JS
let pipeline = gsap.utils.pipe(
  gsap.utils.random(0, 100),
  Math.floor
);
console.log(pipeline()); // Random whole number
```

## Let the ease do the work

- GSAP provides advanced easing functions beyond CSS defaults.
- Use easing to create natural, organic motion.
- RoughEase is great for glitch effects.

## Other useful stuff

### `matchMedia()`

GSAP’s matchMedia() makes it easy to create media query-based animations. You can check for screen sizes, reduced motion, etc.

#### Example: Different animations for mobile & desktop

```JS
gsap.matchMedia().add("(max-width: 600px)", () => {
  gsap.to(".box", { x: 100 });
});
```

> Reduced motion is really important, AND really easy to implement!

### Controlling animations

GSAP gives full control over the animation’s playhead.

#### Example: control methods

```JS
let tween = gsap.to(".box", { x: 200, duration: 2 });

tween.pause();      // Pauses animation
tween.resume();     // Resumes animation
tween.reverse();    // Plays animation in reverse
tween.restart();    // Restarts animation
tween.timeScale(2); // Doubles animation speed
```

Great for interactive animations (e.g., buttons, sliders)

### Helper Functions

GSAP provides many additional utilities that simplify animation workflows.

#### Key Functions

- `splitText()` – Splits text into characters, words, or lines
- `morphSVG()` – Morph one SVG shape into another
- `flip()` – Smoothly transitions between different states

## Key Takeaways

- Use Tweens for simple animations
- Use Timelines for sequencing multiple animations
- Use ScrollTrigger for scroll-based animations
- Use GSAP Utils for randomness, mapping, and wrapping values
- Use Easings to enhance motion quality
- Use matchMedia() for responsive animations
- Control animations with pause, reverse, restart, etc.
