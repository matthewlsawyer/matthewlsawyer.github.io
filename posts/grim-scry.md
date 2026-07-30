---
layout: post_layout.md
title: Grim Scry
date: 2026-07-21T12:00:00
published: Jul 21, 2026
credit: 'Tarot images from the <a class="hover:text-stone-300" href="https://commons.wikimedia.org/wiki/Category:Rider-Waite_tarot_deck">Rider-Waite tarot deck</a> on Wikimedia Commons.'
---

_You must see before you act._

You open a repo cold. The agent lists files, reads random READMEs, chases imports, and ten minutes later you have a paragraph summary that will not survive the next session. What you need is _shape_; what matters, how it is organized, what you run first.

---

**Grim Scry** is the first spell in [Grimoire](https://github.com/matthewlsawyer/grimoire). `/grim-scry` reveals project meaning as one at-a-glance Scry Lantern.

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

## Example: omarchy

A Grim Scry run on [omarchy](https://github.com/basecamp/omarchy) that includes:

- `≣` concept trunks
- `ⓘ` annotation branches
- `▶` invocation branches

**Command:** `/grim-scry https://github.com/basecamp/omarchy`

```text
omarchy/
├─ⓘ Beautiful, modern Linux distro (DHH / Basecamp); MIT; omarchy.org
╞══════════════════◆
│
├─≣ Stack
│  ├─ Arch Linux + Hyprland (Wayland WM)
│  ├─ Omarchy shell (single Quickshell host: bar, panels, overlays, services)
│  └─ `$OMARCHY_PATH` runtime root (uwsm session)
│
├─≣ CLI
│  ├─▶ omarchy
│  │  └─ⓘ Dispatches `omarchy-*` in `bin/`; metadata in first 80 lines; groups in `GROUP_DESCRIPTIONS`
│  ├─▶ omarchy commands
│  ├─▶ omarchy update
│  ├─▶ omarchy refresh-config <path>
│  ├─▶ omarchy-restart-shell
│  └─▶ omarchy-shell shell ping
│
├─≣ Install & ship
│  ├─ install/ (sourced leaves; ISO orchestrates via omarchy-setup-system)
│  ├─ config/ -> `~/.config/` defaults
│  ├─ themes/*/colors.toml + default/themed/*.tpl
│  ├─ migrations/ (per-user via omarchy-migrate)
│  └─▶ omarchy-setup-system / omarchy-finalize-user / omarchy-reinstall-configs
│
├─≣ Omarchy shell
│  ├─ shell/shell.qml + services/PluginRegistry.qml
│  ├─ shell/plugins/ (first-party; manifest.json contract)
│  ├─ `~/.config/omarchy/shell.json` (layout + plugins; no deep-merge once customized)
│  ├─▶ omarchy plugin add|update|remove|clone|rescan
│  ├─▶ omarchy bar plugin add|move|remove|set
│  └─▶ omarchy restart shell
│
├─≣ Quality
│  ├─▶ ./test/all
│  ├─▶ ./test/cli
│  ├─▶ ./test/shell
│  └─ⓘ Graphical acceptance via sibling omarchy-iso VM harness
│
├─≣ End-user agents
│  └─ default/omarchy-skill/SKILL.md
│     └─ⓘ Customize `~/.config/` only; never edit `/usr/share/omarchy/`
│
└─≣ Guidance
   └─ AGENTS.md
      └─ⓘ Bash style, helpers (pkg/cmd/hw), pkexec for privileged prompts, visual verify flows
```

Other example runs found [here](https://github.com/matthewlsawyer/grimoire/blob/main/examples/).

---

## What the spell does

Scry is not a replacement for reading code when you are about to change behavior. It is the lantern: enough light to pick a path before you walk it.

Given a repository or workspace, `grim-scry` distills meaning and emits one at-a-glance Scry Lantern in chat:

1. **Resolve the target** - repo or workspace path.
2. **Discover a closed seed set** - session-only, via `discover.py` (default budget 50).
3. **Read only those seeds; distill for salience** - annotate purpose only when docs named it.
4. **Emit** - `# Grim Scry: <project>`, one-line hook, Scry Lantern fence, `# Summary`, then `Observations:` (up to three bullets).

_The lantern is the spell._ The viewport merely captures it. Concepts hang first; implementers and named commands hang underneath. Lantern stays session-only.

---

Cast the lantern. Read the shape. Then decide what comes next.
