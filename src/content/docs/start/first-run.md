---
title: First run
description: Create, iterate, and publish your first Lovable app from the terminal.
---

Thirty seconds to a live URL.

## 1. Create a project

```bash
lovagentic create \
  --prompt "A sleek personal todo app with dark mode, drag-to-reorder, and keyboard shortcuts." \
  --name todos \
  --wait-for-idle
```

The CLI:

1. Opens a browser profile (headless)
2. Submits the prompt to Lovable
3. Waits for Lovable to finish the initial build
4. Prints the project ID when idle

Example output:

```
Creating project "todos"…
Submitting initial prompt…
Waiting for Lovable to finish (1m 12s)…
✓ Project created: a3f7…92c1
  URL: https://lovable.dev/projects/a3f7…92c1
```

## 2. Iterate with chat-loop

Follow-up prompts use the `chat` command:

```bash
lovagentic chat \
  --id a3f7…92c1 \
  --prompt "Add a floating action button and subtle haptic-feel animations on drag." \
  --wait-for-idle
```

You can send several prompts back-to-back. lovagentic will wait for each to land before sending the next. Long prompts auto-split at paragraph boundaries.

## 3. Verify the preview

```bash
lovagentic verify \
  --id a3f7…92c1 \
  --output-dir ./snapshots
```

You get `desktop.png` and `mobile.png` plus a console/error report. Use `--fail-on-console` if you want the command to exit non-zero on any console warnings.

## 4. Run Lighthouse

```bash
lovagentic speed \
  --id a3f7…92c1 \
  --device both \
  --min-performance 80 \
  --min-accessibility 90
```

Fails the CLI with a non-zero exit code if thresholds aren't met. Perfect for CI gates.

## 5. Publish

```bash
lovagentic publish --id a3f7…92c1
```

And the preview URL is live on Lovable's default domain.

## What's next

- [**Scripting →**](/guides/scripting) — combine the commands into a single-file recipe
- [**CI/CD →**](/guides/ci) — GitHub Actions templates
- [**Troubleshooting →**](/start/troubleshooting) — if something broke
