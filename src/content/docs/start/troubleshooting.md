---
title: Troubleshooting
description: Common lovagentic issues and how to fix them.
---

## Start here: `doctor --self-heal`

```bash
lovagentic doctor --self-heal
```

Auto-installs Chromium, auto-imports your desktop session. Fixes 80% of issues.

## Nine checks doctor runs

| Check | What it means | Fix |
|---|---|---|
| `Node.js` | Node 20+ is required | Install [Node 20+](https://nodejs.org/) |
| `Lovable.app` | Desktop app installed | [Download Lovable](https://lovable.dev/download) |
| `Desktop profile` | You opened Lovable.app once | Launch Lovable.app and sign in |
| `Desktop cookies` | You're signed into Lovable.app | Sign in to the desktop app |
| `CLI profile` | `~/.lovagentic/profile` exists | `lovagentic doctor --self-heal` |
| `CLI cookies` | The CLI has a Lovable session | `lovagentic doctor --self-heal` |
| `Playwright` | Playwright npm package installed | reinstall lovagentic: `npm i -g lovagentic` |
| `Playwright Chromium` | Chromium browser binary present | `lovagentic doctor --self-heal` or `npx playwright install chromium` |
| `MCP backend` | Informational — MCP config status | Ships in v0.2 |

## Common errors

### "No Lovable session found"

Your CLI profile has no cookies. Either:

```bash
lovagentic doctor --self-heal   # if the desktop app has a valid session
# or
lovagentic login                # fresh interactive login
```

### Playwright "Chromium not found" or "executable doesn't exist"

```bash
lovagentic doctor --self-heal
# or manually:
npx playwright install chromium
```

### "EEXIST: file already exists" during `import-desktop-session`

You hit a concurrency race between two lovagentic processes importing at once. The issue is fixed as of v0.1.2 — upgrade:

```bash
npm install -g lovagentic@latest
```

If you still hit it, run `lovagentic doctor --self-heal` once to settle, then retry.

### Prompt submitted but Lovable looks stuck

The Lovable web UI sometimes shows a "Queue paused" state. lovagentic detects and auto-resumes when you pass `--wait-for-idle` (the default on `chat` and `prompt`). If you explicitly disabled idle waiting with `--no-wait-for-idle`, re-enable it.

### Preview screenshot is blank

- Make sure you're running from a machine that can reach `*.lovable.app`
- Increase settle time: `--settle-ms 8000`
- Check the verify output for console errors: `--fail-on-console` surfaces them

## Still stuck?

- [GitHub Discussions Q&A](https://github.com/Alfridus1/lovagentic/discussions/categories/q-a) — ask there, the answer goes into these docs
- [Open an issue](https://github.com/Alfridus1/lovagentic/issues/new) with the output of `lovagentic doctor --json`
