---
title: Install
description: Install lovagentic and get your Lovable session into the CLI profile.
---

## Requirements

- **Node.js 20 or newer** (`node --version` to check)
- **Lovable.app** installed and signed in — download from [lovable.dev/download](https://lovable.dev/download)
- macOS, Linux, or Windows

## 1. Install lovagentic

```bash
npm install -g lovagentic
```

Verify:

```bash
lovagentic --version   # 0.1.3 or newer
```

## 2. Get your session into the CLI profile

lovagentic runs Lovable through your own session — it does not ask for a password or token. The easiest way to get a working session is to import it from the desktop app:

```bash
lovagentic doctor --self-heal
```

`--self-heal` is idempotent and does three things:

1. Verifies Node, Playwright, and Chromium are installed
2. Installs the Playwright Chromium binary if it's missing
3. Imports your Lovable desktop session into the CLI profile

You should see nine ✓ checks.

## 3. Alternative: log in fresh

If you don't have the desktop app, you can log in directly:

```bash
lovagentic login
```

A browser window opens. Complete the Lovable login. Close the window — your session is saved to `~/.lovagentic/profile` and reused across runs.

## Profile paths

- **CLI profile:** `~/.lovagentic/profile`
- **Desktop profile (read-only):** `~/Library/Application Support/lovable-desktop` (macOS) · `%APPDATA%\lovable-desktop` (Windows)

Override with `--profile-dir` / `--desktop-profile-dir` on any command.

## What's next

- [**First run →**](/start/first-run) — build a live app in under a minute
- [**Troubleshooting →**](/start/troubleshooting) — when `doctor` is not green
