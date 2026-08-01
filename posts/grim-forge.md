---
layout: post_layout.md
title: Grim Forge
date: 2026-07-30T12:00:00
published: Jul 30, 2026
credit: 'Tarot images from the <a class="hover:text-stone-300" href="https://commons.wikimedia.org/wiki/Category:Rider-Waite_tarot_deck">Rider-Waite tarot deck</a> on Wikimedia Commons.'
---

_What is forged may never fade._

You ship in bursts. Commits pile up. You open a pull request, and after the merge the story is over. What you need is a historical ledger; not only _what changed_, but the _story_ behind it.

---

**Grim Forge** is the third spell in [Grimoire](/page/grimoire/).

`/grim-forge` maintains a historical ledger at `./HISTORY.md` then emits one at-a-glance viewport of the delta to the session window.

## The Craftsman

<a href="/assets/tarot/Pentacles08.png">
  <img
    class="my-4 w-28 sm:w-32 h-auto ring-1 ring-stone-500/60 ring-offset-2 ring-offset-stone-800"
    src="/assets/tarot/Pentacles08.png"
    alt="Eight of Pentacles"
    width="300"
    height="527"
  />
</a>

_Forging is repetition with intent._

With each pass of the hammer, the craftsman forges the past into permanence. No tale left unwrought, no decision left unmarked.

Thus the record stands via `HISTORY.md`, an artifact that records the _story arc_ of those changes.

The spell is for durable provenance, not omniscience in one pass.

---

## Example: buildawesome

A Grim Forge genesis run on [buildawesome](https://github.com/11ty/buildawesome).

**Command:** `/grim-forge`

### Viewport

```text
buildawesome/HISTORY.md
╞══════════════════◆
│
├─≣ 2026-07-31
│  └─ First grim-forge run; ledger created from ~3,700 commits.
├─≣ 2026-07-27
│  └─ Dependency upgrades, BuildAwesome export, fix #4325 on alpha.10.
├─≣ 2026-07-01
│  └─ v4.0.0-alpha.10; repo pointers to 11ty/buildawesome.
├─≣ 2026-06-09 -> 2026-06-11
│  └─ Build Awesome alias layer and packages/build-awesome workspace.
├─≣ 2026-06-05
│  └─ packages/client renamed to packages/browser.
├─≣ 2026-06-17 -> 2026-06-30
│  └─ Alpha.8–10 arc: dual release tags, async Nunjucks bundle plugin.
├─≣ 2025-07-30
│  └─ v4.0.0-alpha.1 — ESM-first major, @11ty/client browser package.
├─≣ 2024-10-01
│  └─ v3.0.0 third major release.
├─≣ 2023-02-08
│  └─ v2.0.0 second major release.
├─≣ 2022-01-08
│  └─ v1.0.0 first stable semver.
└─≣ 2017-11-26
   └─ Genesis — Jekyll-alternative SSG in JavaScript.
```

### HISTORY.md

An excerpt from the `HISTORY.md` artifact created during this run.

````text
Zach Leatherman started Eleventy in late 2017 as a simpler static site 
generator in JavaScript (`00ad9192`). Within weeks it gained subfolder 
templates, CLI flags, and a pivotal December refactor that introduced 
asynchronous template rendering and Liquid support (`c14f1fa8`) — the 
architectural shape that would carry through every later version.
````

Other example runs found [here](https://github.com/matthewlsawyer/grimoire/blob/main/examples/).

---

## What the spell does

Forge is not a substitute for maintaining a changelog, it is a historical ledger that captures the story arc of your project:

1. **Resolve the target** - workspace root or named path.
2. **Distill history**. Walk the git log and hunt for documentation to support the narrative.
3. **Emit artifacts and report**. Write the `HISTORY.md` artifact and emit a ledger in the viewport.

_History is the spell._ The viewport merely captures it.

---

Strike the ledger. Read the arc. Then decide what comes next.
