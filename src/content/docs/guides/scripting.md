---
title: Driving Lovable from scripts
description: Build full Lovable apps from a single shell script.
---

lovagentic is designed to compose. Every command is idempotent where it makes sense, every output is parseable, and non-zero exit codes mean something failed.

## Single-file build script

```bash
#!/usr/bin/env bash
set -euo pipefail

PROJECT_ID="$(
  lovagentic create \
    --prompt-file ./prompts/initial.md \
    --name "my-app" \
    --wait-for-idle \
    --json \
  | jq -r '.projectId'
)"

for prompt in ./prompts/*.followup.md; do
  lovagentic chat --id "$PROJECT_ID" --prompt-file "$prompt" --wait-for-idle
done

lovagentic verify --id "$PROJECT_ID" --output-dir ./snapshots --fail-on-console
lovagentic speed --id "$PROJECT_ID" --device both --min-performance 80 --min-accessibility 90
lovagentic publish --id "$PROJECT_ID"

echo "Live at: https://$(lovagentic published --id "$PROJECT_ID" --json | jq -r '.url')"
```

Run the script twice — the second run creates a new project. To iterate on the _same_ project across runs, persist the ID:

```bash
STATE="./.project-id"
[[ -f "$STATE" ]] && PROJECT_ID="$(cat "$STATE")" || \
  PROJECT_ID="$(lovagentic create --prompt-file ... --json | jq -r '.projectId')"
echo "$PROJECT_ID" > "$STATE"
```

## Batch operations

Every "list" style command returns JSON with `--json`. Pipe it through `jq` and you've got a batch primitive:

```bash
# Verify every project you own
lovagentic list --json \
  | jq -r '.[].id' \
  | while read id; do
      lovagentic verify --id "$id" --output-dir "./snapshots/$id" || true
    done
```

The ready-made [`examples/batch-verify.sh`](https://github.com/Alfridus1/lovagentic/blob/main/examples/batch-verify.sh) does this plus writes a summary index.

## Prompt files

Prompts can be 50 bytes or 50 KB. lovagentic auto-splits long prompts at paragraph boundaries and sends them as sequential messages that the Lovable agent stitches back together. Write your prompts in Markdown, keep them in git alongside your project.

## Environment variables

| Variable | What |
|---|---|
| `LOVAGENTIC_PROFILE_DIR` | Override CLI profile path |
| `LOVAGENTIC_DESKTOP_PROFILE_DIR` | Override desktop profile path |
| `LOVABLE_BASE_URL` | Override Lovable base URL (useful for staging) |
| `LOVABLE_MCP_URL` | MCP server URL (v0.2+) |
| `LOVAGENTIC_DEBUG` | Verbose logging |

## Error handling

- Exit code `0` — success
- Exit code `1` — user error (bad args, missing session, failed assertion)
- Exit code `2` — Lovable returned an error (runtime error unresolved, publish blocked, etc.)
- Non-zero on `verify --fail-on-console` if any console errors/warnings
- Non-zero on `speed --min-performance/--min-accessibility` if thresholds unmet

## What's next

- [**CI/CD →**](/guides/ci) — turn the script above into a PR gate
- [**Batch operations →**](/guides/batch) — more patterns with `--json`
