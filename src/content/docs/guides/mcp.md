---
title: AI agent integration (MCP)
description: Expose lovagentic to Claude Desktop, Cursor, Codex, and other MCP clients.
---

:::note[Coming in v0.2]
The MCP backend scaffold is in the v0.1.x line already. The actual MCP handshake lights up the moment Lovable publishes their official MCP — expected very soon. This page documents what the integration will look like.
:::

## What is MCP?

The **Model Context Protocol** is an open specification for exposing tools to AI agents. It's what Claude Desktop, Cursor, and an increasing number of agent frameworks use to discover and call external capabilities.

When Lovable ships their official MCP server, lovagentic v0.2 will use it as a backend — ~10× faster than browser automation, fully supported, still reachable through the same CLI.

## Claude Desktop

Edit `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows):

```json
{
  "mcpServers": {
    "lovagentic": {
      "command": "npx",
      "args": ["-y", "lovagentic@latest", "mcp"],
      "env": {
        "LOVAGENTIC_PROFILE_DIR": "/Users/YOUR_USER/.lovagentic/profile"
      }
    }
  }
}
```

Restart Claude Desktop. You can now ask Claude things like:

> List my Lovable projects. Add a CRM to the one called "demo" using this prompt: ...

And Claude will call lovagentic tools directly.

## Cursor

Save at `~/.cursor/mcp.json` or `.cursor/mcp.json` in the workspace:

```json
{
  "mcpServers": {
    "lovagentic": {
      "command": "npx",
      "args": ["-y", "lovagentic@latest", "mcp"]
    }
  }
}
```

## Codex / OpenAI Agents SDK

Register lovagentic as an MCP server in your agent config. See the [OpenAI MCP docs](https://platform.openai.com/docs/guides/agents-mcp) for the current registration format.

## What tools lovagentic exposes via MCP

All the CLI commands, one-to-one:

- `list` · `get` · `create` · `delete`
- `prompt` · `chat` · `answer` · `attach`
- `publish` · `unpublish` · `domain.connect` · `domain.disconnect`
- `verify` · `speed` · `errors.list` · `errors.fix`
- `knowledge.get` · `knowledge.set`
- `git.connect` · `git.disconnect`

Return schemas match the `--json` CLI output exactly — what you script on the CLI maps 1:1 to what your agent sees.

## Coming in v0.2

- MCP-native transport (server-sent events or stdio)
- Session management via OIDC token (no session archive copies)
- Streaming prompt responses
- Native "wait for idle" as a tool result instead of a polling loop

## Example configs in the repo

- [`examples/claude-desktop-mcp-config.json`](https://github.com/Alfridus1/lovagentic/blob/main/examples/claude-desktop-mcp-config.json)
- [`examples/cursor-mcp-config.json`](https://github.com/Alfridus1/lovagentic/blob/main/examples/cursor-mcp-config.json)
