---
name: promptvu-big-demo
description: Build PromptVu demos for a large deal with several stakeholders. Creates one tailored Prompt Sequence per stakeholder (for example CFO, VP Sales, IT) plus a run-of-show for the main group demo. Use when a rep says "big demo for [company]", "multi-stakeholder demo", "exec demo next week", "build demos for the buying committee" or "we're presenting to five people at [company]".
---

# Build a big, multi-stakeholder demo

Big deals have a buying committee. Each person cares about something different. This skill gives the rep the right words for each of them, and one plan for the room.

Before you start, read `references/working-in-promptvu.md` and `references/writing-prompts.md`.

## Step 1: Map the buying committee

Pull from the CRM and calls if connected (see `promptvu-build-from-calls`). Otherwise ask the rep. For each person:

| Person | Role | What they own | What they care about | Their likely objection | Signs off? |
|---|---|---|---|---|---|

Confirm the table with the rep before building anything.

## Step 2: Plan the main demo

Write a run-of-show for the group session:

1. **Open:** the business problem everyone agrees on, in one sentence
2. **Order of pages:** which page, for whom, and the outcome it proves
3. **Hand-offs:** where the rep turns to a specific person ("Sarah, this is the part your team lives in")
4. **Time check:** a rough time per section so the rep doesn't run out
5. **Close:** the next step to ask for, and who needs to agree

## Step 3: Build the sequences

1. Follow "How to get in" in `references/working-in-promptvu.md`.
2. Check Prompt Sequences first.
3. Duplicate the rep's base demo for the group session. Name it "[SEQUENCE NAME] - [COMPANY] group". Write prompts that speak to the room, with a hand-off line where a specific stakeholder's priority comes up.
4. For each stakeholder who will get their own follow-up session, duplicate again: "[SEQUENCE NAME] - [COMPANY] [ROLE]". Rewrite every prompt for that one person.
5. Give every prompt on a page its own wording.
6. Play each sequence once and check placement.

## Step 4: Report

Give the rep:

1. The buying committee table
2. The run-of-show
3. Each sequence name and what's different about it
4. Top three risks in the room and the prompt that handles each
5. Facts to confirm before the meeting
