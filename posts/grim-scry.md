---
layout: post_layout.md
title: Scry
date: 2026-07-21T12:00:00
published: Jul 21, 2026
credit: 'Tarot images from the <a class="hover:text-stone-300" href="https://commons.wikimedia.org/wiki/Category:Rider-Waite_tarot_deck">Rider-Waite tarot deck</a> on Wikimedia Commons.<br />Site source: <a class="hover:text-stone-300" href="https://github.com/matthewlsawyer/matthewlsawyer.github.io">matthewlsawyer.github.io</a>.'
---

_The lantern before the map._

You open a repo cold. The agent lists files, reads random READMEs, chases imports, and ten minutes later you have a paragraph summary that will not survive the next session. What you wanted was shape: what matters, how it is organized, what you run first.

**Scry** is the first spell in [Grimoire](https://github.com/matthewlsawyer/grimoire): a small spellbook of composable agent skills. `/grim-scry` distills a repository into a canonical model, then projects it through three ASCII lenses. Knowledge first -> viewport second. The YAML is the source of truth; the trees are the readout.

## The Hermit

<a href="/assets/tarot/09-TheHermit.png">
  <img
    class="my-4 w-28 sm:w-32 h-auto ring-1 ring-stone-500/60 ring-offset-2 ring-offset-stone-800"
    src="/assets/tarot/09-TheHermit.png"
    alt="The Hermit"
    width="300"
    height="527"
  />
</a>

_Think clarity over depth of knowledge._

The Hermit carries a lantern, not a floodlight. Scry works the same way: two bounded passes, then stop. A shallow directory reveal. Doc seeds only on what was already revealed. No recursive README hunt across the whole tree. No pretending to understand code it never opened.

The spell is for orientation, not omniscience. That restraint is the point.

## What the spell does

Given a target path, grim-scry:

1. **Dir reveal** - `find` to depth `N` (default 3). Honor `.gitignore`. Skip plumbing, vendor, generated paths.
2. **Doc seed extract** - README, `AGENTS.md`, rules, index files on revealed dirs only. Set `purpose` when docs named it; do not invent.
3. **Distill** - cap the model to a salient set. Omit rather than verify.
4. **Write** `model.yaml` to `<agent-workspace>/.grimoire/scry/<slug>/`.
5. **Emit** three lenses, a summary, observations, and a link to the artifact.

Same slug, fresh run: delete the old scry dir and write anew. Stale viewports are worse than missing ones.

## Spellbook philosophy

Grimoire treats agent skills like Unix tools: small, single-responsibility, composable.

| Axiom | What it means for Scry |
| --- | --- |
| At-a-glance is a feature | Trees, not essays |
| Dead-simple beats clever | Two discovery passes, closed schema |
| Knowledge first -> viewport second | `model.yaml` before ASCII |
| Think `grim-scry && grim-adr` | Scry orients; later spells act on the model |

Scry reveals shape so the next spell starts from something durable.

## Three lenses, one model

Lenses are filters over the same graph, not three separate inventories.

| Lens | Question | Admits |
| --- | --- | --- |
| Directory | Where does things live? | `directory` + `contains` |
| Conceptual | What ideas does the tree implement? | `concept`, linked dirs + `implements` / `uses` |
| Workflow | What do you run? | `script`, `entrypoint`, `instruction` + invocation edges |

One entity can appear in multiple lenses when its edges qualify. A `cmd/tailscale/` directory implements a concept in one view and hosts an entrypoint in another.

### Directory

Filesystem structure with purpose annotations only when documentation earned them:

```text
tailscale/ ◀─ Open-source Tailscale client; tailscaled daemon and tailscale CLI
├─ cmd/ ◀─ CLI binaries and tools
│  ├─ tailscale/
│  ├─ tailscaled/
│  ├─ derper/
│  └─ k8s-operator/
├─ derp/ ◀─ DERP packet relay client and server code
├─ feature/ ◀─ Modular feature system; conditionally linkable packages
├─ tsnet/ ◀─ Embed a Tailscale node in a Go program
└─ gokrazy/ ◀─ Gokrazy appliance image (pre-alpha)
```

From a real scry of [tailscale/tailscale](https://github.com/tailscale/tailscale). Depth 3 still omits dozens of Go packages; the viewport shows what the distill step kept.

### Conceptual

Ideas first, implementers (and source dirs) hung underneath:

```text
tailscale
├─ tailscaled ◀─ Background daemon managing the virtual network interface
├─ tailscale CLI ◀─ Command-line tool for configuring and using Tailscale
│  └─▶ tailscaled
├─ DERP ◀─ Packet relay for disco and encrypted WireGuard when UDP or NAT traversal fails
│  ├─ derp/
│  └─ cmd/derper/
├─ tsnet ◀─ Self-contained embedded Tailscale node in a Go process
│  └─ tsnet/
└─ modular features ◀─ Conditionally linkable feature packages via build tags and hooks
   └─ feature/
```

This is the lens you reach for when onboarding: not "what folders exist," but "what subsystems does this repo think it has?"

### Workflow

Commands and entrypoints, grouped by what they are for. The viewport contract's north-star example shows the intended density - named flows, invocation arrows, terse notes:

```text
next.js
├─ CLI
│  ├─▶ next dev
│  ├─▶ next start
│  └─▶ next build
├─ Local development
│  ├─▶ pnpm --filter=next dev ◀─ watch rebuild while iterating
│  └─▶ pnpm --filter=next build ◀─ core package only
├─ Testing ◀─ mode- and bundler-specific
│  ├─▶ pnpm test-dev-turbo ◀─ dev mode, Turbopack (default)
│  └─▶ pnpm test-unit ◀─ fast, no browser
└─ Specialized instructions
   └─▶ AGENTS.md ◀─ primary instruction
```

A live tailscale scry surfaces Makefile and README build paths the same way:

```text
tailscale
├─ Build
│  ├─▶ go install tailscale.com/cmd/tailscale{,d}
│  ├─▶ ./build_dist.sh tailscale.com/cmd/tailscale
│  └─▶ ./build_dist.sh tailscale.com/cmd/tailscaled
├─ Quality
│  ├─▶ make check
│  └─▶ make vet
└─ Kubernetes operator
   └─▶ make kube-generate-all
      └─▶ cmd/k8s-operator/
```

Workflow is where "how do I work here?" becomes answerable without spelunking.

## What you get back

Chat output is the briefing. The artifact is the record:

```text
<agent-workspace>/.grimoire/scry/<slug>/
└─ model.yaml
```

`slug` is the target path relative to the workspace (`projects/tailscale` -> `projects-tailscale`). Entities, relationships, evidence, and short observations live in a closed schema - directories, concepts, scripts, entrypoints, and five edge types (`contains`, `implements`, `invokes`, `uses`, `depends_on`).

ASCII is the only shipped viewport today. Mermaid and friends are planned renderers over the same file. The model does not care how you draw it.

## Why it is useful

- **Durable orientation** - a later session can read `.grimoire/scry/` instead of re-discovering layout.
- **Bounded cost** - two passes cap token burn on large monorepos.
- **Honest gaps** - observations call out what the crawl did not prove (half-migrated `feature/`, 50+ `cmd/` binaries, WIP `gokrazy/`).
- **Composable spells** - scry orients; trace, weave, and ADR spells (planned) can build on the same graph.

Scry is not a replacement for reading code when you are about to change behavior. It is the lantern: enough light to pick a path before you walk it.

## Install

Grimoire installs into `.agents/skills/` from the project that should receive the spells:

```bash
/path/to/grimoire/install.sh
```

Then invoke `/grim-scry` on a target path. Example output and sibling `model.yaml` for tailscale live in the [grimoire examples](https://github.com/matthewlsawyer/grimoire/tree/main/examples/grim-scry).

---

Cast the lantern. Read the shape. Then decide what spell comes next.
