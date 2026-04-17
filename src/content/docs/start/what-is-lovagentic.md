---
title: What is lovagentic?
description: A terminal-first, agent-ready CLI for Lovable.dev.
---

**lovagentic** is a command-line interface for [Lovable](https://lovable.dev) — the AI-first app builder — that exposes the entire product surface from your terminal.

## The one-sentence pitch

Everything you can do in the Lovable web UI, you can do from a shell, a CI pipeline, or an AI agent.

## What you can do with it

- **List, create, and prompt** Lovable projects
- **Chat-loop** with the Lovable agent until your app is done
- **Answer questions** the Lovable agent asks mid-build
- **Attach files** (images, PDFs, CSV, TXT) to prompts
- **Resolve runtime errors** one-click or auto
- **Publish** projects and manage custom domains
- **Capture screenshots** on desktop + mobile
- **Run Lighthouse audits** with pass/fail gates
- **Connect GitHub** for PR-based workflows

## Who it's for

- **Devs who live in the terminal** and want Lovable without context-switching
- **Teams running CI/CD** — use lovagentic to build and verify Lovable previews on every PR
- **AI agents and automations** — MCP-native in v0.2, scriptable from day one
- **Power users** who manage 10+ Lovable projects and want batch ops

## How it works

Today (`v0.1`), lovagentic drives Lovable through its web UI using Playwright under the hood. It uses your own Lovable session, so it works on every Lovable tier — Starter, Pro, Scale — without a separate API key.

When Lovable's official MCP ships, lovagentic v0.2 will transparently switch to MCP-native communication, keeping the browser path as a fallback. Same CLI, same API, ~10× faster.

## What it is not

- Not a headless-only clone — Lovable's web UI is still the source of truth
- Not a wrapper around an unsupported API — browser-first by design, official MCP when available
- Not trying to replace Lovable — it makes Lovable reachable from more places

## Open source and free

[MIT-licensed](https://github.com/Alfridus1/lovagentic/blob/main/LICENSE). Published on [npm](https://www.npmjs.com/package/lovagentic). Maintained by [Tobias Kub](https://github.com/Alfridus1) at [COPPEN](https://coppen.energy) — a Germany-based consultancy that runs 100+ live Lovable projects.

Next: [Install →](/start/install)
