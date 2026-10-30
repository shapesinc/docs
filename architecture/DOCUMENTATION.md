# Documentation architecture

## Reddit promotion removal (October 22, 2026; CIR-5874)

`docs.json` no longer advertises Reddit in the site footer. The footer keeps its
shapes.inc link, and the existing documentation and support navigation remain
unchanged. Keep Reddit community promotions out of authored documentation.

## Product model

Use the [talk.shapes.inc homepage](https://talk.shapes.inc/) as the source for positioning: “Do things with your friends” and “make a chat, invite your friends, and get things done together.” shapes.inc is a place to collaborate. Shapes are “group assistants,” built to “help you all together,” for “anything that you do with other people.” Reuse this language rather than inventing a new slogan. Manual shape creation is optional.

Three principles organize the product explanation: earn the group's trust, participate as an equal actor, and proactively add value. These are design principles, not guarantees that every Shape has complete context or can act in connected services without configuration.

## Content structure

- `introduction.mdx` is the main entry point: product purpose, first chat, principles, task guides, and help.
- `features.mdx` indexes capabilities and their canonical guides; `docs-for-agents.mdx` explains the Markdown exports and distinguishes product guides from the live external-agent API contract.
- Getting Started defines chats, assistants, instructions, memory, engines, and skills, then links to current setup steps.
- Use-case guides cover everyday decisions, planning and learning, and team projects. Each gives a concrete goal, a shared prompt, and relevant controls.
- Feature guides remain operational references, including creative features. Their introductions explain how the feature supports a shared activity.
- `faq.mdx` and `faq/` remain the support path for account, access, replies, privacy, voice, engine, and billing questions. Keep exact UI labels current and retain only screenshots that match the documented interface.
- Articles explain multiplayer assistance and how to evaluate workflows. Avoid unsupported rankings, competitor claims, and blanket pricing or memory promises.
- `docs.json` owns navigation and site metadata. Existing page paths remain stable, including older entertainment-oriented slugs, so external links continue to work.

## Writing and maintenance

Use **shapes.inc** for the product and **shape/shapes** for AI participants. Use **chat** or **group chat** in public prose, headings, metadata, and link labels. Preserve current visible control labels; do not infer them from old screenshots or technical identifiers. Prefer everyday collaboration examples as well as work examples; multiplayer assistance is broader than workplace productivity.

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

## Feature-reference refresh (October 26, 2026)

This refresh makes the docs a shared operational reference for humans and agents: what a feature does, how to use it, the relevant access and usage limits, how to recognize completion, and what to do when it fails. Positioning follows the Talk homepage's “Do things with your friends” wording.

The new feature index links canonical guides for threads, Saved details, browser sign-in, purchases and travel, polls and shared pages, connected computers, hosted coding allowances, tasks, voice, memory, and external agents. New guides distinguish browser sessions from connected computers, private forms from shared replies, payment approval from order confirmation, and native shape capabilities from outside-agent API access. None of these documentation edits changes runtime capabilities, routing, permissions, defaults, or billing.

The source audit used `shapes-chat` main at `f6ae5f33d6` and `app` master at `881d29d71`, including the October 15–26 merged feature changes. Key implementation references are `CHAT_THREADS.md`, `ACCOUNT_AUTOFILL.md`, `WORKSHOP_BROWSER.md`, the travel/payment services, `genui/polls.py`, `genui/registry.py`, `shared_activity_renderer.py`, shared voice billing, agent authorization, and the current settings/editor components. Source verification establishes the documented implementation; it does not establish that a live payment, travel booking, or provider-failure scenario was exercised in this docs-only task.

Current account navigation is **General**, **Appearance**, **Notifications & privacy**; **Personalization**, **Saved details**, **Memories**, **Custom emoji**; **Your shapes**, **Connected apps**, **Tasks**, **Completed**, **Computers**, **Your AI agents**; account controls; and **Help**. **Streaming** and **Working steps** are in General → More preferences and default off. The companion frontend PR adds **Docs** under Help and to settings search. Older dated verification notes below are historical snapshots, not the current settings inventory.

Fandom and fiction showcase pages, the old preset showcase, and obsolete call-game/related-group guidance are retained in dated MDX comments inside `<Visibility for="humans">` blocks. Plain MDX comments are invisible in the browser but Mintlify's Markdown transform retains them; the visibility wrapper excludes the archive from agent Markdown as well. Retired route landing pages are hidden from navigation and marked `noindex`, with original routes and compatibility anchors preserved. They point readers to current guides. Direct shape links remain supported; public discovery is not recommended.

Validation includes the official Mintlify renderer, desktop and 390px mobile reading, navigation and keyboard links, all changed page routes, local link checks, and comment/metadata checks. The local `/_markdown/<slug>` route serves actual candidate Markdown using the same `buildMarkdownResponse` and `transformContentForMarkdown` path as hosted exports; use it to verify that archived material is excluded. Test results and candidate revisions are recorded in the PR. The local preview does not serve the public `.md`/`llms.txt` aliases or live search: verify those outputs after publication before claiming their deployment.

The changes add no AI calls, runtime prompts, classifiers, or permanent retrieval context. Incremental recurring provider spend from these changes is $0/day.

## Live-feature follow-up (October 26, 2026)

Docs #31 and Talk #5869 were admin-merged after explicit user approval. The deployed docs' `llms.txt`, sitemap, and full Markdown index contain 121 guides at that revision; the three retired showcase routes are excluded, and sampled archive-bearing Markdown pages do not expose their original commented content. The live Settings Help group now shows Docs.

This follow-up checks current product source against deployed controls. Source references: Talk `95afb0caa45c8ede89affffe627c5e79747f2dce` and app `00cd926f718285f73d4d284770b7678484b7df0b`; the production API reports release `v5.3.1189`, which maps to that backend revision. Live browser checks confirmed Settings → General → More preferences, Premium, Your shapes, AI settings, Thread-only replies, Keep the chosen AI Engine, `/thread`, `/btw`, Media & Files, the long-paste choices, and the listed Agent skills. These are documentation checks, not successful payment, external-account sharing, or provider execution tests.

- `files-and-attachments.mdx` is the canonical upload, reading, preview/download, and recovery guide. Its 100MB limit and type constraints come from `lib/file-upload-constants.ts`, the upload route, attachment rendering/forwarding helpers, and backend file ingestion. Avoid promising complete file reading or equating a chat export with an attachment backup.
- `tasks.mdx` records the deployed scheduler's timing boundaries, adaptive checks, quiet-watch notices, and Completed/reopen behavior. `connected-apps.mdx` distinguishes specific authorized actions, supported shared app connections, personal connections, and broad private watches. A second confirmation is not guaranteed for an already explicit request; payment approval remains a separate flow.
- The old CSS whole-app selector reference cannot affect native profile controls. Custom CSS is scoped to enabled custom HTML. Keep the obsolete examples in dated human-only comment archives, including their existing anchors, without exposing them in Markdown exports.
- Navigation puts starting a chat near the entry, chat features in Chats & Collaboration, and skills with actions. `features.mdx` and `docs-for-agents.mdx` link the canonical guides. The logged-out homepage wording and product focus are unchanged.

The connected-app footer still says shapes check before every send/delete, while the current instructions permit clear authorized requests without a second confirmation. That separate UI mismatch is recorded for follow-up; this documentation change does not alter product permissions or behavior. A test account without connected apps cannot exercise the post-connection sharing controls without granting new access.

No runtime code or AI calls are added: incremental recurring provider spend is **$0/day**. Candidate renderer, responsive, link, export and remaining validation results belong in the PR handoff; source coverage alone must not be reported as live provider verification.

## Collaborative workflows and agent help (October 27, 2026)

This pass expands the feature reference into practical shared workflows while retaining the homepage wording. `features.mdx` routes goals to canonical guides; `docs-for-agents.mdx` tells help systems how to explain setup, each person's contribution, access, limits, completion, and recovery. Everyday plans, family trips, studying, shared purchases, creative projects, documents, and code are occasions for people to spend time together.

`ai-agents.mdx` explains each friend bringing an owned external agent, conversations between people, shapes, and agents, same-thread replies, clear handoffs, verified monitoring, and request/message/generation limits. Muse and Instinct are conditional examples of agent hosts: compatibility requires authenticated HTTP and private credential storage, or remote MCP with OAuth. The documentation does not assert a tested or certified integration. Hosted coding, connected personal computers, and outside-agent accounts remain distinct paths with different access and funding.

The final product source snapshot is Talk `522ed40a6096951c1b2146297508849e98310e6e` and app `42ca771c98573e22ef3e651d5536d23bfc22975f`. The Talk production build succeeded; a refreshed live session displayed **Saved sign-ins**, the current file viewer, and the revised shape editor. Production `/health` reported `v5.3.1210`, which maps to that backend revision. Current additions include native choices and Yes/No offers, shared widgets, private Ask cards and scoped keys, live task status/browser views, in-app file previews, and the reorganized Profile, Memory, Advanced, and Voice Engine controls. Source audit establishes implementation, not execution of every provider-dependent feature.

The rich comparison layout of native choices currently omits the ordinary **Ask the group**, **Settle**, and vote-summary controls. The guide documents the available fallback. A live comparison was generated during this pass, but its group-vote persistence was not established from the visible card; do not call that a verified successful group decision or a lost-vote bug.

Six new screenshots in `images/october-2026/*-20261027.jpg` show actual deployed computer setup, app search, the public agent connector, invitation options, the composer menu, and a text-file viewer. Captures omit private chat lists, personal invite URLs, connected identities, and credentials. The file is a harmless documentation fixture. Written instructions, descriptive alt text, and captions accompany the images; the renderer's full-size image control works on desktop and narrow screens.

Validation covers all 54 changed MDX pages in the official renderer, their actual candidate Markdown responses, 123 navigation entries, local links and anchors, mobile and desktop reading, feature-to-guide navigation, keyboard anchors, image enlargement, and reload. Measured layouts were 1280px and 354px CSS width (390px browser viewport with existing zoom); neither had document-level horizontal overflow or broken images. A real test file was uploaded, sent, reopened after refresh, viewed on desktop and mobile, and downloaded with an identical SHA-256 hash. No new app connections, computer grants, agent identities, bookings, or purchases were created for these documentation checks. Official `mint validate` and `mint broken-links --check-anchors` pass. The final build recorded unchanged source hashes, and the PR records remaining runtime and publication gaps.

The public docs MCP endpoint exposes search and filesystem tools. A read-only MCP call successfully retrieved the published feature and file guides; public `.md`, `llms.txt`, and `llms-full.txt` also reflect the previously merged docs. New prose reaches those surfaces only after this PR is published and indexed. In-app Help Me guidance already prioritizes documentation tools, but its room-specific installed MCP configuration and an actual Tod retrieval of the new prose were not verified. No runtime prompt redeploy is included or needed merely to publish these docs.

This is a docs-only change. It adds no AI calls, permanent prompt context, or runtime retrieval steps; incremental recurring provider spend is **$0/day**. The live walkthrough used a one-off shape response, separate from recurring production cost.

## Get the most out of shapes.inc and October 29–30 launches (2026-10-30)

`get-the-most-out-of-shapes-inc.mdx` is the practical entry point: five-minute setup, ready-to-send requests for what people actually do, new features, power moves, habits, free allowances, and recovery. Its use cases and ordering come from production study `voct29.01-feature-guide` (Oct 1–29 tool use across all non-staff chats, plus a labeled 220-chat sample from Oct 20–29). Public pages carry no usage numbers; the aggregates and method are in the PR and `reports/docs-get-the-most-out-2026-10-29/` in the local Shapes folder.

New canonical guides:

- `texting.mdx`: Messages texting (connect flow, sign up by text, chat routing commands, media, tapbacks, edits, numbered cards, iMessage groups, limits, STOP/START) and notification sign-in links. The in-app connect flow is allowlisted by config default, so the page says texting is rolling out; sign up by text and groups are on for everyone.
- `phone-calls.mdx`: shape-placed calls in Agent chats (number verification, statuses, mid-call questions, saved details, recordings visible to chat members, Free $1.00/UTC day vs Premium pay-per-use at $0.22/min, 3- and 15-minute limits, recovery).
- `slack-and-hooks.mdx`: Slack import, two-way sync, and chat hooks. Slack OAuth, events, and outbound posts were not exercised live.

Updated: buying (store checkout first, fixed way-to-pay order, Shop Pay, US\$5,000 wallet limit, Payments rows; payment-company names removed per the product copy rule), whole-chat memory in Agent chats, app actions and shapes made on demand, Agent shape search and **Make discoverable in search**, **Let shapes talk**, **Automatic threads**, **Shared access**, credit recovery and the free Agent engine below 100 credits, the private details card, parallel and paid coding runs, PR follow-ups, call transcripts for shapes, reactions, Translate and Ask moderator removal, desktop **Take photo**, notifications, What's new, features, agent guide, and navigation. The pre-existing broken `#finding-shapes-you-dont-own` anchor now has an explicit target.

Source: app `8fe075248` (production `v5.3.1327`) and shapes-chat `c134eea6d`. Product source and PR bodies establish these behaviors; no live call, text, purchase, Slack sync, or hook delivery was made for this docs change. Validation: `mint validate`, `mint broken-links --check-anchors` (no broken links), every changed route returns 200 in `mint dev`, no horizontal overflow at 375px on the new and buying/apps/modes pages, and the Markdown export renders the new guide.

This is a docs-only change: no AI calls, prompts, or retrieval steps are added. Incremental recurring provider spend is **$0/day**.

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

## Hosted coding-agent allowances (2026-10-23)

`faq/how-do-free-coding-agent-limits-work.mdx` is the canonical public explanation
of the three independent limits: two coding starts shared across Claude Code
and Codex, $1/day of free coding-model provider usage, and $0.20/day of hosted
computer/browser usage. Credits and Skills link to it, and it appears in both
the FAQ index and navigation.

Verified against `shapesinc/app` master commit
`f256a1b0d9a477b4bfe7583cc6acd6b212edde04`: `config.py`,
`api/service/sandbox_llm_gateway.py`, `api/service/sandbox_compute_billing.py`,
`tools/claude_code_tool.py`, and `tools/codex_tool.py`. These limits predate the
later copy-only change; the proposed independent free-compute allowance was
closed without merging and is not documented as available behavior.

Keep the account boundary and units explicit: these are per-user budgets
across chats, not a group pool or credit deposits. Paid coding runs share the
computer allowance but do not spend the free-model budget or free-start count.
The public FAQ explains UTC reset, upfront reservation, failed/cancelled starts,
credit-based admission, and the distinction from agents on a connected personal
computer. It adds no new UI navigation instructions or screenshots. Changing
these pages changes documentation only; publication follows the normal merge
to `main` and documentation deployment.

Validation: `mint broken-links` reports no broken links and all 119 navigation
entries resolve. The local Mintlify preview renders the FAQ on desktop and a
375px viewport without document-level horizontal overflow; its two-column table
fits the mobile content width. Credits and Skills links reach the FAQ, and the
FAQ index includes its card. Escape currency dollar signs in MDX so two amounts
in one paragraph are not interpreted as a math expression.

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
