---
title: Prompt attachments
description: Send images, PDFs, CSVs, and docs to Lovable alongside a prompt.
---

Since **v0.1.2**, lovagentic can attach reference files to any prompt. Lovable uses them just like it does in the web UI — as additional context for the agent.

## Supported file types

- **Images** — PNG, JPG, WEBP, SVG
- **Documents** — PDF, TXT, MD
- **Data** — CSV, JSON

Up to the same limits Lovable enforces in the web UI (typically ~20 MB per file, multiple per prompt).

## Attach on `prompt` or `chat`

```bash
lovagentic chat \
  --id <project-id> \
  --prompt "Match the visual style in the attached reference image." \
  --attach ./design/hero.png
```

Pass `--attach` multiple times for multiple files:

```bash
lovagentic chat \
  --id <project-id> \
  --prompt "Use the spec in the PDF and the sample data from the CSV." \
  --attach ./specs/v2.pdf \
  --attach ./data/sample.csv
```

## Standalone `attach` command

Sometimes you want to load context into Lovable without sending a prompt yet — so you can send a small follow-up prompt afterwards and have Lovable already "know" the reference:

```bash
lovagentic attach --id <project-id> --file ./brand/logo.svg
# ... later ...
lovagentic chat --id <project-id> --prompt "Put the logo in the header."
```

## Answering questions with attachments

When the Lovable agent asks you a question mid-build, you can respond **and** upload a reference in the same answer:

```bash
lovagentic answer \
  --id <project-id> \
  --text "Use the design in the attached mockup." \
  --attach ./mockups/dashboard-v3.png
```

## Use cases

- **Pixel-perfect UI replication** — attach Figma exports, Dribbble shots, competitor screenshots
- **Data-driven apps** — attach CSV/JSON and ask Lovable to build a UI around it
- **Spec-first development** — attach a one-page PDF product brief and say "build this"
- **Brand consistency** — `attach` your logo and brand guidelines once at project creation

## Notes

- Attachments are uploaded to Lovable's storage via the web UI flow; your file leaves your machine
- lovagentic does not re-encode or modify files before upload
- Make sure your files don't contain secrets — treat them like any other third-party AI input
