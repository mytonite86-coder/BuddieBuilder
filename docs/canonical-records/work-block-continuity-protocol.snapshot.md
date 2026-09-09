# Permanent Work-Block Continuity Protocol

**Record ID:** `SKP-WORK-CONTINUITY-PROTOCOL`  
**Revision:** `SKP-WORK-CONTINUITY-2026-09-01.1`  
**Effective:** 2026-09-01, America/Denver  
**Authority:** `operations/skald-kreepy-master.md`  
**Applies to:** Every Skald and Kreepy Productions product, shared system and portfolio Work block

This protocol provides broad operational awareness without broad execution authority. It governs knowledge bootstrap, environment availability, cross-work discoveries and continuation records. Product-specific execution protocols remain additive; when they conflict, stop and reconcile against the Portfolio Master and explicit owner authorization.

## 0. Canonical Workspace and Environment Availability Gate

The canonical local App Operations workspace is identified by `operations/workspace-reference-manifest.md`. A fresh thread is not execution-ready merely because it received correct paths or authority references.

Before reconnaissance, implementation, testing, installation, repository mutation or deployment:

1. Locate/open the canonical workspace and read the current workspace manifest.
2. Verify required authority: Portfolio Master, affected Product Master(s), this protocol, current Work Block, latest handoff when continuing, and every shared authority explicitly required by the block.
3. For implementation work, verify the required repository exists, is a valid Git working tree, has the expected repository/remote identity, has an identifiable current/base branch, and contains required source files.
4. Verify required fixtures/evidence exist. Identify absent optional fixtures explicitly; never invent required evidence.
5. Verify referenced shared billing, entitlement, backend, deployment, SignalDrift or other authority records are accessible before relying on them.

Fresh-thread startup order:

**Thread start → locate canonical workspace → run Environment Availability Gate → read Portfolio Master → affected Product Master(s) → relevant shared authorities → current Work Block → latest handoff → reconcile required repository → execute.**

If any required resource is unavailable, **STOP BEFORE IMPLEMENTATION** and report the missing resource, expected path/project/repository identity, workspace currently visible, what must be attached/opened/synced/selected, and whether the block can safely continue after correction.

Do not create replacement repositories, duplicate Masters, new source directories or alternate project structures merely because the required workspace is absent. Only repositories required by the authorized task must be available. A newly discovered cross-project repository dependency requires identification and owner authorization before scope expands.

## 1. Session Bootstrap

After the Environment Availability Gate passes, every Work session uses a compact reference map and reads in this order:

1. **Portfolio Master** — portfolio authority, shared rules and cross-product relationships.
2. **Affected Product Master(s)** — the primary product and every product directly affected by the authorized block.
3. **Relevant shared-system authorities** — only those implicated by the block or encountered dependency. Examples include Product Registry, Production Baseline, Portfolio Map, payment/entitlement records, shared backend/webhook records, SignalDrift instrumentation status, Field Intelligence and product-specific execution protocols.
4. **Current Work Block** — authorized objective, scope, acceptance criteria and STOP conditions.
5. **Latest Session Handoff**, when continuing — completed/verified work, current state, exact next step, unresolved issues, cross-project discoveries and evidence that must not be repeated.

Every newly issued Work block must include a reference map identifying the exact authority paths and revisions relevant at issuance. The session must reread current revisions rather than trusting copied snapshots.

Authority order:

- The **Master** controls current truth.
- The **Work Block** controls current authorization.
- The **Session Handoff** controls continuation position.
- Conversation history is supporting evidence only and is not required for ordinary continuation after important knowledge is preserved.

Do not preload or reread unrelated project history. Follow the reference map and open additional shared authority only when the current work actually touches that dependency.

## 2. Cross-Work Discovery Rule

When execution reveals information affecting another project, product or shared system:

1. Identify the affected project/system.
2. Identify its authoritative record.
3. Classify the discovery:
   - **INFORMATIONAL ONLY**
   - **DOCUMENTATION CORRECTION**
   - **IMPLEMENTATION DEPENDENCY**
   - **AUTHORITY CONFLICT**
4. Continue only while the discovery remains inside the authorized scope.
5. If implementation would expand into another product/shared system, **STOP AND ASK FOR OWNER AUTHORIZATION**.
6. If documentation-only and the current block explicitly authorizes documentation closeout, record it in the proper authority. Otherwise preserve it in the Session Handoff for owner review.
7. If execution conflicts with authority, **STOP AND RECONCILE BEFORE CONTINUING**.

An unexpected dependency is not permission to fix it and does not automatically fail the block. Never silently turn a product-specific change into a shared-system change.

## 3. Session Handoff

Every completed, incomplete, blocked or owner-stopped Work session ends with this compact continuation record:

~~~text
SESSION HANDOFF

BLOCK:
[work-block ID]

STATUS:
ACTIVE / COMPLETE / BLOCKED / STOPPED FOR OWNER DECISION

COMPLETED:
- work completed during this session

VERIFIED:
- accepted tests/checks/evidence

CURRENT STATE:
- exact condition of the work at session end

EXACT NEXT STEP:
- one precise continuation point

CROSS-PROJECT DISCOVERIES:
- affected project/system
- affected authority
- classification
- action required

UNRESOLVED:
- blockers
- unanswered questions
- evidence still required

DO NOT REPEAT:
- tests already passed
- reconnaissance already completed
- settled decisions
- completed setup

FILES / COMMITS / EVIDENCE:
- exact relevant paths
- branches
- commits
- deployment evidence
- supporting records

NEXT SESSION START:
Read Portfolio Master
→ affected Product Master(s)
→ shared references identified by the Work Block
→ Current Work Block
→ latest Session Handoff
Then continue from EXACT NEXT STEP.
~~~

If a category has no entries, write `None`; do not omit the category. A COMPLETE handoff records that no continuation is authorized unless a new block says otherwise. A BLOCKED handoff states the exact condition needed to resume.

The handoff belongs with the Work block's durable operational records. It must not contain credentials, customer data, proprietary employer material or unnecessary conversation reproduction.

## 4. Mandatory Work-Block Inheritance

Every newly issued Work block must contain or explicitly inherit:

- Portfolio authority reference and current revision
- affected Product authority reference(s) and current revisions
- relevant shared-system reference map
- authorized objective
- scope and explicit exclusions
- acceptance criteria
- STOP conditions
- this Cross-Work Discovery Rule
- this Session Handoff requirement

The minimum inheritance statement is:

> This block inherits `operations/work-block-continuity-protocol.md`, current revision. Locate the canonical workspace through `operations/workspace-reference-manifest.md`; pass the Environment Availability Gate before execution; then follow the Session Bootstrap, Cross-Work Discovery Rule and Session Handoff requirements. This inheritance creates awareness of shared systems but grants no authority outside this block.

Product-specific protocols may add stricter environment, platform, safety, testing, promotion, privacy or production rules. They do not remove this continuity layer.

## 5. Transition Principle

Operational continuity follows:

**Conversation/discovery → important information recorded in authority → bounded Work Block → execution → Session Handoff → next session reads authority + block + handoff → continuation.**

A long conversation must never become mandatory operational memory. Once relevant knowledge is preserved, a fresh thread must be able to continue without reconstructing the old conversation.

## 6. Stop and Record Rules

- Passing acceptance criteria means record the result and stop.
- Development completion does not authorize promotion.
- Promotion completion does not authorize the next feature.
- Authority conflict means stop and reconcile.
- Scope expansion means stop and request owner authorization.
- Preserve prior verified evidence; do not repeat it unless later changes directly invalidate it.
