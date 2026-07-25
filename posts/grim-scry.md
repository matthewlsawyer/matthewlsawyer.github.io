---
layout: post_layout.md
title: Grim Scry
date: 2026-07-21T12:00:00
published: Jul 21, 2026
credit: 'Tarot images from the <a class="hover:text-stone-300" href="https://commons.wikimedia.org/wiki/Category:Rider-Waite_tarot_deck">Rider-Waite tarot deck</a> on Wikimedia Commons.'
---

_You must see before you act._

You open a repo cold. The agent lists files, reads random READMEs, chases imports, and ten minutes later you have a paragraph summary that will not survive the next session. What you wanted was _shape_: what matters, how it is organized, what you run first.

**Grim Scry** is the first spell in [Grimoire](https://github.com/matthewlsawyer/grimoire): a spellbook of small agent skills. `/grim-scry` reveals project meaning as one at-a-glance Scry Lantern.

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

The Hermit carries a lantern, not a floodlight. Scry works the same way: a closed seed set, docs read only on those seeds, then distill meaning into **one** lantern viewport. Ideas hang first; implementers and named commands hang underneath. No recursive hunt across the whole tree. No pretending to understand code it never opened.

The spell is for orientation, not omniscience. That restraint is the point.

---

## Example: Omarchy

A real scry of [omarchy](https://github.com/basecamp/omarchy) that includes:

- Hierarchical structure of main concepts
- `ⓘ` annotation branches
- `─▶` invocation branches

```text
Omarchy
├─ⓘ Arch + Hyprland distro; runtime via $OMARCHY_PATH (uwsm session)
╞══════════════════◆
├─ CLI
│  ├─ bin/omarchy
│  │  └─ⓘ Routes omarchy-*; GROUP_DESCRIPTIONS is authoritative
│  ├─ bin/
│  │  └─ⓘ # omarchy: metadata in first 80 lines (group, summary, args, ...)
│  └─▶ omarchy commands
│     └─ⓘ Discovery for users and agents
│
├─ Omarchy shell
│  ├─ shell/
│  │  ├─ shell.qml
│  │  ├─ services/
│  │  │  ├─ PluginRegistry.qml
│  │  │  └─ BarWidgetRegistry.qml
│  │  └─ plugins/
│  │     ├─ bar/
│  │     ├─ panels/
│  │     ├─ menu/
│  │     └─ ...
│  ├─ⓘ One Quickshell process per session; Hyprland autostart quickshell -p
│  ├─▶ omarchy-shell shell ping
│  ├─▶ omarchy-restart-shell
│  └─▶ omarchy plugin add | update | clone
│
├─ Bar & widgets
│  ├─ shell/plugins/bar/
│  ├─ shell/plugins/panels/
│  │  └─ tailscale/
│  │     └─ⓘ omarchy.tailscale bar-widget + panel
│  └─▶ omarchy bar plugin add
│
├─ Config & themes
│  ├─ config/
│  │  └─ⓘ Defaults copied to ~/.config/
│  ├─ default/themed/*.tpl
│  ├─ themes/*/colors.toml
│  └─▶ omarchy-refresh-config
│
├─ Install & upgrade
│  ├─ install/
│  ├─▶ omarchy-setup-system
│  ├─▶ omarchy-setup-hardware
│  ├─▶ omarchy-finalize-user
│  └─▶ omarchy-upgrade-to-quattro
│
├─ Migrations
│  ├─ migrations/
│  └─▶ omarchy-migrate
│
├─ Quality
│  ├─▶ ./test/all
│  ├─▶ ./test/cli
│  └─▶ ./test/shell
│
├─ End-user skill
│  └─ default/omarchy-skill/SKILL.md
│     └─ⓘ ~/.config customization; not source dev
│
└─ Guidance
   └─ AGENTS.md
      └─ⓘ Bash style, helpers, shell IPC, acceptance via omarchy-iso
```

Full example run found in [examples/grim-scry/omarchy](https://github.com/matthewlsawyer/grimoire/blob/main/examples/grim-scry/omarchy.md).

---

## What the spell does

Scry is not a replacement for reading code when you are about to change behavior. It is the lantern: enough light to pick a path before you walk it.

Given a repository or workspace, `grim-scry` distills meaning and emits one at-a-glance Scry Lantern in chat:

1. **Resolve the target** - repo or workspace path.
2. **Discover a closed seed set** - session-only, via deterministic listing (`discover.py` in Grimoire).
3. **Read only those seeds; distill for salience** - annotate purpose only when docs named it.
4. **Emit** - Scry Lantern (one tree: concepts, paths, commands), then a summary and observations.

_The viewport is the spell._ Concepts hang first; implementers and named commands hang underneath. Lantern stays session-only.

---

Cast the lantern. Read the shape. Then decide what comes next.
