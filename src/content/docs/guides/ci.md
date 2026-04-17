---
title: CI/CD with GitHub Actions
description: Gate PRs on Lovable preview screenshots and Lighthouse scores.
---

lovagentic runs headless, takes JSON arguments, exits with proper codes, and captures artifacts. Perfect for CI.

## Quick start: smoke test

Drop this into `.github/workflows/lovable-smoke.yml`:

```yaml
name: Lovable smoke test
on:
  pull_request:
    paths: ["prompts/**"]

jobs:
  smoke:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: "22" }
      - run: npm install -g lovagentic
      - run: npx playwright install --with-deps chromium
      - name: Restore Lovable session
        env:
          LOVABLE_SESSION_ARCHIVE: ${{ secrets.LOVABLE_SESSION_ARCHIVE }}
        run: |
          mkdir -p ~/.lovagentic/profile
          printf '%s' "$LOVABLE_SESSION_ARCHIVE" | base64 -d | tar xz -C ~/.lovagentic/profile
          lovagentic doctor
      - run: |
          lovagentic verify \
            --id "${{ vars.LOVABLE_PROJECT_ID }}" \
            --output-dir ./snapshots \
            --fail-on-console
      - if: always()
        uses: actions/upload-artifact@v4
        with:
          name: lovable-preview-${{ github.event.pull_request.number }}
          path: ./snapshots/**
```

## How the session secret works

You need the CLI to have a Lovable session when the GitHub runner spins up. The simplest approach: package your local `~/.lovagentic/profile` once and store it as a base64-encoded secret.

```bash
# On your local machine, after `lovagentic doctor` is green:
tar czf - -C ~/.lovagentic/profile . | base64 | pbcopy
```

Then in your GitHub repo: **Settings → Secrets and variables → Actions → New repository secret**, name it `LOVABLE_SESSION_ARCHIVE`, paste.

Rotate it if your session expires. Scope it to the target repo — don't share it across repos unless that's what you want.

:::tip
Starting with v0.2 (MCP-native), session management moves into the MCP server and you'll be able to use an OIDC-issued token instead of a session archive.
:::

## Lighthouse gate on every PR

```yaml
- run: |
    lovagentic speed \
      --id "${{ vars.LOVABLE_PROJECT_ID }}" \
      --device both \
      --min-performance 80 \
      --min-accessibility 90 \
      --min-best-practices 85 \
      --output-dir ./lighthouse

- if: always()
  uses: actions/upload-artifact@v4
  with:
    name: lighthouse-${{ github.event.pull_request.number }}
    path: ./lighthouse/**
```

The command fails the job if thresholds are not met. Merge protection rules on GitHub can require the job to pass before allowing merge.

## Comment screenshots on the PR

```yaml
- if: always()
  uses: thollander/actions-comment-pull-request@v3
  with:
    message: |
      ### Lovable preview
      Screenshots attached. Project `${{ vars.LOVABLE_PROJECT_ID }}`.
    comment-tag: lovable-preview
```

## Full examples

Both ready-to-copy in the repo:

- [`examples/github-actions-smoke-test.yml`](https://github.com/Alfridus1/lovagentic/blob/main/examples/github-actions-smoke-test.yml)
- [`examples/github-actions-lighthouse.yml`](https://github.com/Alfridus1/lovagentic/blob/main/examples/github-actions-lighthouse.yml)

## Next

- [**Batch operations →**](/guides/batch) — loop over many projects in CI
- [**Roadmap →**](/about/roadmap) — v0.3 ships first-class GitHub-Actions templates
