# Documentation terminology

- The user-facing platform and product name is **shapes.inc**. Always use this exact lowercase spelling with the dot; never use a space or a comma.
- Never shorten the platform name to **Shapes** or **shapes**, including in headings, metadata, prompts, and compact UI copy. Always write **shapes.inc**.
- A **shape** is a group assistant that participates in a shared chat on shapes.inc. Use **shapes** only as the plural of those AI participants.
- Call each individual a **shape** (plural **shapes**), never an “AI character” or a hyphenated variant.
- Never use “roleplay,” “role-play,” “role play,” “RP,” or translated equivalents in authored public labels, explanations, or metadata. Preserve features, policies, technical identifiers, literal API values, and existing URLs or compatibility anchors; a copy correction does not authorize changing behavior.
- Change AI-facing instructions only with explicit user authorization. The approved October 4 terminology cleanup includes the documented preset and direct-instruction examples: use narrated actions and scenes while preserving sentence counts, response constraints, placeholders, and behavior. Keep unrelated system/classifier instructions and saved user content unchanged. Display built-in response-style names as **Short creative**, **Long creative**, and **Skilled creative** where applicable; retain **Creative** as the preset group name.
- Use **chat** or **group chat** for the product conversation. Do not infer public terminology from source variable names, component names, or database fields.
- Verify navigation labels in the deployed product on talk.shapes.inc. Preserve the labels readers see, such as **New Chat**, **Quick chat**, **Shapes**, **People**, **Instructions**, and **AI replies**. If a control cannot be verified, describe the task without inventing a label.
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

# Design and styling

The docs wear the shapes.inc app look, benchmarked against the OpenAI and Claude developer docs: calm, neutral, type-led, fast to scan. The theme lives in `style.css` (loaded by Mintlify on every page) and the `colors`, `fonts` and `logo` keys of `docs.json`. The source of truth for tokens is shapes-chat `architecture/design-guide/index.html` and `architecture/brand-guide/index.html` (values from `app/globals.css`).

- **Type.** Instrument Sans for everything; JetBrains Mono for code. No Lexend, Inter or system fonts. Page title 30–38px/600 with tight tracking, h2 24px, h3 18px, body 16px at 1.7 line height, muted lede under the title. Sentence case for new headings, buttons and labels.
- **One accent.** The app blue (`#006EFF`, dark-mode links `#60A5FA`) marks links and focus only. Selected sidebar rows, TOC items, tabs and card icons use ink or a neutral fill (foreground at 6–9 %), never the accent. No pink (`#E94DB3` is the retired creator-site theme), no purple glows, no gradients.
- **Neutral surfaces.** Page `#F8F8F8` light / `#191B20` dark, cards white / Graphite with a hairline-plus-soft-shadow (the app's `settings-card`), 12px radius. `style.css` overrides Mintlify's `--gray-*` ramp with neutral grays because Mintlify tints the ramp from the primary color.
- **Brand mark.** The navbar shows the type-only "shapes.inc docs" wordmark (`logo/shapes-inc-docs-wordmark-{light,dark}.svg`, Instrument Sans outlined to paths). Don't put the hand-drawn shapes logo, mascots, emoji or decorative illustrations in the docs chrome; it reads as kiddy. Regenerate the wordmark from the app's font file rather than typing text into an SVG, since `<img>` SVGs can't load web fonts.
- **Primary CTA.** The navbar **New chat** button is an ink pill (foreground fill, background-colored text), the way frontier docs and the homepage do it.
- **Components.** Prefer prose, tables and Steps over card grids. When cards are right, keep them to short title + one-line description; icons are monochrome Font Awesome regular. Callouts are a neutral card with a colored icon (tip green, info blue, warning amber, danger red), not tinted boxes.
- **Overriding Mintlify.** Target stable hooks (`#navbar`, `#sidebar`, `#content-area`, `#table-of-contents`, `#page-title`, `.callout`, `.card`, `[data-component-part=…]`) instead of generated Tailwind classes. Mintlify's own `!` utilities live in a cascade layer and win over unlayered `!important` (for example, callout links stay the text color); work with them rather than fighting them.
- **Verify visually.** Run `mint dev --no-open`, then check a prose page, a card page, a tabbed page and an FAQ page in light and dark, at desktop (1440px) and phone (390px) widths. Run `mint validate` and `mint broken-links`. Put before/after screenshots in the PR.
