---
name: promptvu-map-demo
description: Map a rep's demo page by page before writing PromptVu prompts. Walks the product the rep demos inside PromptVu and records each page, the elements on it and the buyer outcome it proves. Use when a rep says "map my demo", "learn my product's screens", "walk my demo" or before building or rewriting a Prompt Sequence for a product you haven't mapped yet.
---

# Map the demo

Good prompts sit on the right element and tie it to a buyer outcome. You can't do that without knowing the product's screens. This skill builds that map once per product.

Read first: `references/rules.md`.

Steps in the PromptVu app are written as **bold actions**. How to do each one is in `references/promptvu-app.md`.

## What to do

### 1. Pick the demo
1. **Get into PromptVu.**
2. Ask the rep which sequence is their best current demo (their Master), unless the knowledge base already says. If they have a recording or transcript of a real demo, use it to learn the order they click through and what they say on each screen.
3. **Find a sequence.** If they have no sequence for this product yet, **Create a sequence** named "[PRODUCT] demo - Master" with the page their demo starts on as the Start URL. Use the recording for the screen order. If there's no recording, ask the rep to click through the demo once and tell you the screens.

### 2. Walk it
**Play a sequence**, then **Move between pages** the way the rep demos it.

Only click to move around. Never submit forms, save settings, or create or delete anything in the product. If a step needs data entry to continue, stop and ask the rep how they handle it on a live call.

### 3. Record each page
For each page or screen, record:

| Field | What to write |
|---|---|
| # | Order in the demo |
| Page | A plain name, like "Pricing" or "Pipeline dashboard" |
| URL | As shown, for reference only |
| What it shows | One line |
| Key elements | The buttons, charts, prices, tables or headings the rep would point at |
| Buyer outcome | Which result this page proves: time saved, revenue gained, costs cut or risk reduced |
| Existing prompts | How many prompts already show on it |
| Same-URL screens | Any tab, pop-up or wizard step that changes the screen without changing the URL |
| Notes | Login walls, slow loads, empty states, anything that could trip up a live demo |

### 4. Flag what matters
After the table, list:

- Screens that change without the URL changing.
- Pages with no clear buyer outcome, and whether you'd keep or skip them.
- Text boxes the rep points at.
- Anything that looked broken or empty.

### 5. Save it
Add the map to the rep's "[PRODUCT] knowledge base" under "Demo map". Show the rep the table and fix anything they correct.

### 6. Wrap up
Tell the rep how many pages you mapped, which ones carry the most ROI and anything you flagged.

## Actions used in the app

Get into PromptVu · Find a sequence · Create a sequence · Play a sequence · Move between pages
