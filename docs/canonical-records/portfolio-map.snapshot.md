# Portfolio Map

## Current boundary

Portfolio authority: `operations/skald-kreepy-master.md`, revision `SKALD-KREEPY-MASTER-2026-09-02.2`.

MAB status authority: `operations/mab-master.md`, revision `MAB-MASTER-2026-09-01.2`. Product work-block summaries roll up from that record to this portfolio map; archived MAB reports are not current status sources.

Historical MAB block: [Practical editing foundation](work-blocks/2026-08-29-mab-editing-foundation.md), `MAB-WB-2026-08-29-EDITING-01`. Its accepted web scope was implemented, promoted and recorded in the MAB Master. It is supporting execution evidence, not authority to resume work. No next MAB feature/debugging block is authorized by that completion; S1.5 nest editing remains planned follow-on scope requiring a new bounded owner-authorized block.

SignalDrift status authority: `operations/signaldrift-master.md`, revision `SIGNALDRIFT-MASTER-2026-08-24.1`. SVG Micro Eco status authority: `operations/svg-micro-eco-master.md`, revision `SVG-MICRO-ECO-MASTER-2026-09-01.1`.

The active software portfolio contains three implemented systems. Garden Spread is a separately recovered legacy physical product, not a parked new concept or an operating application. Other concepts retain their Ideas Master lifecycle status.

The active shared system has been functionally verified and may contain real paid users. Papa Bear's lifetime cross-build promotional entitlement is a protected business rule. Operational work must preserve it.

## Canonical public brand

Customer-facing company branding across the portfolio is **Skald and Kreepy Productions**. Existing internal IDs, entitlement keys, database names, package identifiers, webhook metadata, and URLs should remain stable unless a separate migration is deliberately approved.

| System | Role | Lifecycle | Relationship |
| --- | --- | --- | --- |
| SignalDrift | Portfolio marketing, attribution, conversion learning, and campaign operations | Active build; owner confirms SignalDrift recorded the sole relevant MAB purchase and its sole refund; PathSeal Campaign 01 was separately verified through checkout initiation | Measures and improves how every product reaches and converts users |
| SVG Micro Eco | Review-first SVG cleanup tools for CNC workflows | PathSeal commercially live; Duplicate Line Remover finished and publicly deployed with commercial activation disabled | Five-tool family integrated with the shared backend and SignalDrift |
| M.A.B. S1 / M.A.B. Path Editor | Series 1 of Mobile AI Blueprinting; standalone flat CNC/G-code toolpath editor | Active build; production source and deployment verified | Imports, displays, edits, previews, copies, and exports supported CNC/toolpath files; supplies PathSeal's shared backend |

## Planned product families

### SVG Micro Eco

- PathSeal is the first implemented tool.
- Duplicate Line Remover is the second completed engine and is publicly deployed for its approved exact-line scope; selection, checkout, billing, and entitlement activation remain disabled.
- Stray Node Cleaner now has an isolated analysis-only foundation; repair, UI, deployment and activation remain gated. Overlapping Shape Repair and Curve Repair follow in locked order.
- After all five tools mature, they combine into the full SVG Repair Engine.
- Planned tools do not create monitoring, deployment, or maintenance obligations until work begins.
- Shared brand, authentication, entitlement, billing, and SignalDrift instrumentation should be designed once and reused across all five tools.
- The reusable product chassis and shared SVG core must be stabilized around PathSeal before Tool #2; working PathSeal behavior must not be rewritten merely for architectural neatness.

### MAB

- MAB S1 is the implemented foundation.
- Owner-confirmed lineage: the original Emergent-era Mobile AI Blueprinting flow accepted a text description and generated a 2D blueprint and toolpath; S1 is the extracted flat-toolpath product surface.
- S1.25 improves interaction and machine-motion representation and carries the current $9.99 monthly new-customer offer without converting, repricing, or revoking protected historical access. The prior $7.99 offer remains historical evidence; S1.5 adds nesting; S1.75 completes the approved S1 upgrade line and later corporate behavior.
- S2 begins only after the operational gates and returns to the full Mobile AI Blueprinting vision: plain 3D CAD first, then AI-assisted drafting/design, materials, engineering/stress analysis, and engineering-aware AI.
- Each upgrade should preserve measurable compatibility with saved blueprints, authentication, payments, and supported devices.
- Upgrade stages should not be represented as live products until their code or dependencies exist.

### Recovered physical product

Garden Spread (aliases Belly Dump and Garden Spreader) is controlled by `operations/garden-spread-master.md`, revision `GARDEN-SPREAD-MASTER-2026-08-29.1`. The owner confirms prototype, sale/customer-validation and manufacturer-interest history. The physical prototype is presumed lost; other evidence is preserved privately. Patent/IP protection is the owner-set commercialization/disclosure gate. Origin ID `SKI-2026-008` is retained as a graduated history row. No new build block, disclosure, purchase or physical-product entitlement contract is authorized.

### Parked independent concepts

- Clipboard (`SKI-2026-001`)
- Dragon Part Numbers (`SKI-2026-002`)
- S&K Animated Sitcom Shorts (`SKI-2026-003`)
- Living Mural / Product Graduation Storefront (`SKI-2026-004`)
- Pocket Familiar / 3D Live Dragon Digi-Pet (`SKI-2026-005`)
- Money Trail (`SKI-2026-006`)
- Buddie Builder (`SKI-2026-007`) — recovered family-first offline character forge; tactile/Monster Part Shelf accepted at 6f7c952 and offline foundation preserved. Physical Home Screen acceptance unverified; saves/profile/modules future; emergency preservation stop. Current status: Ideas Master section 2.2, `SKALD-KREEPY-IDEAS-MASTER-2026-09-08.1`. Commercial adaptation remains separately gated.
- AI Context GPS / Context Positioning System (`SKI-2026-009`)
- S2 Unified Capability Architecture (`SKI-2026-010`)
- S&K Reusable Master Blocks / Beginner Coder Bundle (`SKI-2026-011`)
- Other unimplemented concepts must be registered in `operations/ideas/ideas-master.md` before they are treated as safely captured.

These remain in the idea portfolio and outside App Operations. Their status and permanent inventory are controlled by `operations/ideas/ideas-master.md`.

## Operating model

```text
SignalDrift
  observes acquisition, use, checkout, and conversion across the portfolio
          |
          +-- SVG Micro Eco
          |     +-- PathSeal (commercially active: tool 1 of 5)
          |     +-- Duplicate Line Remover (finished/public: tool 2; commercial activation gated)
          |     +-- Tools 3–5 (planned)
          |
          +-- MAB
                +-- MAB S1 (active foundation)
                +-- Upgrades 1–3 (planned)
```

## Architecture implication

SignalDrift is not merely another product beside the others. It is a portfolio capability that should receive events from every active product while remaining isolated enough that a SignalDrift outage never blocks a customer's primary workflow.

Current evidence does **not** verify a reachable MAB-native production analytics emitter/caller. The existing PathSeal relay hosted by the shared MAB backend does not prove MAB-native event emission. MAB first-touch attribution and a native event contract remain unresolved; do not claim MAB analytics complete until separately verified. This statement authorizes no instrumentation work.

Shared account, payment, and entitlement services can reduce duplicated work across the SVG tools and MAB products, but they also create a common failure domain. Static availability, core product function, identity, billing, entitlement, and analytics must therefore be monitored separately.

## Lifecycle rule

A concept enters App Operations when at least one of these becomes true:

1. A repository or executable prototype exists.
2. It depends on an active shared service.
3. It accepts users, data, or payments.
4. It creates a deployment, credential, maintenance, or support obligation.

Before that point, it stays in product planning rather than operational monitoring.

## Funding boundary

Production development is free-first. Owner-funded purchases, subscriptions,
API credits, or payment-method entry are not build gates. Live payment completion
is verified from organic customer activity unless a provider offers a genuinely
free test-mode path. See
`operations/decisions/2026-08-21-free-first-production-testing.md`.
