# How to do it in the PromptVu app

Only this part says which screen and which button. The skills and rules say what to do. When a skill names an action in **bold**, find that action here.

You work in PromptVu by controlling the PromptVu desktop app on the rep's computer, with the app open and the rep signed in. There is no other way in.

## Get into PromptVu

- PromptVu is a desktop app on the rep's computer, not a website. Don't look for it in a web browser.
- Request access to the PromptVu app using your computer control (computer use in Claude, Work mode in ChatGPT). Wait for the rep to approve.
- PromptVu needs full-screen control. If you're offered a choice, ask for full control, not background mode.
- The rep must already be signed in. Never ask for their password. If PromptVu is closed or signed out, stop and tell the rep.

## Words PromptVu uses

- **Prompt:** a short script attached to an exact spot on a web page. It tells the rep what to show and what to say at that moment. PromptVu remembers the page and the spot.
- **Prompt Sequence:** a whole demo. The prompts, in order, across every page the rep presents, starting from a Start URL.
- **Start URL:** the page a Prompt Sequence opens on when you press Play.
- **Owner:** the person who created a sequence. Only the owner can edit it. Anyone it's shared with can run it or duplicate it.
- **Projects, AI Prompt Agent and Outbound:** PromptVu's own built-in AI features, all in beta. Outbound holds the ICP Playbook, which is useful context about who the rep sells to.

## The screens

- **Dashboard:** promptvu://promptvu-dashboard, inside the app. The left menu has Prompt Sequences, Projects, AI Prompt Agent, Outbound, Admin Settings and Settings.
- **Prompt Sequences:** every sequence the rep owns or that was shared with them. Each row has Play, Duplicate, Settings, Share and Delete.
- **List of all prompts:** opens when you click a sequence name. Each prompt has a pencil to edit it.
- **LIVE CONTROL window:** where the sequence plays, with a banner that says not to share it.
- **PromptVu Manager:** the panel on the right while a sequence plays. It lists every prompt in order.
- **Presenter Screen:** the clean copy the rep shares on a call. You never open or share it.

## Actions

### Find a sequence
Click Prompt Sequences in the left menu. Look for the sequence by name. Use this to check whether a sequence already exists before you create one.

### Read all prompts
Click the sequence name. "List of all prompts" shows each prompt's number, text and page.

### Duplicate a sequence
On the sequence's row, click Duplicate. PromptVu makes the copy right away without asking for a name. The copy shows up in Prompt Sequences as "[original name]_duplicate". Rename it right away (see **Rename a sequence**) so it's never confused with the original. Make all changes in the copy.

### Rename a sequence
On the sequence's row, click Settings, change the Sequence name and save. Use the name you were given, for example "Platform demo - Acme CFO".

### Create a sequence
Click "+ New Prompt Sequence". Enter a Sequence name and the Start URL. Leave "Autogenerate prompts with AI" unchecked. Click Save.

### Play a sequence
On the sequence's row, click Play. PromptVu opens the Start URL in the LIVE CONTROL window with the PromptVu Manager on the right.

### Move between pages
Click links and buttons in the page, the way the rep would on a call. Never type URLs. PromptVu follows the page you're on and shows that page's prompts.

### Jump to a prompt
While playing, click the prompt in the PromptVu Manager. PromptVu goes to its page and highlights its spot.

### Edit a prompt's text
Fastest, especially for many prompts: open the sequence's "List of all prompts", click the pencil next to the prompt, change the Prompt Text and click Save Changes. Or, while playing, click the prompt in the PromptVu Manager, click Edit, change the text and click Save. Either way, the prompt stays on its page and spot.

### Add a prompt on the page
While playing, go to the page, right-click the exact spot the rep will point at and choose Insert presenter note. Write the text.

### Add a prompt from the PromptVu Manager
While playing, go to the page. Click the plus button in the PromptVu Manager, write the text and click Save Note. The new prompt appears in the upper right corner of the page. Drag it to its spot. Use this for text boxes and other input fields, where right-click doesn't work yet.

### Reorder prompts
In the sequence's list of prompts, drag and drop a prompt to its new place. This is the order the prompts play in.

### Move a prompt on the same page
Drag it to the new spot. PromptVu saves the spot when you let go. A short delay is normal.

### Move a prompt to another page
Edit the prompt and change its URL to the new page, then save. Jump to the prompt and drag it into place.

### Reset a missing prompt
If a prompt doesn't show on its page, click its reset button in the PromptVu Manager. It moves to the upper right corner. Drag it back into place.

### Check placement
Play the sequence and jump to each prompt in order. Confirm it sits on the element it talks about. On screens that change without the URL changing (tabs, pop-ups, wizard steps), check it shows on the right screen.

### Read the ICP Playbook
Click Outbound in the left menu and open the ICP Playbook.

## Known issues today

- Right-click doesn't add a prompt on text boxes and other input fields. Use **Add a prompt from the PromptVu Manager**.
- Two prompts with identical text on the same page can merge into one when saved. Give every prompt its own wording.
- On screens that change without the URL changing, a prompt can show on the wrong screen or not at all. Report these to the rep instead of working around them.
- Never resize, maximize or minimize the LIVE CONTROL window or the Presenter Screen. Their sizes are locked on purpose.
