---
title: Roadmap
description: Where lovagentic is headed.
---

## Now — v0.1.x (current)

✅ Browser-first CLI for every Lovable capability
✅ Prompt attachments (images, PDFs, CSV, TXT)
✅ Desktop session import, `doctor --self-heal`
✅ Preview verification + Lighthouse audits
✅ MIT-licensed, on npm, publicly installable

## Next — v0.2 — MCP-native

🔜 Official Model Context Protocol backend for all commands
🔜 ~10× faster than browser automation
🔜 Streaming prompt responses
🔜 Claude Desktop / Cursor / Codex integration guides
🔜 OIDC-based session for CI (no more session archives)

Browser backend stays as a fallback for capabilities MCP doesn't (yet) cover.

## Soon after — v0.3 — CI/CD batteries included

- Pre-built GitHub Actions workflows you drop into `.github/workflows/`
- Session-rotation automation
- PR-bot that auto-comments Lighthouse and preview diffs
- Vercel/Netlify deploy-hook integration

## Long-term — v0.4 — hosted runner

- Optional hosted service for teams that don't want to manage session archives themselves
- Fleet view across projects, scheduled audits, Slack/Discord notifications
- Still a CLI underneath — the hosted runner is just remote execution

## Not on the roadmap

- Becoming a Lovable alternative (it isn't one)
- Pay-walling core functionality (CLI stays MIT, free, open)
- Building against unsupported Lovable APIs (browser-first or MCP only)

## Want to shape what gets built?

- [GitHub Discussions → Ideas](https://github.com/Alfridus1/lovagentic/discussions/categories/ideas) — drop feature requests
- Build something with lovagentic and share it in [Show and Tell](https://github.com/Alfridus1/lovagentic/discussions/categories/show-and-tell)
- Early-access for v0.2: comment on the [welcome discussion](https://github.com/Alfridus1/lovagentic/discussions/5)
