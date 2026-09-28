# Documentation architecture

## Product model

Shapes, Inc. is a multiplayer assistant for shared decisions and work. A room brings together the people involved and AI participants called Shapes. The content should help readers make progress on a group goal: share context, research, compare preferences and tradeoffs, review work, and decide on next steps.

Three principles organize the product explanation: earn the group's trust, participate as an equal actor, and proactively add value. These are design principles, not guarantees that every Shape has complete context or can act in connected services without configuration.

## Content structure

- `introduction.mdx` is the main entry point: product purpose, first room, principles, task guides, and help.
- Getting Started defines rooms, assistants, instructions, memory, engines, and skills, then links to current setup steps.
- Use-case guides cover everyday decisions, planning and learning, and team projects. Each gives a concrete goal, a shared prompt, and relevant controls.
- Feature guides remain operational references, including creative features. Their introductions explain how the feature supports a shared activity.
- `faq.mdx` and `faq/` remain the support path for account, access, replies, privacy, voice, engine, and billing questions. Preserve screenshots and exact UI labels when changing positioning.
- Articles explain multiplayer assistance and how to evaluate workflows. Avoid unsupported rankings, competitor claims, and blanket pricing or memory promises.
- `docs.json` owns navigation and site metadata. Existing page paths remain stable, including older entertainment-oriented slugs, so external links continue to work.

## Writing and maintenance

Use **Shapes, Inc.** for the product and **Shape/Shapes** for AI participants. Use rooms in explanatory prose while preserving UI labels such as **New Chat**, **Create Chat**, and **Chat Settings**. Prefer everyday collaboration examples as well as work examples; multiplayer assistance is broader than workplace productivity.

Describe what a reader can actually configure or do. Link to the live engine catalog for changing availability and pricing. Treat skills and external integrations as dependent on configuration, model support, and permissions. Keep fundraising, financial projections, hiring plans, and other internal strategy out of public help pages.

Retain existing routes and linked heading anchors when rewriting a page. Update titles, descriptions, keyword metadata, cards, and navigation alongside body copy so search and social previews tell the same story.

## Validation

This repository is a Mintlify MDX site with no application TypeScript project or package test suite. For documentation changes:

1. Check `docs.json` parses and all navigation pages exist.
2. Run `mint broken-links`; distinguish existing failures from newly introduced links.
3. Preview with `mint dev --no-open` and inspect changed entry points, links, and responsive layouts.
4. Review diffs for terminology, preserved troubleshooting, valid MDX, and unsupported feature claims.

Changes deploy when merged to `main`. A pull request is the review handoff; opening one does not publish the revised site.
