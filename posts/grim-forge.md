---
layout: post_layout.md
title: Grim Forge
date: 2026-07-30T12:00:00
published: Jul 30, 2026
credit: 'Tarot images from the <a class="hover:text-stone-300" href="https://commons.wikimedia.org/wiki/Category:Rider-Waite_tarot_deck">Rider-Waite tarot deck</a> on Wikimedia Commons.'
---

_What is forged may never fade._

You ship in bursts. Commits pile up. The agent summarizes what changed, and the summary vanishes when the session ends. What you need is history; _what changed_, and the _provenance_ behind it.

---

**Grim Forge** is the third spell in [Grimoire](https://github.com/matthewlsawyer/grimoire). `/grim-forge` bootstraps or updates `CHANGELOG.md` and `HISTORY.md` per git root, then emits one at-a-glance ledger viewport.

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

Thus the record stands via two artifacts:

- `CHANGELOG.md` records _what changed_
- `HISTORY.md` records the _story_ of those changes

Each run forges (or updates) both; the ledger viewport captures the delta of what landed.

The spell is for durable provenance, not omniscience in one pass.

---

## Example: buildawesome

A Grim Forge genesis run on [buildawesome](https://github.com/11ty/buildawesome) that includes:

- CHANGELOG.md
- HISTORY.md
- captured delta in one viewport

**Command:** `/grim-forge`

```text
buildawesome/
╞══════════════════◆
│
├─ CHANGELOG.md
│  ├─ ## [Unreleased]
│  │  ├─ ### Added
│  │  │  └─ `{ BuildAwesome }` named export on the build-awesome package (6d2c04d1)
│  │  ├─ ### Changed
│  │  │  ├─ Repository pointers and docs toward `11ty/buildawesome` (cf3a830e)
│  │  │  └─ Dependency upgrades on main, including picomatch, markdown-it, and iso-639-1 (17210371)
│  │  └─ ### Fixed
│  │     └─ Issue #4325 (84654019)
│  ├─ ## [4.0.0-alpha.10]
│  ├─ ## [3.1.6]
│  └─ ## [1.0.0]
│
└─ HISTORY.md
   ├─ marker: none -> 17210371
   ├─ ## Story
   └─ ## Timeline
      ├─ ### 2026-07-27
      ├─ ### 2026-07-01
      └─ ### 2017-11-26
```

Other example runs found [here](https://github.com/matthewlsawyer/grimoire/blob/main/examples/).

---

## What the spell does

Forge is not a substitute for cutting releases yourself. It is the ledger pair: _what changed_ in the changelog, _provenance_ in the history.

Given a git repository, `grim-forge` collects bounded evidence and writes durable artifacts at `repo_root`:

1. **Resolve the target** - one git root (`repo_root`); nested repos are separate runs.
2. **Detect phase** - no `HISTORY.md` marker -> genesis; else delta.
3. **Collect evidence** - `status.py` returns commits, touched paths, releases, and working tree.
4. **Read bounded context** - `status.touched` first; budget default 50.
5. **Write artifacts** - curated `CHANGELOG.md` + `HISTORY.md` (Story on genesis; Timeline when narrative warrants).
6. **Emit** - `# Grim Forge: <target>`, ledger viewport fence, slim Provenance footer.

_Provenance is the spell._ The viewport merely captures it.

---

Strike the ledger. Read the arc. Then decide what comes next.
