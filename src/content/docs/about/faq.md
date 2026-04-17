---
title: FAQ
description: Answers to the questions people ask most about lovagentic.
---

## Is lovagentic an official Lovable product?

No. lovagentic is an open-source community CLI. It's maintained by [Tobias Kub](https://github.com/Alfridus1) at [COPPEN GmbH](https://coppen.energy) in Germany. Lovable.dev is aware of it and the v0.2 MCP integration is coordinated with them.

## Does lovagentic use an API key or official Lovable API?

No. Today (v0.1.x) lovagentic drives Lovable through its web UI using your own session — the same session you use when you log into lovable.dev yourself. No API access is required and it works on every Lovable tier.

When Lovable's official MCP ships, v0.2 will use it as the primary backend.

## Can I use lovagentic in CI/CD?

Yes — that's a first-class use case. See the [CI/CD guide](/guides/ci). You package your Lovable session as a base64 archive, store it in a GitHub secret, and the runner uses it just like your laptop would.

Starting in v0.2, CI will use MCP with an OIDC-issued token, eliminating the session-archive step.

## What's the relationship with Lovable's Terms of Service?

lovagentic is a thin automation layer that uses your own authenticated Lovable session. It doesn't scrape, doesn't evade rate limits, doesn't access anyone else's data. You are responsible for using it within your Lovable plan's terms.

## Will Lovable break lovagentic when they update the web UI?

The browser-first backend occasionally needs fixes when Lovable changes class names or DOM structure. That's part of the trade-off of browser automation, and it's been stable over the 100+ projects COPPEN has run through it.

Once v0.2 MCP lands, this risk goes away for the MCP-covered commands.

## What's the license?

**MIT.** You can use it for anything, including commercial work, without asking permission.

## How do I contribute?

1. Check [open issues](https://github.com/Alfridus1/lovagentic/issues) and the [Ideas category](https://github.com/Alfridus1/lovagentic/discussions/categories/ideas)
2. Drop a note in [Show and tell](https://github.com/Alfridus1/lovagentic/discussions/categories/show-and-tell) or [Q&A](https://github.com/Alfridus1/lovagentic/discussions/categories/q-a) describing what you want to try
3. Fork, branch, PR — CI runs Playwright + unit tests

## Can I use lovagentic with my team?

Yes. Shared patterns:

- **Shared recipes** — commit `prompts/` and `build.sh` to a repo; every team member runs identical builds
- **Shared CI** — one Lovable session archive per project in the target repo's secrets
- **Shared project IDs** — store in `.env`, read via the CLI's environment variables

Nothing is coupled to a single user.

## Is there a hosted version?

Not yet. A lightweight hosted runner is on the v0.4 roadmap for teams who don't want to manage their own session archives or CI infra.

## Where do I report a bug?

[GitHub Issues](https://github.com/Alfridus1/lovagentic/issues). Please include `lovagentic doctor --json` output and the exact command that failed.

## Who is COPPEN and why do they maintain this?

COPPEN is a Germany-based consultancy that runs 100+ live Lovable projects for clients in energy, SaaS, and industrial workflows. lovagentic started as COPPEN's internal tooling, got polished, got open-sourced. It's maintained because we use it ourselves every day.
