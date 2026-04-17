---
title: Batch operations
description: Loop over all your Lovable projects with JSON output and jq.
---

If you run 5+ Lovable projects, you'll want to do things across all of them: verify, audit, snapshot, publish. lovagentic is built for this.

## Get all project IDs

```bash
lovagentic list --json | jq -r '.[].id'
```

Each command that lists things supports `--json`. Pipe the output to `jq` (or any other JSON tool) and you've got a programmable surface.

## Screenshot every project

```bash
lovagentic list --json | jq -r '.[].id' | while read id; do
  lovagentic verify --id "$id" --output-dir "./snapshots/$id" --settle-ms 2000 || true
done
```

## Weekly health-check email

Combine with any script that sends email:

```bash
#!/usr/bin/env bash
set -euo pipefail

RESULTS=$(lovagentic list --json | jq -c '.[]' | while read proj; do
  id=$(echo "$proj" | jq -r '.id')
  name=$(echo "$proj" | jq -r '.name')
  if lovagentic verify --id "$id" --output-dir "/tmp/v/$id" > /dev/null 2>&1; then
    echo "{\"name\":\"$name\",\"id\":\"$id\",\"ok\":true}"
  else
    echo "{\"name\":\"$name\",\"id\":\"$id\",\"ok\":false}"
  fi
done)

# Pipe $RESULTS into your mailer / Slack / Discord webhook.
```

## Lighthouse scores across the fleet

```bash
lovagentic list --json | jq -r '.[].id' | while read id; do
  lovagentic speed --id "$id" --device both --output-dir "./lh/$id" --json \
    | jq -c '{id: .id, perf: .desktop.performance, a11y: .desktop.accessibility}'
done | jq -s '. | sort_by(-.perf)'
```

Sorts by Performance score. Use it as a leaderboard.

## Update a tag across projects

Want to bump a brand color, accent, or footer on every project at once? Loop `chat`:

```bash
lovagentic list --json | jq -r '.[] | select(.tags | index("client-X")) | .id' | while read id; do
  lovagentic chat --id "$id" \
    --prompt "Update the primary accent color to #6366f1. Don't touch anything else." \
    --wait-for-idle
done
```

## Ready-made: `examples/batch-verify.sh`

We ship a production-ready batch verifier in the repo:

```bash
curl -fsSL https://raw.githubusercontent.com/Alfridus1/lovagentic/main/examples/batch-verify.sh -o batch-verify.sh
chmod +x batch-verify.sh
./batch-verify.sh ./snapshots
```

It creates a summary `index.json` you can feed into a dashboard.

## What's next

- [**CI/CD →**](/guides/ci) — run batches on a schedule with GitHub Actions
