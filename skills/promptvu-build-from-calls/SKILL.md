---
name: promptvu-build-from-calls
description: Build a PromptVu demo from what a buyer actually said, using a call transcript, summary or notes the rep chooses to share. Finds the buyer's pains, numbers and objections and turns them into a tailored Prompt Sequence in the PromptVu app. Use when a rep says "build the demo from this call", "use this transcript", "here are my discovery notes" or "make a sequence from this call summary".
---

# Build a demo from a call

The best demo uses the buyer's own words. This skill takes a call the rep chooses to share and puts the buyer's words in front of the rep at the right moment.

Read first: `references/rules.md` and `references/writing-prompts.md`.

Steps in the PromptVu app are written as **bold actions**. How to do each one is in `references/promptvu-app.md`.

## What to do

### 1. Get the call
Ask the rep to attach or paste the transcript, summary or notes they want you to use. Use only what they give you.

- Don't search their email, calendar, CRM or call recorder for more.
- If the rep asks you to pull one specific call from a tool they've connected, read only that call.
- If the rep isn't sure their company allows sharing call data with an AI, ask them to check first.
- Don't guess what was said on a call.

### 2. Build the call brief
Quote the buyer wherever you can. Refer to people by role, not name.

| Section | What to capture |
|---|---|
| Pains | What's broken, in their words |
| Numbers | Any metric they mentioned: hours, headcount, cost, revenue, deadlines |
| Priorities | What they said matters most, and to which role |
| Stakeholders | The roles involved, what each cares about and which one signs |
| Objections | Concerns raised and how they were answered |
| Competitors | Who else they're looking at |
| Promises | Anything the rep committed to show or answer |

Mark anything you inferred rather than heard as "inferred".

### 3. Match it to the demo
Using the demo map in the rep's knowledge base (or run `promptvu-map-demo` first):

1. For each pain or priority, pick the page and element that answers it.
2. Decide the order of pages that tells the strongest story for this buyer.
3. Make sure every promise from the call brief has a moment in the demo.

### 4. Build the sequence
1. **Get into PromptVu**, **Find a sequence** (the rep's Master) and **Duplicate a sequence**, then **Rename a sequence** to "[SEQUENCE NAME] - [BUYER]". Work only in the copy.
2. For each prompt in the copy, **Edit a prompt's text** around the call brief. Use the buyer's own words and numbers: "You said month-end close takes nine days. This is where that drops to two."
3. Where a promise or pain has no moment yet, **Play a sequence** (the copy), **Move between pages** to the right page and **Add a prompt on the page** (or **Add a prompt from the PromptVu Manager** for text boxes).
4. **Reorder prompts** to match the order you decided.
5. Give every prompt on a page its own wording.
6. **Check placement.**

### 5. Keep it private
Prompts can be shared with teammates. Refer to people by role, not name. Don't put names, email addresses, phone numbers, compensation, health or anything said off the record into a prompt or the knowledge base.

### 6. Report
Give the rep:

1. The name of the new sequence
2. The call brief, with quotes
3. Every change by prompt number and page
4. The new page order and why
5. Promises from past calls and where each is covered
6. Gaps: things the buyer asked about that the demo can't show yet

## Actions used in the app

Get into PromptVu · Find a sequence · Duplicate a sequence · Rename a sequence · Edit a prompt's text · Reorder prompts · Play a sequence · Move between pages · Add a prompt on the page · Add a prompt from the PromptVu Manager · Check placement
