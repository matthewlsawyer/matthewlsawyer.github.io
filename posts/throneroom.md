---
layout: post_layout.md
title: Throneroom
date: 2026-07-18T20:00:00
published: Jul 18, 2026
credit: 'Tarot images from the <a class="hover:text-stone-300" href="https://commons.wikimedia.org/wiki/Category:Rider-Waite_tarot_deck">Rider-Waite tarot deck</a> on Wikimedia Commons.<br />Site source: <a class="hover:text-stone-300" href="https://github.com/matthewlsawyer/matthewlsawyer.github.io">matthewlsawyer.github.io</a>.'
---

_Chat is a distant memory._

Useful work with coding agents happens in sessions. With a click, another session opens and the context is gone, half-remembered, or restated differently. External ideas get summarized once and vanish. Engineering style gets re-litigated across repos.

Throneroom is personal infrastructure for that: a small cortex next to real projects that compounds knowledge and judgement over time. I'm writing about the thinking and the design, not publishing the repo. The point is the shape, not a product pitch.

The naming is light fantasy on purpose. The nouns below are not flavor; they are Concepts that skills and rules can name directly.

## The Throneroom

<a href="/assets/tarot/11-Justice.png">
  <img
    class="my-4 w-28 sm:w-32 h-auto ring-1 ring-stone-500/60 ring-offset-2 ring-offset-stone-800"
    src="/assets/tarot/11-Justice.png"
    alt="Justice"
    width="300"
    height="527"
  />
</a>

_The theatre of governance._

A workspace that improves decisions over time: immutable history, reproducible interpretations, evidence over pretended truth.

Why: you need somewhere that is neither a random notes folder nor a product backlog. Throneroom provides the cortex: shared memory and constraints, not the apps you ship.

```
Throneroom
├─ You (The Throne) -> owns judgement and endorsement
└─ Agent (The Hand) -> interacts with:
   ├─ Knowledge
   │  ├─ `_raw` -> raw data files (gitignored)
   │  ├─ Canon -> durable records
   │  └─ XP -> lived lessons
   ├─ Board -> advisor perspectives
   ├─ Rules -> always-on constraints
   ├─ Skills -> defined workflows
   ├─ Projects
   │  ├─ site/ (external repo: matthewlsawyer.github.io)
   │  └─ Other local or externally hosted (gitignored) repos
   └─ Scripts -> toolbelt
```

## The Throne

<a href="/assets/tarot/04-TheEmperor.png">
  <img
    class="my-4 w-28 sm:w-32 h-auto ring-1 ring-stone-500/60 ring-offset-2 ring-offset-stone-800"
    src="/assets/tarot/04-TheEmperor.png"
    alt="The Emperor"
    width="300"
    height="527"
  />
</a>

_Judgement is not a feature of the model._

You. The King, the Crown. You own judgement. You approve governance changes and durable knowledge. Agents propose; you decide what becomes lasting.

Why: without an explicit owner of judgement, the agent quietly becomes the authority.

## The Hand

<a href="/assets/tarot/01-TheMagician.png">
  <img
    class="my-4 w-28 sm:w-32 h-auto ring-1 ring-stone-500/60 ring-offset-2 ring-offset-stone-800"
    src="/assets/tarot/01-TheMagician.png"
    alt="The Magician"
    width="300"
    height="527"
  />
</a>

_Agentic magic._

The Hand of the King. The session agent. One voice, in-session. Executes, searches, proposes. Follows rules and executes skills. Leaves judgement to you.

Why: "the AI" is vague. Hand is a role with duties -> preserve intent, leave the system more coherent, do not invent durable truth without endorsement.

Defined in `AGENTS.md` file.

## Knowledge

<a href="/assets/tarot/Cups01.png">
  <img
    class="my-4 w-28 sm:w-32 h-auto ring-1 ring-stone-500/60 ring-offset-2 ring-offset-stone-800"
    src="/assets/tarot/Cups01.png"
    alt="Ace of Cups"
    width="300"
    height="527"
  />
</a>

_A source of provenance._

What Throneroom draws on to reason. A knowledge graph in two layers:

| Layer | Job |
| --- | --- |
| Canon | Durable records distilled from external sources |
| XP | Lived lessons locked from experience |

Why: chat is not a library. Canon stores distilled ideas from the outside world; XP stores what you learned by doing. Search the record before reinventing.

Provenance matters.

## The Board

<a href="/assets/tarot/05-TheHierophant.png">
  <img
    class="my-4 w-28 sm:w-32 h-auto ring-1 ring-stone-500/60 ring-offset-2 ring-offset-stone-800"
    src="/assets/tarot/05-TheHierophant.png"
    alt="The Hierophant"
    width="300"
    height="527"
  />
</a>

_Schools of thought as lenses._

Advisor personas, captured philosophies, or schools of thought. Convened when you want counsel through different lenses, not autocomplete.

Why: a single model voice collapses viewpoints. Named advisors make disagreement legible and keep "what would X say?" from being improvisation.

Tension is the feature.

## Rules

<a href="/assets/tarot/08-Strength.png">
  <img
    class="my-4 w-28 sm:w-32 h-auto ring-1 ring-stone-500/60 ring-offset-2 ring-offset-stone-800"
    src="/assets/tarot/08-Strength.png"
    alt="Strength"
    width="300"
    height="527"
  />
</a>

_Disciplined power._

Always-on constraints. Small set: simplicity, authority (one home per concept), markdown/commit hygiene, and the Axiom. Shared across projects via install into the agent harness.

Why: the boring fights (formatting, commit shape, DRY/KISS) should not be reinvented per repo. Rules are the floor the agent stands on.

Agents need direction.

### The Axiom

<a href="/assets/tarot/14-Temperance.png">
  <img
    class="my-4 w-28 sm:w-32 h-auto ring-1 ring-stone-500/60 ring-offset-2 ring-offset-stone-800"
    src="/assets/tarot/14-Temperance.png"
    alt="Temperance"
    width="300"
    height="527"
  />
</a>

_Preserve the system._

The foundational Throneroom rule. Skills instruct; rules constrain; knowledge preserves. Terse. One job. Prefer delete over lecture.

Why: everything else drifts unless something sits underneath as non-negotiable Throneroom philosophy.

Always serve the Throne.

## Skills

<a href="/assets/tarot/07-TheChariot.png">
  <img
    class="my-4 w-28 sm:w-32 h-auto ring-1 ring-stone-500/60 ring-offset-2 ring-offset-stone-800"
    src="/assets/tarot/07-TheChariot.png"
    alt="The Chariot"
    width="300"
    height="527"
  />
</a>

_Execution arm._

Invoked workflows & business logic for the session:

- `throne-ingest` -> canonicalize an external source into the knowledge graph.
- `throne-ask` -> consult the knowledge graph and apply Board lenses.
- `throne-audit` -> measure internal Throneroom fitness againt the Axiom.
- `throne-xp` -> capture lessons into experiental knowledge.

One skill at a time; no skill calls another.

Why: freeform prompting does not encode a closed procedure. Skills are the API: when invoked, the shape of work is known.

Governance needs actionable APIs.

## Projects

Where shipping happens. Each project keeps local layout and boundaries. Throneroom is cortex brought into that work, not landlord of the backlog.

Why: governance that owns every project's shipping decisions taxes iteration. Shared rules and memory should travel; product ownership should not.

Governance across repos.

## Scripts

Manual operators (install rules/skills into the harness, etc.). Run by the you or the agent when operational work calls for it.

Why: not everything is a skill. Some things are just tools.

---

## What it solves

1. **Session amnesia** -> lessons and records outlive the chat.
2. **Storing and distilling ideas** -> external material becomes Canon; session experience becomes XP.
3. **Shared rules across projects** -> one place for preference; install promotes it into Cursor or any agentic IDE/CLI.
4. **Boundary clarity** -> Throneroom provides shared cortex, not landlord.

Portable by design. My harness today is Cursor; the Concepts assume an agentic environment, not a vendor.

## What "working" looks like so far

The skills run. Knowledge grows. Distilling a lesson from a session into XP is clean. Searching Knowledge and convening the Board when counsel is needed feels like a real loop, not ceremony.

That is early proof: operational fitness, not a case study with a before/after metric.

## Gaps and things to watch

Knowledge grows, but not everything that lands there is equally official. Stray or half-baked thoughts can sit next to carefully crafted ideas; and the graph does not yet enforce weight. Retrieval leans on the agent to discriminate.

I don't have a real fix; not a pain point yet. Candidates if it becomes one:

- Ruthlessly thin ledgers, or
- Explicit weight -> a skill that assigns weight (with guidance)

For now the rule stays: complexity earn its place, especially for internal machinery.

---

Welcome to Throneroom. 👑
