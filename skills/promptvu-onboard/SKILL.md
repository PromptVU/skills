---
name: promptvu-onboard
description: Set up PromptVu for a rep the first time. Looks at their account, asks five questions, learns the rep's voice, builds and saves a knowledge base about what they sell and the ROI it delivers, tours the product, plans a 30 to 45 minute demo with them and builds a Master sequence if they don't have one. Use when a rep says "set me up with PromptVu", "learn my product", "onboard me", "build my knowledge base" or starts using PromptVu with their AI for the first time.
---

# Onboard a rep to PromptVu

You're setting up a rep so every demo you tailor in PromptVu later sounds like them and shows real ROI. Do this once per product, not once per meeting.

Read first: `references/rules.md` and `references/writing-prompts.md`.

Steps in the PromptVu app are written as **bold actions**. How to do each one is in `references/promptvu-app.md`.

## What to do

Setup only needs the product. Don't ask about specific buyers, deals or calls here. That comes later, one meeting at a time, and only what the rep chooses to share.

### 1. Get into PromptVu
**Get into PromptVu.** If it's closed or the rep is signed out, stop and tell them.

### 2. Look before you ask
**Find a sequence**: open Prompt Sequences and look before you ask anything. Note whether the account is empty, which sequences exist and who owns them.

### 3. Ask five things, all at once
Ask as one short list. Skip anything the rep already told you.

- What product are you demoing, and what is its website?
- What page does your demo start on, and are you signed in to it inside PromptVu?
- Do you have a recording or transcript of yourself walking through the demo? It's optional. A solo walkthrough works best because it has no customer data in it.
- Who is your typical buyer? A role, industry and company size is enough.
- What numbers and customer names can you use, and what should you never say?

### 4. Find the Master
If the rep already has sequences, ask which one is their best current demo before you touch anything. That's their Master. If they have no sequence for this product, you'll build one in step 7.

### 5. Learn their voice
1. Start with the demo recording or transcript. It shows how they talk, what they emphasize and the order they show their screens.
2. If they have a Master, **Read all prompts** in it.
3. Use anything else they choose to give you, like a talk track or a slide deck.
4. Write down how they sound in three to five bullets: sentence length, formality, phrases they use, how they handle numbers.
5. If there's no recording and you still can't tell, ask for two or three examples of how they'd open a demo.

### 6. Build the knowledge base
Use everything available, read only:

- The product website: home, product and feature pages, pricing, case studies, docs and help articles.
- **Read the ICP Playbook** in PromptVu.
- The demo recording or transcript: the claims the rep makes and how they explain value.
- The product's own videos: demos, webinars, customer stories. Read transcripts if you can. If you can't, ask the rep to paste them.

Ask the rep for what you can't find: top use cases, the ROI it delivers, main competitors and the objections they hear most.

### 7. Tour the product and plan the demo
This is the most important step. Use the `promptvu-map-demo` skill if you have it. If not, follow its steps:

1. If the rep has no sequence for this product, **Create a sequence** named "[PRODUCT] demo - Master" with the page their demo starts on as the Start URL.
2. **Play a sequence** (the Master). If the product asks for a sign-in, ask the rep to sign in themselves inside PromptVu and wait.
3. Tour the product: **Move between pages** through every area in its main menu, and one level down. List each area, what it does and the buyer outcome it proves.
4. Map the rep's demo page by page, in the order the recording shows. If there's no recording, ask the rep to click through the demo once and tell you the screens.
5. Compare the two: what's worth adding, what's worth cutting and what could trip up a live demo.
6. Draft a demo plan that fits the rep's demo length (30 to 45 minutes if they don't say): open and agenda, three or four main sections that each prove one buyer outcome, and a wrap with the next step. Mark every screen must show, show if relevant or skip.
7. Get the rep's approval on the plan before you build any prompts.

### 8. Write it up and check it
Write the knowledge base as a short document:

1. **Who it's for:** roles, industries, company size, what makes them buy
2. **Problems it solves:** in the buyer's words where possible
3. **ROI by buyer type:** time saved, revenue gained, costs cut or risk reduced, with the numbers the rep is allowed to use
4. **Proof points:** customers, results, quotes the rep can use
5. **Objections and answers**
6. **Competitors:** where we win, where we don't
7. **Never say:** banned claims, pricing rules
8. **The rep's voice:** the bullets from step 5
9. **Product tour:** every area, what it does and the buyer outcome it proves
10. **Demo map:** the rep's demo, page by page
11. **Demo plan:** the approved plan from step 7

Show it to the rep. Fix anything they correct.

### 9. Save it
Save it in this AI as a file or project named "[PRODUCT] knowledge base". It lives in your AI, not in PromptVu. Tell the rep where it is. Every other PromptVu skill starts from it. Update it whenever the rep corrects you or the product changes.

### 10. Draft the Master's prompts
Only if you created the Master in step 7. Follow `references/writing-prompts.md`.

1. **Play a sequence** (the Master) and **Move between pages** in the order of the demo plan.
2. Write a first draft of a prompt for every point to make on every must-show screen. Add "show if relevant" screens only if the rep wants them in the Master. Use **Add a prompt on the page**, or **Add a prompt from the PromptVu Manager** for text boxes.
3. Ask the rep to press Play and click through it with you once. Fix what they correct with **Edit a prompt's text**.
4. **Check placement** for every prompt.

### 11. Wrap up
Tell the rep in four lines: what you saved and where, the name of their Master, the one thing you'd still like from them to make it better, and what to tell you before a meeting: the buyer's role, company and what they care about. For a single meeting you'll always duplicate the Master and edit the copy, never the Master itself.

## Actions used in the app

Get into PromptVu · Find a sequence · Read all prompts · Read the ICP Playbook · Create a sequence · Play a sequence · Move between pages · Add a prompt on the page · Add a prompt from the PromptVu Manager · Edit a prompt's text · Check placement. Plus the actions in `promptvu-map-demo`.
