# Documentation architecture

## Product model

shapes.inc is a multiplayer assistant for shared decisions and work. A chat brings together the people involved and AI participants called Shapes. The content should help readers make progress on a group goal: share context, research, compare preferences and tradeoffs, review work, and decide on next steps.

Three principles organize the product explanation: earn the group's trust, participate as an equal actor, and proactively add value. These are design principles, not guarantees that every Shape has complete context or can act in connected services without configuration.

## Content structure

- `introduction.mdx` is the main entry point: product purpose, first chat, principles, task guides, and help.
- Getting Started defines chats, assistants, instructions, memory, engines, and skills, then links to current setup steps.
- Use-case guides cover everyday decisions, planning and learning, and team projects. Each gives a concrete goal, a shared prompt, and relevant controls.
- Feature guides remain operational references, including creative features. Their introductions explain how the feature supports a shared activity.
- `faq.mdx` and `faq/` remain the support path for account, access, replies, privacy, voice, engine, and billing questions. Keep exact UI labels current and retain only screenshots that match the documented interface.
- Articles explain multiplayer assistance and how to evaluate workflows. Avoid unsupported rankings, competitor claims, and blanket pricing or memory promises.
- `docs.json` owns navigation and site metadata. Existing page paths remain stable, including older entertainment-oriented slugs, so external links continue to work.

## Writing and maintenance

Use **shapes.inc** for the product and **Shape/Shapes** for AI participants. Use **chat** or **group chat** in public prose, headings, metadata, and link labels, preserving UI labels such as **New Chat**, **Create Chat**, and **Chat Menu**. Prefer everyday collaboration examples as well as work examples; multiplayer assistance is broader than workplace productivity.

Describe what a reader can actually configure or do. Link to the live engine catalog for changing availability and pricing. Built-in skills are included automatically. External MCP servers require configuration and may need each member to sign in; capabilities still depend on the selected engine and permissions. Keep fundraising, financial projections, hiring plans, and other internal strategy out of public help pages.

Retain existing routes and linked heading anchors when rewriting a page. Update titles, descriptions, keyword metadata, cards, and navigation alongside body copy so search and social previews tell the same story.

Follow the terminology rules in `AGENTS.md` for authored public labels, explanatory prose, and search metadata. Preserve AI-facing instruction text byte-for-byte, including built-in preset bodies and exact prompt examples intended to be copied or sent to AI; the copy sweep applies only to their surrounding labels and explanations. Keep existing routes and compatibility anchors intact when their wording is retired from visible copy.

## Validation

This repository is a Mintlify MDX site with no application TypeScript project or package test suite. For documentation changes:

1. Verify product terminology in the deployed UI. Source identifiers and older screenshots do not establish current labels. Inspect text, metadata, navigation, image text, and link labels.
2. Check `docs.json` parses and all navigation pages exist.
3. Run `mint broken-links`; distinguish existing failures from newly introduced links.
4. Preview with `mint dev --no-open` and inspect changed entry points, links, and responsive layouts.
5. Review diffs for terminology, preserved troubleshooting, valid MDX, and unsupported feature claims.

Changes deploy when merged to `main`. A pull request is the review handoff; opening one does not publish the revised site.

## Verified public terminology (2026-09-28)

Read-only inspection of the signed-in desktop site at `talk.shapes.inc` confirmed:

- **New Chat** opens a **New chat** sidebar with **Quick chat**, **AI**, and **People**. After selection, **Continue** opens **Chat details**, then **Create Chat**.
- The chat header's **More actions** menu includes **Settings**, **Instructions**, **Members / Invite** (with a participant count), and **Share chat**.
- **Settings** opens **Chat Menu**, including **Participants**, **AI Configurations**, and **Chat Appearance**.
- **AI Configurations** contains **Instructions**, **AI replies** with **Auto-reply triggers**, **Skills**, and **MCP servers**. Built-in skills are included automatically; **Add MCP server** configures an extension.
- **Add participants** uses **AI** and **People** tabs.

Keep public labels current on future edits. Legacy file paths and hidden anchor aliases may remain to avoid breaking links; they are not reader-facing terminology.
