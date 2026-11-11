---
name: promptvu-tailor-meeting
description: Tailor a PromptVu demo for a specific buyer meeting. Researches the buyer, duplicates the rep's Prompt Sequence and rewrites every prompt in the rep's voice around the ROI this buyer cares about. Use when a rep says "prep my demo for [company]", "tailor my sequence for [buyer]", "I'm meeting [name] tomorrow", or pastes the PromptVu meeting prompt.
---

# Tailor a demo for a meeting

Before you start, read `references/working-in-promptvu.md` and `references/writing-prompts.md`.

## Step 1: Get what you need

You need these. Ask once, as a short list, for anything missing:

- The sequence to start from
- Who they're meeting: name, role, company
- What the buyer cares about: top two or three priorities
- Objections they expect
- What they want out of the call: the next step
- The buyer's website

Start from the rep's saved "[PRODUCT] knowledge base". If there isn't one, tell the rep and offer to run `promptvu-onboard` first. You can still continue with what they give you, but say the prompts will be weaker.

## Step 2: Research the buyer

Read only. Look at the buyer's website, recent news and the person's role. If the rep has a CRM or call recordings connected to you, pull the account and any past calls with this buyer, and use `promptvu-build-from-calls` for that part.

Write a short buyer brief for yourself:

- What the company does, size, industry
- What this person owns and is measured on
- The two or three pains this demo should hit, in the buyer's words where you have them
- The ROI angle that matters most to them

## Step 3: Duplicate

1. Follow "How to get in" in `references/working-in-promptvu.md`.
2. Open Prompt Sequences and find the sequence. Click Duplicate.
3. Rename the copy "[SEQUENCE NAME] - [BUYER]". Change only the copy.

## Step 4: Rewrite

Go prompt by prompt, in order. For each one:

1. Keep it on the same page and spot.
2. Rewrite the text for this buyer: their problem, what this screen does about it, the result. One or two sentences, in the rep's voice, with one specific.
3. Give every prompt on a page its own wording, so no two prompts merge on save.

If a page needs a new prompt, add it on the exact spot (right-click, then Insert presenter note), or from the PromptVu Manager for text boxes. If a page doesn't help this buyer, don't delete it. Note it in your report and suggest skipping it on the call.

## Step 5: Check

Press Play and click through once. Confirm every prompt shows on the right element, including screens that change without the URL changing. Fix or reset anything that's off.

## Step 6: Report

Give the rep:

1. The name of the new sequence
2. A three-line buyer brief
3. Every change, by prompt number and page, with old and new text
4. Pages you'd skip or move, and why
5. Facts you need confirmed before the call
