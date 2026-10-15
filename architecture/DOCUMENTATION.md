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

Follow the terminology rules in `AGENTS.md` for authored public labels, explanatory prose, and search metadata. AI-facing edits require explicit authorization; the approved preset/example instruction changes use narrated actions and scenes while preserving the same sentence counts, response constraints, and placeholders. Keep unrelated system/classifier instructions and saved user content unchanged. Keep existing routes and compatibility anchors intact when their wording is retired from visible copy.

## Validation

This repository is a Mintlify MDX site with no application TypeScript project or package test suite. For documentation changes:

1. Verify product terminology in the deployed UI. Source identifiers and older screenshots do not establish current labels. Inspect text, metadata, navigation, image text, and link labels.
2. Check `docs.json` parses and all navigation pages exist.
3. Run `mint broken-links`; distinguish existing failures from newly introduced links.
4. Preview with `mint dev --no-open` and inspect changed entry points, links, and responsive layouts.
5. Review diffs for terminology, preserved troubleshooting, valid MDX, and unsupported feature claims.

Changes deploy when merged to `main`. A pull request is the review handoff; opening one does not publish the revised site.

## Verified public terminology (2026-10-05)

Checked against the deployed frontend source (`shapes-chat` `main`) after the October 4 release, plus the signed-out sign-in and agent pages on `talk.shapes.inc`. The in-app **Settings** → **What's new** release notes list everything that moved.

- **New Chat** opens a **New chat** picker with **Quick chat** and the **Shapes** and **People** tabs, then **Continue**. The header ⋯ → **New chat** dialog uses **Next** → **Chat details** → **Create Chat**. There is no **AI** tab.
- Chats are **Chat** or **Agent**; **Auto** chooses per message. The account default is the **New chats** setting on the Settings page; owners change a chat's mode in its **Settings** → **AI Configurations**. One-to-one conversations are **DMs**. The shapes.inc engine is **Formless**.
- Selecting a chat's name opens its **Settings** panel: **AI Configurations**, **Engines**, **Chat Appearance**, **Profile & credits**, **Manage memories**, **Participants**, **Notifications**, **Moderation**, **Pinned Messages**, **Media & Files**, **Leave Chat**, and **Delete chat**. "Chat Menu" is no longer a visible label.
- The chat header's **More actions** menu no longer has Members, Invite, Share, or Delete. Group chats have an **Invite** button in the header; the sidebar ⋯ menu has **Invite**, **Share**, **Mark completed**, and **Delete**.
- Account settings: **Personalization** (preset, Location, Credits, Chats & Shapes, Profiles), **My Shapes**, **Connected apps**, **Computers**, **Manage memories**, **Tasks**, **Completed**, **Notifications & privacy**, and the **Support** group (**What's new**, **Feedback**, **Support Chat**, **For AI agents**).
- Retired: Rewards, Personas (now **Profiles**), Archive (now **Completed**), message ratings, public Shape discovery in search, and the Shape reach-outs and Streaming settings toggles.

Keep public labels current on future edits. Legacy file paths and hidden anchor aliases may remain to avoid breaking links; they are not reader-facing terminology.

## Signed-in verification and screenshots (2026-10-15)

Walked through the deployed Settings, Personalization, New chats controls, Shape creation, Premium entry point, and Your AI agents. The retained October 5 source audit above remains the context for pages outside this walkthrough.

- **More preferences** now contains **Sound alerts**, **Use shape avatars for chats**, **Personalized ideas**, and **Premium message badges**. **Haptic feedback** is conditional on a supported touch device; that gate was checked in frontend source rather than exercised on a physical phone.
- **Settings → Your AI agents** shows owner-linked agents and the MCP connector address. The deployed copy says Shape replies to linked agents use the human owner's credits. Personal one-time invitations establish ownership; ordinary chat links do not. Cross-checked the limits and linking behavior against the current frontend/backend sources.
- **Set up (1/2)** saves a Shape before image setup. **Start over** on the image step returns to the blank creation form without deleting that saved Shape. Do not use a real account to create walkthrough examples without accounting for this side effect.
- The tested Premium account uses a store-managed page with **Manage subscription**, not the old gift-card dashboard. Gift-card purchasing/redemption and the full billing-provider matrix were not exercised. Keep their availability conditional and never promise that every account has those controls. Backend `auto_top_up_service.py` retires legacy top-up once an account moves to subscription billing; `stripe_service.py` redeems gift cards into billing balance, not directly into Shape Credits.

Local preview checks: all seven illustrated pages loaded their eight captures at 375px with no document-level horizontal overflow; the creation guide and Premium card were also visually checked on desktop. Build validation, broken-link checks, all 113 navigation paths, and local image paths pass. Existing auto-top-up heading anchors remain available.

Screenshots in `images/october-2026/` are actual captures of the signed-in deployed UI, cropped to the relevant controls. Creation uses a neutral Study Planner example; other crops omit chat lists, personal profiles, connected account identities, and payment details. These are narrow browser views, not claims of native mobile-app coverage. The original JPEG captures remain unaltered. `images/guide-pointer.svg` is a presentation overlay in the MDX, anchored proportionally to the target. Every illustrated step also has written instructions, descriptive alt text, a caption, and a full-size image link. Keep images at readable widths and check the pointer after replacing a capture.

| Capture | Guide |
| --- | --- |
| `create-shape-basic.jpg`, `create-shape-images.jpg` | Shape creation FAQ |
| `premium-settings-card.jpg` | Gift cards |
| `new-chat-mode.jpg` | Chat, Agent, and Auto |
| `more-preferences.jpg` | Settings and Personalization |
| `credit-preferences.jpg` | Stop new chats from using credits FAQ |
| `completed-preferences.jpg` | Completed chats |
| `agent-connector.jpg` | Invite AI agents |

## Support FAQ additions (2026-10-15)

Added canonical FAQs from the October 1–15 Help Me and Reviews audit: purchasing account credits without a subscription, retaining credits after cancellation, editing Shape replies in Agent mode, reasoning effort versus the former thinking panel, and export/backup limitations. The FAQ index, navigation, and related guides link to the answers.

- Billing was checked against `app/api/service/premium_plans_v2_eligibility.py`, `premium_plans_v2_entitlements.py`, `stripe_service.py`, and `credit_subscription_email_service.py`. Every existing user is eligible for the current plan flow; the old balance checkout is blocked. Existing balances remain usable without an active subscription, and cancellation keeps already-added credits. Do not imply there is a hidden one-time account credit button.
- `shapes-chat/components/message.tsx` hides Edit for assistant messages while the chat is in Agent mode, before owner/staff permissions are considered. Own-message editing remains available. The same component omits reasoning parts and strips thinking tags from displayed replies.
- Verified **Settings → My Shapes → AI Engine → Show Internal Monologue (experimental)** in the signed-in deployed UI without changing the setting. `components/my-shapes/sections/engine-section.tsx` gates the Shape's effort selector on this toggle and engine support. Corrected the older **Show reasoning** wording and kept generation effort distinct from display behavior.

Validation: Mintlify build and broken-link checks pass, and all 118 navigation entries resolve. The FAQ index, credit-purchase answer, and export answer were inspected on desktop; all five new answers render at 375px without document-level horizontal overflow.

The export FAQ scopes the limitation to a full export or backup of Shapes, chat histories, and memories. Current frontend and backend searches found no corresponding user export flow; individual message copying and file downloads remain available. `components/delete-account-modal.tsx` contains an “Export your data first” reminder but provides no export action. `JsonDownloader` is used by ads analytics, not as an account or chat backup. Do not turn those strings or an AI-generated document into an official full-export claim. Third-party tools are used at the user's own risk, without guarantees of security, privacy, compatibility, or completeness; no community tool is endorsed.

## Skip turn support source (October 4, 2026)

The FAQ is the canonical troubleshooting source consumed by documentation search. Keep related guides aligned with `components/actions-dropdown-button.tsx` in shapes-chat: existing messages, at least one active shape, Chat mode, and group-owner authorization. One-to-one shape chats are supported. Do not infer a multiple-shape requirement from the feature’s group use cases or describe it as an Agent control. Mode descriptions remain capability-based; this correction changes no runtime behavior or permissions.

The fix replaces inaccurate/ambiguous retrieved prose without adding an AI call, classifier, permanent prompt, or retrieval step. The combined changed public text is shorter; expected incremental recurring inference spend is $0/day. Search-index rollout follows the normal documentation deployment; a merged PR alone is not evidence that an already-running support conversation has refreshed its retrieved context.
