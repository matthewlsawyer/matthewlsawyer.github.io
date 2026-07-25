---
layout: post_layout.md
title: Grim Repo
date: 2026-07-24T18:00:00
published: Jul 24, 2026
credit: 'Tarot images from the <a class="hover:text-stone-300" href="https://commons.wikimedia.org/wiki/Category:Rider-Waite_tarot_deck">Rider-Waite tarot deck</a> on Wikimedia Commons.'
---

_What lives must be named._

You work across nested git roots; a monorepo shell, site, dotfiles, experiments. Before you ask the agent to perform the next task, you freeze.

> Have I committed all my changes? ... what did I change again?

You need a _ledger_ that shows you: which roots exist, which branches, how dirty the working tree is, how far you are from upstream. One ledger the agent can reason over.

**Grim Repo** is the second spell in [Grimoire](https://github.com/matthewlsawyer/grimoire): deterministic discovery -> a live viewport injected into session. `/grim-repo` puts repo state where you (and the agent) can use it.

## Death

<a href="/assets/tarot/13-Death.png">
  <img
    class="my-4 w-28 sm:w-32 h-auto ring-1 ring-stone-500/60 ring-offset-2 ring-offset-stone-800"
    src="/assets/tarot/13-Death.png"
    alt="Death"
    width="300"
    height="527"
  />
</a>

_A stale branch is a dead branch._

Death's domain is lifecycle. To die, to be reborn anew. Branches are created, merged, abandoned, and rebased away. Changes accumulate, ship, or get discarded.

That lifecycle is the signal Grim Repo surfaces: 

- `↑N ↓N` ahead/behind upstream
- `+N -N` diffs against HEAD
- current branch

The spell is for orientation of a system in motion.

---

## Example: Throneroom

A real Grim Repo pass on [Throneroom](/posts/throneroom/) - a prime example of nested roots under one workspace:

- `▲` commits ahead/behind configured upstream (`↑N ↓N`)
- `▲` working-tree delta vs HEAD (`+N -N`)
- `●` current branch per repo

```text
throneroom/
╞══════════════════◆
├─ ./
│  ├─▲ ↑1 ↓0
│  ├─▲ +0 -0
│  └─● main
│
├─ projects/dotfiles/
│  ├─▲ ↑0 ↓0
│  ├─▲ +8 -8
│  └─● main
│
├─ projects/grimoire/
│  ├─▲ ↑0 ↓0
│  ├─▲ +71 -21
│  └─● main
│
├─ projects/site/
│  ├─▲ ↑0 ↓0
│  ├─▲ +83 -3
│  └─● main
│
└─ scratch/superfile-2026-07-23/
   ├─▲ ↑0 ↓0
   ├─▲ +0 -0
   └─● main
```

Full example run found in [examples/grim-repo/throneroom](https://github.com/matthewlsawyer/grimoire/blob/main/examples/grim-repo/throneroom.md).

---

## What the spell does

`/grim-repo` is not a substitute for `git status`. It is the ledger you want in the conversation: at-a-glance repo facts plus agent context for the next question.

Given a workspace, `grim-repo` finds every nested git root and emits one status tree in chat:

1. **Resolve the target** - workspace root or named path.
2. **Discover roots** - deterministic find under the target (via scripts).
3. **Draw live status** - branch, working-tree delta, and upstream sync per root -> fenced stdout.

_The viewport is the spell._ Use it to choose where to work, what is out of sync, and what changed since you last looked.

---

Name the living. Read the drift. Then decide what comes next.
