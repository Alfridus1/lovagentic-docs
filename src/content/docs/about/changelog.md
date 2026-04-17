---
title: Changelog
description: lovagentic release notes.
---

The authoritative source is [GitHub Releases](https://github.com/Alfridus1/lovagentic/releases). This page mirrors it for discoverability.

## v0.1.3 — 2026-04-17

- 🛠️ Hardened publish workflow — `scripts/publish-to-npm.mjs` wraps `npm publish` with retry/verification logic that recognizes the npm registry visibility race
- 🛠️ `lovagentic doctor --self-heal` — auto-installs Chromium, auto-imports your desktop session
- 📎 Repo cleaned of remaining `lovable-cli` references
- 🧪 Idle auto-resume test hardened against flakiness
- 📚 New `examples/` folder: CRM template, CI workflow YAMLs, MCP configs, batch scripts

## v0.1.2 — 2026-04-17

- 📎 Prompt attachments — images, PDFs, CSV, TXT reference files on `prompt` and `chat`
- 📎 Standalone `attach` command — upload reference files without sending a prompt
- 📎 Upload attachments during question answers
- 🔒 Concurrent profile seeding fix — `--seed-desktop-session` is now serialized with a file lock
- 🏗️ Repo consolidation — `Alfridus1/lovable-cli` archived and redirected here

## v0.1.1 — 2026-04-17

- 🩺 `lovagentic doctor` hardened — 9 checks instead of 6, `--json` mode, process.exitCode on fail
- 🔌 Backend scaffold — pluggable `browser` + `mcp` backend architecture
- 🏗️ CI green on main (Node 22, Playwright Chromium)
- 🏗️ Actions pinned to checkout@v6, setup-node@v6
- 🏗️ New publish workflow with npm provenance

## v0.1.0 — 2026-04-16

- 🎉 First public release under the `lovagentic` name
- Core browser-first CLI for Lovable.dev
- Install: `npm install -g lovagentic`
- License: MIT
