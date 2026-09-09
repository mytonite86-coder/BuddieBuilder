# Skald and Kreepy Productions Ideas Master

**Record ID:** `SKALD-KREEPY-IDEAS-MASTER`  
**Current revision:** `SKALD-KREEPY-IDEAS-MASTER-2026-09-08.1`  
**Effective:** 2026-08-24, America/Denver  
**Status:** Active and authoritative idea registry  
**Reports to:** `operations/skald-kreepy-master.md`, revision `SKALD-KREEPY-MASTER-2026-09-08.1`

## 0. Purpose and record-control rule

This folder is the permanent parking place for every Skald and Kreepy Productions product, feature, brand, storytelling, marketing, and operational idea that has not yet entered App Operations.

- Every accepted idea receives one permanent idea ID and one registry row.
- Ideas do not disappear merely because they are not active work.
- Idea order is inventory order, not build priority.
- Threads may propose ideas, but an idea is not safely captured until it is reconciled into this master.
- When Skald explicitly recommends documenting, capturing, or parking an idea as a concept, that recommendation is standing authorization to reconcile it into this master immediately unless Kreepy explicitly says not to. This capture authority is documentation-only and does not authorize research, planning, implementation, spending, publishing, production changes, or commercial activation.
- Do not invent, reuse, or silently renumber an idea ID.
- Moving an idea to planning, implementation, live operation, shelving, merging, or rejection changes its status; it does not delete its history.
- This record does not authorize implementation, spending, publishing, production changes, or commercial activation.
- When an idea crosses the portfolio lifecycle boundary, create or update the applicable operational record first, then mark the idea as `Graduated` and link its destination.

## 1. Idea ID policy

Idea IDs use the format `SKI-YYYY-NNN`, where `YYYY` is the year first registered and `NNN` is a zero-padded sequence within that year.

These IDs are registry identities, not customer-facing product names, billing IDs, entitlement IDs, build order, or the separate future Dragon Part Numbers system. Stable production identifiers remain controlled by `operations/product-registry.md`.

## 2. Authoritative idea registry

| Idea ID | Name | Category | Status | Active workload | Summary / boundary | Origin evidence | Destination |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `SKI-2026-001` | Clipboard | Product concept | Parked | No | Unimplemented independent concept; scope not yet accepted into App Operations. | Existing portfolio map | — |
| `SKI-2026-002` | Dragon Part Numbers | Operations / brand system | Parked | No | A durable part-number or character-identity system. It must not be confused with this Ideas Master's registry IDs. | Existing portfolio map | — |
| `SKI-2026-003` | S&K Animated Sitcom Shorts | Brand storytelling / acquisition | Parked; funding-gated | No | Short-form animated stories featuring anthropomorphic S&K products as an entertainment-led acquisition channel and future S&K webpage traffic source. No production or campaign commitment is authorized. | Analytics Updates Thread, 2026-08-24 | Future S&K marketing/page planning |
| `SKI-2026-004` | Living Mural / Product Graduation Storefront | Interactive storefront / brand lifecycle | Parked; funding-gated | No | Interactive S&K webpage/storefront where new product characters run below the mural, link to their products, and later graduate into the permanent mural after earning an approved milestone. | Analytics Updates Thread, 2026-08-24 | Future S&K webpage/storefront planning |
| `SKI-2026-005` | Pocket Familiar / 3D Live Dragon Digi-Pet | Product concept / AR companion | Parked | No | Photorealistic AR creature that lives in the user's surroundings, recognizes its name and person, grows through care, remembers interactions, and exhibits imperfect pet-like behavior. “3D Live Dragon Digi-Pet,” “Pocket Familiar,” “AI Dragon Hunt,” and “Dragon AR Adventures” are aliases/evidence for one concept, not separate products. | App Ideas; AI Dragon Hunt; Dragon AR Adventures | — |
| `SKI-2026-006` | Money Trail | Product requiring recovery | Captured; prior unfinished state reported | No | Older App Ideas index identifies this as an app that needs finishing. Exact repository, implemented scope, and authoritative current state require recovery before planning or work issuance. | App Ideas project, “SVG Cleanup Tools” thread | — |
| `SKI-2026-007` | Buddie Builder | Product concept / reusable offline learning-game ecosystem | Planned; local prototype recovered; preservation stop | No | BuddieBuilder is the character creator/forge for a reusable offline learning-game ecosystem. A saved buddy profile is shared across modules/levels; the family-first, offline, no-subscription version is the proving ground, with any clean commercial clone/adaptation separately gated after the shell and modules are proven. Tactile/Monster Part Shelf accepted at 6f7c952; offline foundation preserved locally on 2026-09-08, with build/typecheck/lint passed and limited desktop cache proof. Physical Home Screen/device acceptance is unverified; saves/profile and learning modules remain future work. Emergency preservation stops development. | App Ideas project; “SVG Cleanup Tools” thread; Issue Tool 3 Work Block discussion, 2026-09-02 | `BuddieBuilder/docs/BUDDIEBUILDER-CANONICAL-PLAN-RECOVERY.md`; `BuddieBuilder/docs/BUDDIEBUILDER-IMPLEMENTATION-GAP-AUDIT.md`; `operations/work-blocks/2026-09-08-buddiebuilder-offline-foundation.md` |
| `SKI-2026-008` | Garden Spread | Legacy physical product | Graduated | No | Belly Dump and Garden Spreader are aliases. Owner confirms prototype and commercial history; physical prototype presumed lost, other evidence preserved privately. Patent/IP-gated; no new build authorized. | Garden spread belly dump; scoped file audit; Business Development Funding Advice; owner confirmations in Audit S&K Mastery work board | `operations/garden-spread-master.md`, revision `GARDEN-SPREAD-MASTER-2026-08-29.1` |
| `SKI-2026-009` | AI Context GPS / Context Positioning System | Cross-project infrastructure concept | Captured | No | Persistent “YOU ARE HERE” context showing current workspace/project, task, available files, authority source, task stage, and writeback destination; warns about wrong-project or unfiled information and suggests appropriate filing locations/categories. | Portfolio File Mention, 2026-08-26 | Future S&K systems/infrastructure planning |
| `SKI-2026-010` | S2 Unified Capability Architecture | Cross-product architecture concept | Parked; maturity-gated | No | Future M.A.B. S2 may combine reusable capability seeds from SVG Micro Eco geometry cleanup beyond SVG-only limits, M.A.B. toolpath/motion logic, Blueprint-Ai recognition and 3D source material, SignalDrift movement/collision/pinchpoint analysis concepts, MoneyTrail-style constraint/tolerance/resource/waste accounting concepts, and BuddieBuilder-style modular 3D part libraries with drag/drop assembly and surface customization. Preserve as a concept architecture note until repeated blocks mature; no implementation authority. | Issue Tool 3 Work Block general-thread discussion, 2026-09-02 | Future M.A.B. S2 architecture evaluation |
| `SKI-2026-011` | S&K Reusable Master Blocks / Beginner Coder Bundle | Cross-project infrastructure / productization concept | Parked; proof-gated | No | Repeatedly built cross-project components should be isolated as clean reusable master blocks, then cloned and wired into future products. Only blocks genuinely proven reusable may later be evaluated as a monetizable starter bundle for beginner, solo, or AI-assisted coders. Prototype duct-tape and “200-mph-tape” hacks are explicitly excluded from reusable or productized blocks. | Issue Tool 3 Work Block general-thread discussion, 2026-09-02 | Future shared-component and productization evaluation |

### 2.1 BuddieBuilder concept architecture (`SKI-2026-007`)

BuddieBuilder remains one concept under permanent ID `SKI-2026-007`; the clarified learning-game ecosystem is an expansion of that concept, not a child or competing idea.

- **Core role:** BuddieBuilder is the character creator/forge. The completed buddy becomes the player's reusable character across a shared offline learning-game shell and its modules/levels.
- **Shared profile:** Preserve the buddy's selected parts, body/hair colors, name, and only those preferences later shown to be useful and justified. Modules consume the shared profile rather than requiring a new character in each game.
- **Animation vocabulary:** Existing jump, wave, dance, spin, laugh, sleep, excited, and similar states become character feedback and gameplay actions. They are not, by themselves, the post-build game destination.
- **First content direction:** Begin conceptually with Halloween/monster content matching Bjorn's current interests: zombie, skeleton, mummy, vampire, witch, and monster parts and themes.
- **Possible learning modules:** Counting/hopscotch, letters, shapes, colors, matching, memory, sorting, and other age-appropriate modules may function as levels within the same ecosystem.
- **Owner UX corrections:** Preserve progression by category while replacing blind/list selection with live visual fitting on the buddy. Present visible parts playfully through a clothesline, bowl, bin, or similarly understandable device; allow immediate swapping without backtracking. Keep color selection primarily for body and hair; other parts should generally arrive as coherent, naturally/cartoon-colored illustrations.
- **Asset boundary:** Current part artwork is prototype-quality evidence of the system, not protected final art. A coherent replacement library may be evaluated later without treating the existing shapes as final assets.
- **Proving and commercialization boundary:** The family-first version is offline, no-subscription, and the proving ground. Only after its shell, saving, controls, and learning modules are proven may a separate clean clone/adaptation be evaluated for commercial use.
- **Authority boundary:** This clarification authorizes no recovery work, planning block, implementation, code change, deployment, publishing, commerce, subscription, account/cloud service, spending, or external action.

### 2.2 BuddieBuilder recovered execution status (2026-09-08)

Existing SKI-2026-007 remains the sole identity. The owner authorized recovery and a bounded supported next slice, then issued emergency preservation/closeout only. No new product master or competing registry was created. Section 2.1's original no-work authority line describes the September 2 clarification, not the later explicit owner block.

Verified repository: `BuddieBuilder`, origin `https://github.com/mytonite86-coder/BuddieBuilder.git`, branch `feature/buddiebuilder-child-visuals`, pre-closeout HEAD `6f7c952638e2c6ae252aa94e8a1304ea656edd35`. Hybrid fitting and Monster Part Shelf were already completed; old no-drag/drop wording is superseded. Offline manifest/cache/readiness/icons and removal of the external font were implemented before closeout. Build/typecheck passed; lint has only the existing hidden ColorWheel warning. Browser cache reload/build path passed with local preview server stopped; physical iPad/Android Home Screen acceptance remains unverified. No saves/profile, scenes/goals, learning modules, commerce, account/cloud system or final-art pack was added.

Recovered plan and detailed distinctions are durable supporting files in `BuddieBuilder/docs/`. Family-first offline/no-subscription and friendly Halloween-first direction remain controlling; saved buddy shelf is the proposed first later engagement extension, and the first learning module remains undecided. Exact next step: bounded Offline / Home Screen Device Acceptance; no further feature development under preservation. Historical build and interaction evidence must not be repeated without cause. Source and scoped canonical snapshots are to be committed/pushed under the emergency authorization; Git and the final closeout receipt establish the actual outcome.

## 3. Status vocabulary

- `Captured`: registered but not yet evaluated.
- `Parked`: preserved for later and outside active workload.
- `Researching`: bounded discovery is authorized; implementation is not.
- `Candidate`: evaluated and eligible for owner prioritization.
- `Planned`: accepted into a roadmap but not yet implemented.
- `Graduated`: transferred into an authoritative product, campaign, brand, or operations record.
- `Shelved`: deliberately inactive but retained.
- `Merged`: absorbed into another registered idea; destination required.
- `Rejected`: deliberately declined with the reason retained.

Modifiers such as `funding-gated`, `dependency-gated`, or `evidence-gated` may be added without changing the base status.

## 4. Capture and synchronization protocol

Before a thread calls an idea lost, new, numbered, planned, or ready to build:

1. Read this master and cite its complete revision ID.
2. Search by idea ID, name, aliases, and summary.
3. If the idea exists, update that row instead of creating a duplicate.
4. If it is genuinely new, assign the next unused idea ID and append a row.
5. Record the source thread/date without copying sensitive or unnecessary conversation content.
6. Keep `Active workload` set to `No` unless the owner explicitly authorizes a bounded research or planning block.
7. When work begins, reconcile the destination operational master and portfolio master before issuing implementation instructions.

Standing capture authorization does not bypass deduplication, stable-ID, source, lifecycle, or boundary checks above. It authorizes the documentation write only; the captured idea remains outside active workload unless Kreepy separately authorizes the applicable next lifecycle step.

Every idea-focused work-block report must state the Ideas Master revision read, revision written if changed, IDs affected, status changes, destination records affected, and confirmation that no unapproved implementation or external action occurred.

### 4.1 Analytics Updates Thread bridge

The ChatGPT task titled **“Analytics Updates Thread”** retains its operational purpose: marketing execution, channel observations, campaign analytics, and performance updates. It is also an approved discovery source for marketing techniques and S&K webpage/storefront ideas.

- Analytics and campaign evidence stays in the Analytics Updates Thread and the applicable marketing/SignalDrift authority.
- A durable new idea born there must also be registered here; the thread must not remain its only copy.
- The Ideas Master stores identity, lifecycle status, summary, aliases, and destination.
- The originating thread may retain discussion, creative detail, analytics context, and evidence.
- Registering an idea here does not convert it into an active campaign or webpage build.
- Before any S&K webpage work block uses one of these ideas, read this master, the current portfolio master, and the applicable marketing/SignalDrift authority.

Current bridged entries from that thread are `SKI-2026-003` and `SKI-2026-004`.

## 5. Current idea workload

No idea in this registry is authorized as an active implementation work block. Eleven entries are preserved, including Garden Spread's graduated history row; ten remain outside dedicated product authority. Entries still marked as requiring recovery need scoped evidence review before planning or implementation status is assigned.

## 6. Revision log

| Revision | Date | Change |
| --- | --- | --- |
| `SKALD-KREEPY-IDEAS-MASTER-2026-09-08.1` | 2026-09-08 | Recovered SKI-2026-007 in place; reconciled accepted tactile/visual work and preserved offline foundation, verification limits, future saves/profile/modules and owner emergency stop. No new idea/master, unrelated product change or production promotion. |
| `SKALD-KREEPY-IDEAS-MASTER-2026-09-02.2` | 2026-09-02 | Clarified existing `SKI-2026-007`, BuddieBuilder, in place as the character forge and shared-profile foundation for a reusable offline learning-game ecosystem. Captured Halloween/monster-first thematic direction, possible learning modules, animation reuse as gameplay/feedback vocabulary, owner UX corrections, prototype-art status, family-first proving boundary, and separately gated future commercial clone/adaptation. No child idea was required; status remains captured and outside active workload. Documentation only; no recovery, planning, implementation, code, deployment, publishing, spending, production, commerce, subscription, customer, entitlement, or external state changed. |
| `SKALD-KREEPY-IDEAS-MASTER-2026-09-02.1` | 2026-09-02 | Added the standing rule that Skald's explicit recommendation to document, capture, or park a concept authorizes immediate Ideas Master reconciliation unless Kreepy explicitly declines. Registered `SKI-2026-010`, S2 Unified Capability Architecture, and `SKI-2026-011`, S&K Reusable Master Blocks / Beginner Coder Bundle, as parked concepts with maturity/proof gates, explicit non-implementation boundaries, and prototype-hack exclusion. Documentation only; no research, planning, implementation, publishing, spending, production, commerce, entitlement, customer, or external state changed. |
| `SKALD-KREEPY-IDEAS-MASTER-2026-08-29.1` | 2026-08-29 | Graduated existing `SKI-2026-008` into Garden Spread's private legacy-product authority; retained ID and aliases without duplication or implementation authorization. |
| `SKALD-KREEPY-IDEAS-MASTER-2026-08-26.1` | 2026-08-26 | Registered `SKI-2026-009`, AI Context GPS / Context Positioning System, as a cross-project infrastructure concept with source and functional boundary preserved. No implementation or external state changed. |
| `SKALD-KREEPY-IDEAS-MASTER-2026-08-24.3` | 2026-08-24 | Defined the bridge for the Analytics Updates Thread: it remains the analytics/marketing operations task while durable marketing and S&K webpage ideas are copied into this master. Clarified the future marketing/page destinations for the animated shorts and living mural concepts. No campaign, webpage build, publishing, implementation, spending, production, customer, commerce, entitlement, or external state changed. |
| `SKALD-KREEPY-IDEAS-MASTER-2026-08-24.2` | 2026-08-24 | Began the cross-thread/project recovery sweep. Recovered Pocket Familiar/3D Live Dragon Digi-Pet as one deduplicated concept, plus Money Trail, Buddie Builder, and Garden Spread as entries requiring state recovery. Recorded that project and task titles are discovery evidence, not automatic build authority. No implementation, publishing, spending, production, customer, commerce, entitlement, or external state changed. |
| `SKALD-KREEPY-IDEAS-MASTER-2026-08-24.1` | 2026-08-24 | Created the permanent idea registry and seeded Clipboard, Dragon Part Numbers, S&K Animated Sitcom Shorts, and Living Mural / Product Graduation Storefront. No implementation, publishing, spending, production, customer, commerce, entitlement, or external state changed. |
