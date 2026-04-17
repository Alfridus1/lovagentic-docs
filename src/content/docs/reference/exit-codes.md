---
title: Exit codes
description: What lovagentic's process exit codes mean.
---

lovagentic follows standard Unix exit-code conventions.

| Code | Meaning | Example |
|---|---|---|
| `0` | Success | Prompt submitted, Lovable reached idle, project published |
| `1` | User / environment error | Missing session, invalid flag, file not found, doctor check failed |
| `2` | Lovable-side error | Runtime error not resolvable, publish blocked, Lovable returned an explicit failure |
| `> 2` | Unexpected process-level error | Node crash, uncaught exception |

## Special cases

### `verify` and `--fail-on-console`

- Exits `0` on success, screenshots produced
- Exits `1` if `--fail-on-console` is set and any console warnings or errors appear

### `speed` and Lighthouse thresholds

- Exits `0` if all provided `--min-*` thresholds are met
- Exits `1` if any threshold is not met
- Exits `2` if Lighthouse itself fails (preview not reachable, etc.)

### `doctor`

- Exits `0` if all nine checks pass
- Exits `1` if any check fails, regardless of `--self-heal`

## Scripting patterns

```bash
# Fail the script on any lovagentic error
set -e
lovagentic verify --id "$ID" --fail-on-console

# Branch on specific outcomes
if ! lovagentic speed --id "$ID" --min-performance 80; then
  echo "performance regression — blocking merge"
  exit 1
fi
```
