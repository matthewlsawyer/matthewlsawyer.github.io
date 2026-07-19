---
layout: post_layout.md
title: Throneroom
date: 2026-07-18T20:00:00
published: Jul 18, 2026
---

_Chat is a distant memory._

Useful work with coding agents happens in sessions. With a click, another session opens and the context is gone, half-remembered, or restated differently. External ideas get summarized once and vanish. Engineering style gets re-litigated across repos.

Throneroom is personal infrastructure for that: a small cortex next to real projects that compounds knowledge and judgement over time. I'm writing about the thinking and the design, not publishing the repo. The point is the shape, not a product pitch.

The naming is light fantasy on purpose. The nouns below are not flavor; they are Concepts that skills and rules can name directly.

## The Throne

You. The King, the Crown. Owns judgement. Approves governance changes and durable knowledge. Agents propose; you decide what becomes lasting.

Why: without an explicit owner of judgement, the agent quietly becomes the authority.

Naming the Throne keeps endorsement and taste _human_.

## The Hand

The Hand of the King. The session agent. One voice, in-session. Executes, searches, proposes. Follows Rules and Skills. Leaves judgement to the Throne.

Why: "the AI" is vague. Hand is a role with duties -> preserve intent, leave the system more coherent, do not invent durable truth without endorsement.

## The Court

The seat of judgement. Exists to improve decisions over time: immutable history, reproducible interpretations, evidence over pretended truth.

Why: you need a place that is neither a random notes folder nor a product backlog. Court is the cortex: shared memory and constraints, not the apps you ship.

## Knowledge

What the Court draws on to reason. A knowledge graph in two layers:

| Layer | Job |
| --- | --- |
| Canon | Durable records distilled from external sources |
| XP | Lived lessons locked from experience |

Why: chat is not a library. Canon stores distilled ideas from the outside world; XP stores what you learned by doing. Search the record before reinventing.

Provenance matters.

## The Board

Advisor personas, captured philosophies, or schools of thought. Convened when you want counsel through different lenses, not autocomplete.

Why: a single model voice collapses viewpoints. Named advisors make disagreement legible and keep "what would X say?" from being improvisation.

Tension is the feature.

## Rules

Always-on constraints. Small set: simplicity, authority (one home per concept), markdown/commit hygiene, and the Court Axiom. Shared across projects via install into the agent harness.

Why: the boring fights (formatting, commit shape, DRY/KISS) should not be reinvented per repo. Rules are the floor the Hand stands on.

Agents need direction.

## The Axiom

The foundational Court Rule. Skills instruct; Rules constrain; Knowledge preserves. Terse. One job. Prefer delete over lecture.

Why: everything else drifts unless something sits underneath as non-negotiable Court philosophy.

Always serve the Throne.

## Skills

Invoked workflows - business logic for the session:

- `throne-ingest` -> source into Canon
- `throne-ask` -> consult Knowledge and the Board
- `throne-audit` -> measure Court fit
- `throne-xp` -> capture lessons into XP

One skill at a time; no skill calls another.

Why: freeform prompting does not encode a closed procedure. Skills are the API: when you say the name, the shape of work is known.

Daily driver needs actionable APIs.

## Projects

Where shipping happens. Each project keeps local layout and safety. Court is cortex brought into that work - not landlord of the backlog.

Why: governance that owns every project's shipping decisions taxes iteration. Shared Rules and memory should travel; product ownership should not.

Governance across repos.

## Scripts

Manual operators (install Rules/Skills into the harness, etc.). Run by the Throne or the Hand when operational work calls for it.

Why: not everything is a Skill. Some things are just tools.

---

## What it solves

1. **Session amnesia** - lessons and records outlive the chat.
2. **Storing and distilling ideas** - external material becomes Canon; session experience becomes XP.
3. **Shared rules across projects** - one place for house taste; install promotes it into Cursor or any agentic IDE/CLI.
4. **Boundary clarity** - Court is cortex, not landlord.

Portable by design. My harness today is Cursor; the Concepts assume an agentic environment, not a vendor.

## What "working" looks like so far

The skills run. Knowledge grows. Distilling a lesson from a session into XP is clean. Asking Knowledge and convening the Board when counsel is needed feels like a real loop, not ceremony.

That is early proof: operational fitness, not a case study with a before/after metric.

## Gaps and things to watch

Knowledge grows, but not everything that lands there is equally official. Stray or half-baked thoughts can sit next to careful ideas, and the graph does not yet enforce weight. Retrieval leans on the agent to discriminate.

I do not have a satisfying fix; not a pain point yet. Candidates if it becomes one:

- Ruthlessly thin ledgers, or
- Explicit weight -> maybe a skill that assigns weight carefully with guidance

For now the rule stays: complexity must earn its place, especially for machinery meant to police the library.

---

Welcome to Throneroom. 👑
