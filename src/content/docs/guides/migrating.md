---
title: Migrating from the web UI
description: Move your Lovable workflow from the browser to the terminal without giving up anything.
---

You don't have to pick one or the other. lovagentic and the web UI share the same Lovable session. Work in either, at any moment, without syncing anything.

## What's the same

- **The project** — lovagentic doesn't create a separate namespace. Your projects show up in both places.
- **The agent** — same Lovable agent, same responses, same outputs.
- **Publish URL, custom domains, GitHub integration** — all shared.
- **Knowledge / context files** — same storage. Edit in either place.

## What's different

| Capability | Web UI | lovagentic |
|---|---|---|
| Visual project grid | ✅ | — (use `list`) |
| Chat with project | ✅ | ✅ |
| Attach files to prompts | ✅ | ✅ |
| Publish | ✅ | ✅ |
| Custom domains | ✅ | ✅ |
| GitHub connect | ✅ | ✅ |
| Batch ops across many projects | — | ✅ |
| Headless / CI / automation | — | ✅ |
| AI agent integration | — | ✅ (MCP v0.2) |
| Scripted iterative builds | Manual | ✅ (`chat-loop`) |
| Exit codes / JSON output | — | ✅ |

## When to use which

**Use the web UI for**
- Visual exploration of a new project idea
- One-off tweaks where typing is faster than scripting
- Reviewing the preview interactively

**Use lovagentic for**
- Building + iterating in a deterministic, reproducible way
- Running on a schedule (CI, cron, weekly rebuilds)
- Anything that touches 5+ projects
- AI agent integrations
- "This is a product, not a toy" workflows

## Typical hybrid workflow

1. **Explore in web UI** — sketch the app, see what Lovable gives you
2. **Extract prompts** — copy your best prompts into a `prompts/` folder in git
3. **Replay in lovagentic** — `build.sh` script that re-runs the whole sequence
4. **Iterate in CLI** — every new idea goes into a new prompt file, committed to git
5. **Review in web UI when needed** — the two are fully interoperable

This gives you git history of your prompts, reproducible builds, and the visual inspection loop when you want it.

## Getting your session out of the web UI

If you've been working in the web browser (not the desktop app), the easiest way:

1. Install [Lovable.app](https://lovable.dev/download) and sign in there once
2. Run `lovagentic doctor --self-heal`
3. Done — your Lovable session is now usable from the CLI

lovagentic never asks for a password or token. Your session never leaves your machine unless you explicitly archive it (for CI).
