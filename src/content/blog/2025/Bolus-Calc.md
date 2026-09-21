---
layout: ../../../layouts/MarkdownLayout.astro
title: 'Why I retired the Bolus Calc app'
pubDate: 2026-09-21
slug: Bolus-Calc-Overview
image:
    url: '/images/blog/2025/bolus-calc/banner.png'
    alt: 'Bolus Calculator app screens'
tags: ["Personal"]
---

## Why I built it

<!-- Add bullet points about your experience managing type 1 diabetes, the problem you wanted to solve, and what the original version was like. -->

## What the app did

Bolus Calculator calculated meal doses and corrections for high blood sugar using a user's insulin ratios, correction factors, and glucose targets. A user could set different insulin-to-carbohydrate ratios for different times of day and add dose modifiers for activities or other circumstances. Modifiers could be scheduled by day and time. The app also had a sick day adjustment based on ketone levels and total daily insulin dose.

A diary recorded doses alongside carbohydrates, blood glucose, and any modifiers, and showed daily glucose averages. Hotshots made carbohydrate counting easier by letting a user save foods, search online nutritional data, scan barcodes, and optionally share food entries. The calculator checked unusually large carbohydrate entries and warned when a blood glucose reading was below the configured threshold.

Personal records stayed on the device. A user could export the raw data as JSON or create a PDF report with glucose charts and trends.

<div class="bolus-feature-gallery">
  <figure>
    <img src="/images/blog/2025/bolus-calc/dose-settings.gif" alt="Insulin dose settings, logbook, and scheduled insulin-to-carbohydrate ratios" width="554" height="1200" loading="lazy" />
    <figcaption>Dose calculations, insulin logbook, and configurable ratios</figcaption>
  </figure>
  <figure>
    <img src="/images/blog/2025/bolus-calc/hotshots.png" alt="Hotshots showing saved food and nutritional search results" width="468" height="1012" loading="lazy" />
    <figcaption>Hotshots and food search</figcaption>
  </figure>
  <figure>
    <img src="/images/blog/2025/bolus-calc/data-export.png" alt="My Data screen with PDF report and JSON export options" width="483" height="1046" loading="lazy" />
    <figcaption>PDF and JSON export</figcaption>
  </figure>
</div>

## Why I rewrote it three times

<!-- Add bullet points on how the project changed over time and what each rewrite was meant to solve. -->

### First rewrite

<!-- When did it happen? What was wrong with the original version? What changed? -->

### Second rewrite

<!-- Why was another rewrite needed? What did you improve? What remained difficult? -->

### Third rewrite

<!-- What did you hope to solve? What improved? What concerns remained? -->

## Why I retired it

<!-- Add bullet points about testing, medical safety, maintenance, and the decision to stop. -->

## What I learned

<!-- What did the project teach you about building software for health and about your own development process? -->

## Where it stands now

<!-- Is the code still available? Would you revisit the idea? What do you want readers to take away? -->
