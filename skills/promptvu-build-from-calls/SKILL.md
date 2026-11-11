---
name: promptvu-build-from-calls
description: Build or rewrite a PromptVu demo from what the buyer actually said. Pulls call recordings and CRM data through the rep's connected tools (Gong, Zoom, Fathom, Salesforce, HubSpot and others), finds the buyer's pains, numbers and objections, and turns them into a tailored Prompt Sequence. Use when a rep says "use my last call with [company]", "build the demo from the discovery call", "pull the CRM and prep my demo" or "make a sequence from this transcript".
---

# Build a demo from calls and CRM data

The best demo uses the buyer's own words. This skill pulls them from calls and the CRM, then puts them in front of the rep at the right moment.

Before you start, read `references/working-in-promptvu.md` and `references/writing-prompts.md`.

## Step 1: Find the sources

Check which of the rep's tools are connected to you:

- **Call recordings:** Gong, Chorus, Zoom, Fathom, Fireflies, Otter or similar
- **CRM:** Salesforce, HubSpot or similar
- **Email and notes:** Gmail, Outlook, Google Drive, Notion

Use what's connected. If nothing is, ask the rep to paste the transcript or notes. Don't guess what was said on a call.

Read only. Never update the CRM, send email or change anything in these tools.

## Step 2: Pull the account

For the buyer's company, get:

- The open opportunity: stage, amount, close date, next step
- Contacts and roles, and who has been on calls
- The last two to five calls, newest first
- Recent email threads, if connected

## Step 3: Extract what matters

Build a call brief. Quote the buyer wherever you can, with the call date.

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

## Step 4: Match it to the demo

Using the demo map in the rep's knowledge base (or run `promptvu-map-demo` first):

1. For each pain or priority, pick the page and element that answers it.
2. Put the pages in the order that tells the strongest story for this buyer.
3. Make sure every promise from Step 3 has a moment in the demo.

## Step 5: Build the sequence

1. Follow "How to get in" in `references/working-in-promptvu.md`.
2. Check Prompt Sequences first. Duplicate the rep's base demo and rename the copy "[SEQUENCE NAME] - [BUYER]".
3. Rewrite each prompt around the call brief. Use the buyer's own words and numbers: "You said month-end close takes nine days. This is where that drops to two."
4. Add prompts where a promise or pain has no moment yet.
5. Give every prompt on a page its own wording.
6. Play it once and check placement.

## Privacy

Prompts can be shared with teammates. Don't put personal details, compensation, health or anything the buyer said off the record into a prompt. Keep those in your report to the rep only, if at all.

## Report

Give the rep:

1. The new sequence name
2. The call brief, with quotes and dates
3. Every change by prompt number and page
4. Promises from past calls and where each is covered
5. Gaps: things the buyer asked about that the demo can't show yet
