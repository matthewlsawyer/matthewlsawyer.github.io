---
layout: post_layout.md
title: Scry
date: 2026-07-21T12:00:00
published: Jul 21, 2026
credit: 'Tarot images from the <a class="hover:text-stone-300" href="https://commons.wikimedia.org/wiki/Category:Rider-Waite_tarot_deck">Rider-Waite tarot deck</a> on Wikimedia Commons.<br />Site source: <a class="hover:text-stone-300" href="https://github.com/matthewlsawyer/matthewlsawyer.github.io">matthewlsawyer.github.io</a>.'
---

_You must see before you can act._

You open a repo cold. The agent lists files, reads random READMEs, chases imports, and ten minutes later you have a paragraph summary that will not survive the next session. What you wanted was shape: what matters, how it is organized, what you run first.

**Scry** is the first spell in [Grimoire](https://github.com/matthewlsawyer/grimoire): a small spellbook of composable agent skills. `/grim-scry` attempts to give a high-level understanding of a repo by distilling _meaning_.

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

_Clarity over depth of knowledge._

The Hermit carries a lantern, not a floodlight. Scry works the same way: a shallow directory reveal, doc read only on what was revealed, then distill meaning and emit lenses. No recursive hunt across the whole tree. No pretending to understand code it never opened.

The spell is for orientation, not omniscience. That restraint is the point.

---

## What the spell does

Scry is not a replacement for reading code when you are about to change behavior. It is the lantern: enough light to pick a path before you walk it.

Given a target path, `grim-scry` will:

1. **Directory reveal** - `find` to depth `N`. Honor `.gitignore`. Skip plumbing, vendor, and generated paths.
2. **Doc seed extract** - readmes, agents, rules, and index files on revealed dirs only. Set purpose when docs name it; do not invent.
3. **Distill meaning** - capped to a salient set. Omit rather than verify.
4. **Emit** three lenses, a summary, and observations; shown below.

### Directory hierarchy

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

### Conceptual hierarchy

This is the lens you reach for when onboarding: not "what folders exist," but "what subsystems does this repo think it has?"

Ideas first, implementers (and containers) hung underneath:

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

### Workflow hierarchy

Where "how do I run this?" becomes answerable without spelunking.

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

---

## Examples

Live scry output for [tailscale/tailscale](https://github.com/tailscale/tailscale) lives in the [grimoire examples](https://github.com/matthewlsawyer/grimoire/tree/main/examples/grim-scry).

---

Cast the lantern. Read the shape. Then decide what work comes next.
