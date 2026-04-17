---
title: Environment variables
description: All LOVAGENTIC_* / LOVABLE_* variables lovagentic reads.
---

## Profile paths

| Variable | Default | What |
|---|---|---|
| `LOVAGENTIC_PROFILE_DIR` | `~/.lovagentic/profile` | Playwright persistent context dir |
| `LOVAGENTIC_DESKTOP_PROFILE_DIR` | `~/Library/Application Support/lovable-desktop` (macOS) | Lovable desktop app profile (read-only for lovagentic) |

## Lovable endpoints

| Variable | Default | What |
|---|---|---|
| `LOVABLE_BASE_URL` | `https://lovable.dev` | Base URL for all Lovable pages |

## MCP backend (v0.2+)

| Variable | What |
|---|---|
| `LOVABLE_MCP_URL` | MCP server endpoint (stdio command or HTTPS URL) |
| `LOVABLE_MCP_TOKEN` | Bearer token if the MCP transport needs one |
| `LOVABLE_MCP_TRANSPORT` | `stdio` · `http` · `websocket` — usually auto-detected |

## Developer / diagnostic

| Variable | What |
|---|---|
| `LOVAGENTIC_DEBUG` | Set to any truthy value for verbose logging |

## Priority

CLI flags always win over environment variables. Environment variables win over the built-in defaults. There is no config file — everything is explicit.
