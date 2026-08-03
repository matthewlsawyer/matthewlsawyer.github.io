---
layout: post_layout.liquid
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

An excerpt of the output to the viewport.

```text
buildawesome/HISTORY.md
╞══════════════════◆
│
├─≣ 2026-07-27
│  └─ v4 alpha polish: named export, fixes, dependency bumps.
├─ ...
└─≣ 2018-08-14
   └─ v0.5.1 caps year one; core SSG foundation in place.
```

### HISTORY.md

An excerpt from the `HISTORY.md` artifact created during this run.

````markdown
### Origins

Zach Leatherman started the project in November 2017 as a minimal static site generator (`00ad9192`). Within days it gained subfolder templates, CLI flags, and underscore-prefixed file ignores. By early December the name settled on **Eleventy** (`d041111c`), async rendering landed (`c14f1fa8`), and Liquid became the default data engine. Pagination, the `_data` directory, and multi-engine support (Nunjucks, Handlebars, Pug, EJS, Markdown) followed in rapid succession through 2017–2018, establishing the Jekyll-inspired mental model that would define the project.
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
