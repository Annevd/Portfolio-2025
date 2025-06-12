---
title: We ❤️ Web met Niels Leenheer
date: 2025-04-25
description: Een we-love-web over Browsers en HTML
image:
  url: /assets/images/niels.jpg
tags:
  - Browsers
  - HTML
---
## Over Niels

- Altijd bezig met webstanddaarden
- Werkt bij Salonhub 
- Web Developer
- [Website](https://nielsleenheer.com/)

## HTML

In tegenstelling tot Javascript, als je een fout maakt in HTML gebeurt er eigenlijk niks: Resilience.

> WWW parsers should ignore tags which they do not understand, and ignore attributes which they do not understand of tags which they do understand.

### `<noscript>`

Als je browser geen scripting ondersteund, ondersteund het ook geen noscript.
De enige functie van de noscript tag is niks laten zien: alles wat in de tag staat negeren.

**Voorbeeld use case:**
```HTML
<noscript>
    Wat is dit... 1995?
    Zet je javascript aan!
</noscript>
```

### Polyfills voor onbekende tags maken

Bijvoorbeeld de `<blink>` tag. Deze ondersteund de browser niet meer.

Let's bring it back.

```HTML
<blink>
    mijn ogen! Stop aub!
</blink>
```

Door deze tag gewoon een styling te geven in CSS kun je hem alsnog laten knipperen.

`<marquee>`: Deze wordt nog steeds ondersteund. Dit is een van de weinige tags uit 1990 die nog steeds ondersteund worden. (gebruikt deze niet tho.)

## Wat maakt HTML zo resilient?

Gebeurd tussen de HTML element en het document object model (DOM). Wanneer de browser jou HTML parsed gebruikt het een tokenizer en een tree builder. Deze zorgen ervoor dat je HTML de eigenschappen heeft om jouw HTML te parsen.

De tree builder maakt de dom vanuit jouw HTML document, de browser rendert de dom en niet het HTML document.

### Tokenizer

Teken voor teken door het HTML bestand gaan en alle informatie eruit halen die er is.
Als je een stukje HTML hebt, start het in een initial (data)state, dan naar de tag open state, dan de tag name state, dan before attribute name state, enzovoort.

Je wilt dat een token naar de tree builder gaat. Er zijn 68 verschillende states waar het rekening mee houdt.

Wanneer je parse errors tegen komt, stopt het niet met het analyseren. Het gaan dan gewoon verder.

Dit mag:

```HTML
<a<a<a<a>
    dit is een tag!
</a<a<a<a>
```

Als het eerste teken maar een ASCII letter is. Het is misschien geen HTML tag, maar wel een tag.

> Je kan niks doen in je HTML waardoor het niet meer zou werken

### Tree builder

Krijgt tokens van de tokenizer en bouwt daarmee de DOM tree.





