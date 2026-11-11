---
name: promptvu-build-from-calls
description: Build a PromptVu demo from what the buyer actually said. Reads call recordings and CRM data the rep has connected to their AI (for example Gong, Zoom, Fathom, Salesforce or HubSpot), finds the buyer's pains, numbers and objections, and turns them into a tailored Prompt Sequence in the PromptVu app. Use when a rep says "use my last call with [company]", "build the demo from the discovery call", "pull the CRM and prep my demo" or "make a sequence from this transcript".
---

# Build a demo from calls and CRM data

The best demo uses the buyer's own words. This skill finds them in the rep's calls and CRM, then puts them in front of the rep at the right moment.

Read first: `references/rules.md` and `references/writing-prompts.md`.

Steps in the PromptVu app are written as **bold actions**. How to do each one is in `references/promptvu-app.md`.

## What to do

### 1. Find the sources
Check what the rep has connected to you (their AI), not to PromptVu:

- **Call recordings:** Gong, Chorus, Zoom, Fathom, Fireflies, Otter or similar
- **CRM:** Salesforce, HubSpot or similar
- **Email and notes:** Gmail, Outlook, Google Drive, Notion

Use what's connected. If nothing is, ask the rep to paste the transcript or notes. Don't guess what was said on a call. Read only.

### 2. Pull the account
For the buyer's company, get:

- The open opportunity: stage, amount, close date, next step
- Contacts and roles, and who has been on calls
- The last two to five calls, newest first
- Recent email threads, if connected

### 3. Build the call brief
Quote the buyer wherever you can, with the call date.

| Section | What to capture |
|---|---|
| Pains | What's broken, in their words |
| Numbers | Any metric they mentioned: hours, headcount, cost, revenue, deadlines |
| Priorities | What they said matters most, and to whom |
| Stakeholders | Who's involved, what each cares about, who signs |
| Objections | Concerns raised and how they were answered |
| Competitors | Who else they're looking at |
| Promises | Anything the rep committed to show or answer |

Mark anything you inferred rather than heard as "inferred".

### 4. Match it to the demo
Using the demo map in the rep's knowledge base (or run `promptvu-map-demo` first):

1. For each pain or priority, pick the page and element that answers it.
2. Suggest the order of pages that tells the strongest story for this buyer. The rep follows that order on the call.
3. Make sure every promise from the call brief has a moment in the demo.

### 5. Build the sequence
1. **Get into PromptVu**, **Find a sequence** (the rep's base demo) and **Duplicate a sequence**. Work only in the copy.
2. For each prompt in the copy, **Edit a prompt's text** around the call brief. Use the buyer's own words and numbers: "You said month-end close takes nine days. This is where that drops to two."
3. Where a promise or pain has no moment yet, **Play a sequence** (the copy), **Move between pages** to the right page and **Add a prompt on the page** (or **Add a prompt from the PromptVu Manager** for text boxes).
4. Give every prompt on a page its own wording.
5. **Check placement.**

### 6. Keep it private
Prompts can be shared with teammates. Don't put personal details, compensation, health or anything said off the record into a prompt.

### 7. Report
Give the rep:

1. The copy's name, exactly as it shows in Prompt Sequences
2. The call brief, with quotes and dates
3. Every change by prompt number and page
4. The suggested page order for the call
5. Promises from past calls and where each is covered
6. Gaps: things the buyer asked about that the demo can't show yet

## Actions used in the app

Get into PromptVu · Find a sequence · Duplicate a sequence · Edit a prompt's text · Play a sequence · Move between pages · Add a prompt on the page · Add a prompt from the PromptVu Manager · Check placement
