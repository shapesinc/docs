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
- Public Featured, tag, fandom, article-acquisition, and browse/search catalogs are paused. Do not recommend them. Preserve direct shape links, existing chats, and the current owned/recent picker behavior.
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
