# PromptVu skills

Skills that teach your AI (Claude, ChatGPT and others) to run PromptVu for you. Your prompts stay private while you share your screen. Your AI does the prep.

| Skill | What it does | Say something like |
|---|---|---|
| `promptvu-onboard` | Learns your voice, builds and saves a knowledge base about what you sell, maps your demo | "Set me up with PromptVu" |
| `promptvu-map-demo` | Walks your product page by page and records what each page proves | "Map my demo" |
| `promptvu-tailor-meeting` | Researches the buyer, duplicates your sequence and rewrites every prompt for them | "Prep my demo for Acme tomorrow" |
| `promptvu-build-from-calls` | Pulls your call recordings and CRM, then builds the demo around what the buyer said | "Use my last two calls with Acme and build the demo" |
| `promptvu-big-demo` | One sequence per stakeholder plus a run-of-show for the group demo | "Build the demo for Acme's buying committee" |
| `promptvu-sequence-qa` | Checks every prompt and its placement, and tells you what to fix | "Is my Acme demo ready?" |

Each skill includes two reference files: `working-in-promptvu.md` (how to get into PromptVu, where things are, the rules) and `writing-prompts.md` (how a good prompt reads).

## What you need

- PromptVu installed on your computer and signed in.
- An AI that can use apps on your computer, with full-screen control:
  - **Claude:** desktop app on a Pro or Max plan. Settings, then General: turn on "Enable computer use" and set "When Claude requests access to an app" to "Full control."
  - **ChatGPT:** desktop app in Work mode. Allow screen recording and "Always allow" for PromptVu.
- Optional: your call recorder (Gong, Zoom, Fathom and others) and CRM (Salesforce, HubSpot) connected to your AI, for `promptvu-build-from-calls` and `promptvu-big-demo`.

When the PromptVu connector launches, these skills use it automatically and won't need control of your screen.

## Install

### Claude app

1. Download the skill zips from the [`dist`](dist) folder (one per skill), or [all six at once](https://github.com/PromptVU/skills/raw/main/dist/promptvu-skills.zip).
2. In the Claude desktop app, open Settings and find Skills.
3. Upload each zip and turn it on.

Menu names change. If Skills isn't where we describe, search Claude's help for "skills."

### Claude Code

```
/plugin marketplace add PromptVU/skills
/plugin install promptvu@promptvu
```

### ChatGPT

1. Create a Project named "PromptVu".
2. Add each skill's `SKILL.md` and its two reference files to the Project's files.
3. In the Project instructions, paste: "Use the PromptVu skill files in this project whenever I ask you to work on my PromptVu demos."

## Rules every skill follows

- Request access to PromptVu first. Never ask for your password.
- Duplicate before changing anything. Never delete unless you ask.
- Only read outside PromptVu. Never change your CRM, send email or submit anything in the product you demo.
- Never start a screen share.
- List every change when done.

Full guide for AI assistants: https://promptvu.com/ai-guide.html
