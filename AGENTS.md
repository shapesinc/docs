# Documentation terminology

- The user-facing platform and product name is **shapes.inc**. Always use this exact lowercase spelling with the dot; never use a space or a comma.
- Never shorten the platform name to **Shapes** or **shapes**, including in headings, metadata, prompts, and compact UI copy. Always write **shapes.inc**.
- A **shape** is a group assistant that participates in a shared chat on shapes.inc. Use **shapes** only as the plural of those AI participants.
- Call each individual a **shape** (plural **shapes**), never an “AI character” or a hyphenated variant.
- Never use “roleplay,” “role-play,” “role play,” “RP,” or translated equivalents in authored public labels, explanations, or metadata. Preserve features, policies, technical identifiers, literal API values, and existing URLs or compatibility anchors; a copy correction does not authorize changing behavior.
- Change AI-facing instructions only with explicit user authorization. The approved October 4 terminology cleanup includes the documented preset and direct-instruction examples: use narrated actions and scenes while preserving sentence counts, response constraints, placeholders, and behavior. Keep unrelated system/classifier instructions and saved user content unchanged. Display built-in response-style names as **Short creative**, **Long creative**, and **Skilled creative** where applicable; retain **Creative** as the preset group name.
- Never write "Chat chats" or "a Chat chat". Say **Chat mode** ("in Chat mode", "Chat mode keeps the full list") and **Agent chats**.
- Use **chat** or **group chat** for the product conversation. Do not infer public terminology from source variable names, component names, or database fields.
- Verify navigation labels in the deployed product on talk.shapes.inc. Preserve the labels readers see, such as **New chat**, **Quick chat**, **Shapes**, **People**, **Instructions**, and **AI replies**. If a control cannot be verified, describe the task without inventing a label.
- Check screenshots as well as prose and metadata. Retire images that show obsolete UI labels or navigation.
- Before finishing documentation changes, check that every use of **Shapes** clearly refers to AI participants; otherwise, change it to **shapes.inc**.

# Product positioning

- Use the current [talk.shapes.inc homepage](https://talk.shapes.inc/) language: **Do things with your friends.** **Make a chat, invite your friends, and get things done together.** shapes.inc is a place to collaborate; do not invent replacement positioning.
- Explain shapes as **group assistants**, built to help you all together, **for anything that you do with other people**. Use the homepage examples, including hangouts, family trips, study groups, and group projects.
- **New chat** is the primary starting action. Creating or customizing a shape is optional, and is never required before starting a chat.
- Public Featured, tag, fandom, article-acquisition, and browse/search catalogs are gone and aren't coming back. Do not recommend them. Preserve direct shape links, existing chats, and the current owned/recent picker behavior.
- The guiding principles are earning the group's trust, participating as an equal actor with its own perspective, and proactively adding useful work. Do not equate proactivity with more messages.
- Personality and creative or social uses can support collaboration; entertainment, companionship, and “talk to AI with friends” are not the primary product promise.
- Keep feature steps and troubleshooting concrete. Verify interface labels and capabilities; distinguish product direction from available behavior. Do not promise automatic app access, perfect memory, unlimited usage, or actions that depend on unconfigured skills.
- See [documentation architecture](architecture/DOCUMENTATION.md) for the site's content structure and validation expectations.

# Feature reference for people and agents

- Treat these docs as the shared source for what people and agents can do, how to use each feature, and its limits. Use the current implementation and visible product labels, not old announcements, as evidence.
- Each feature guide should explain its purpose, setup/use, relevant access and usage limits, completion status, and recovery when something fails. Keep one canonical explanation and link it from overviews instead of copying limits into many pages.
- Distinguish shapes in Agent chats, external agent accounts, hosted coding agents, and agents on a connected personal computer. Their capabilities, permissions, and funding are not interchangeable.
- Maintain `features.mdx`, `docs-for-agents.mdx`, navigation, metadata, and Markdown exports when adding or retiring a feature. Verify old commented examples are absent from both human-rendered pages and agent-readable output.
- Publication and source merges are different from verified deployment. Record tested source revisions and remaining validation gaps in the PR or architecture handoff; do not present unavailable or unverified capabilities as established behavior.

# Voice: write like frontier agent docs

shapes.inc docs read like the docs of a frontier agent product: Claude Code, Codex, ChatGPT agent. Shapes are agents that act for a group. Say what they do, what you'll see, and where the limits are. This section governs wording only; the terminology and positioning rules above still apply, and facts, labels, limits, routes, and anchors never change in a voice edit.

## How a page is built

- **Open with what it does.** First sentence: what the feature is or does, in present tense, with the shape as the subject. Second sentence: when you'd use it or what it needs. No welcome, no tagline, no "In this guide".
- **Task-led headings for how-to** ("Connect your computer", "Pause a routine", "Stop a reply"). Noun headings for concepts ("How memory works", "What a shape can see"). No clever headings.
- **Short paragraphs.** One to three sentences. Put detail in bullets, one clause each.
- **Steps are numbered, one action each,** and end with what you see when it worked: "The row shows **· Paused**."
- **Show a real request.** Give the exact thing to say, in quotes, with the success condition or the stop point in it: "Find three flights to Lisbon under 600 for Friday and post them here. Don't book anything."
- **Decision tables use task-first headers:** "You want to | Use". Keep tables narrow; they must fit a phone.
- **Callouts are rare.** Use one for something irreversible, something that costs money, or something others can see.

## How sentences sound

- **Second person, present tense.** "You approve the total. The shape places the order."
- **The shape is the subject of its own verbs:** searches, reads, opens, drafts, sends, books, calls, runs, checks, waits, asks, stops, resumes, posts, saves. Not "can help you with", "is able to", "allows you to".
- **Describe autonomy as mechanics.** Who can start it, what it does without asking, where it pauses for approval, who sees the result, who pays. "It asks before it pays, books, or deletes."
- **State the default first,** then how to change it. "On by default. Turn it off in the same dialog."
- **Pair every capability with its boundary** in the same sentence or the next. "The shape uses your signed-in Chrome tabs until you select **Stop control**. Only your requests can use it."
- **Limits are exact:** numbers, units, reset times, who is covered. If you don't know the number, link the page that has it.
- **Failure is the next state, not an apology.** Say what happened, what was and wasn't done, and the next move. "The payment didn't go through. Nothing was charged. Pick another way to pay on the card."
- **Flat and certain for steps; precise for limits.** No "might", "should be able to", "feel free". Use "can" for a capability and "may" only for permission.
- **shapes.inc is a group chat app.** Write "shapes.inc is a group chat app", never "shapes.inc is a group chat". A chat is one conversation inside the app.
- **Name each thing once and keep the name:** shape, chat, Agent chat, Chat mode, task, routine, watch, connected app, engine, credits. Bold the exact UI label.

## Words

- **Use:** agent, task, run, approve, approval, permission, access, connect, schedule, routine, watch, in the background, in parallel, resume, stop, context, memory, action.
- **Avoid:** chatbot, bot, AI companion, magic, seamless, powerful, simply, just, easily, unlock, supercharge, robust, leverage, delve, "we're excited", "Chat chats".
- No exclamation marks. No emojis in prose. No rhetorical questions outside FAQ titles. No em-dash asides; split the sentence.

## Before and after

- "Shapes can help you plan a trip together!" → "A shape searches flights and hotels, posts the options in the chat, and books after you approve the total."
- "You can simply ask the shape to remind you." → "Say when and what: 'Remind us Friday at 6pm to pick a restaurant.' The reminder appears under **Settings** → **Tasks**."
- "Everyone can use connected apps." → "A shape uses your connected apps for your own requests. Teammates' requests use them only as **Shared access** allows."
- "Oops, something went wrong." → "The call didn't connect. You weren't charged. Ask again, or check the number."

# Design and styling

The docs wear the shapes.inc app look, benchmarked against the OpenAI and Claude developer docs: calm, neutral, type-led, fast to scan. The theme lives in `style.css` (loaded by Mintlify on every page) and the `colors`, `fonts` and `logo` keys of `docs.json`. The source of truth for tokens is shapes-chat `architecture/design-guide/index.html` and `architecture/brand-guide/index.html` (values from `app/globals.css`).

- **Type.** Instrument Sans for everything; JetBrains Mono for code. No Lexend, Inter or system fonts. Page title 30–38px/600 with tight tracking, h2 24px, h3 18px, body 16px at 1.7 line height, muted lede under the title. Sentence case for new headings, buttons and labels.
- **One accent.** The app blue (`#006EFF`, dark-mode links `#60A5FA`) marks links and focus only. Selected sidebar rows, TOC items, tabs and card icons use ink or a neutral fill (foreground at 6–9 %), never the accent. No pink (`#E94DB3` is the retired creator-site theme), no purple glows, no gradients.
- **Neutral surfaces.** Page `#F8F8F8` light / `#191B20` dark, cards white / Graphite with a hairline-plus-soft-shadow (the app's `settings-card`), 12px radius. `style.css` overrides Mintlify's `--gray-*` ramp with neutral grays because Mintlify tints the ramp from the primary color.
- **Brand mark.** The navbar shows the shapes.inc logo lockup: the logo on a white 32px tile (8px radius, hairline) next to "shapes.inc" in Instrument Sans 600 (`logo/shapes-inc-logo-lockup-{light,dark}.svg`, text outlined to paths because `<img>` SVGs can't load web fonts). Regenerate it from the app's logo and font files; don't recolor or redraw the logo.
- **No decorative icons.** Accordions (toggles) have no icons; the title carries the meaning. Never use the Font Awesome `shapes` glyph or emoji as icons; they read as kiddy. Card icons, when used, are monochrome Font Awesome regular and say what the card is about.
- **Primary CTA.** The navbar **New chat** button is an ink pill (foreground fill, background-colored text), the way frontier docs and the homepage do it.
- **Components.** Prefer prose, tables and Steps over card grids. When cards are right, keep them to short title + one-line description; icons are monochrome Font Awesome regular. Callouts are a neutral card with a colored icon (tip green, info blue, warning amber, danger red), not tinted boxes.
- **Overriding Mintlify.** Target stable hooks (`#navbar`, `#sidebar`, `#content-area`, `#table-of-contents`, `#page-title`, `.callout`, `.card`, `[data-component-part=…]`) instead of generated Tailwind classes. Mintlify's own `!` utilities live in a cascade layer and win over unlayered `!important` (for example, callout links stay the text color); work with them rather than fighting them.
- **Verify visually.** Run `mint dev --no-open`, then check a prose page, a card page, a tabbed page and an FAQ page in light and dark, at desktop (1440px) and phone (390px) widths. Run `mint validate` and `mint broken-links`. Put before/after screenshots in the PR.
