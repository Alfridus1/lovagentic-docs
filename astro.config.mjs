// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.lovagentic.com",
  integrations: [
    starlight({
      title: "lovagentic",
      description: "Agentic CLI for Lovable.dev — docs, guides, and API reference.",
      logo: { src: "./public/favicon.svg", replacesTitle: false },
      favicon: "/favicon.svg",
      customCss: ["./src/styles/custom.css"],
      head: [
        {
          tag: "meta",
          attrs: { name: "theme-color", content: "#6366f1" }
        }
      ],
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/Alfridus1/lovagentic" },
        { icon: "npm", label: "npm", href: "https://www.npmjs.com/package/lovagentic" }
      ],
      editLink: {
        baseUrl: "https://github.com/Alfridus1/lovagentic-docs/edit/main/"
      },
      sidebar: [
        {
          label: "Getting started",
          items: [
            { label: "What is lovagentic?", slug: "start/what-is-lovagentic" },
            { label: "Install", slug: "start/install" },
            { label: "First run", slug: "start/first-run" },
            { label: "Troubleshooting", slug: "start/troubleshooting" }
          ]
        },
        {
          label: "Guides",
          items: [
            { label: "Driving Lovable from scripts", slug: "guides/scripting" },
            { label: "CI/CD with GitHub Actions", slug: "guides/ci" },
            { label: "Batch operations", slug: "guides/batch" },
            { label: "Prompt attachments", slug: "guides/attachments" },
            { label: "AI agent integration (MCP)", slug: "guides/mcp" },
            { label: "Migrating from the web UI", slug: "guides/migrating" }
          ]
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" }
        },
        {
          label: "About",
          items: [
            { label: "Roadmap", slug: "about/roadmap" },
            { label: "Changelog", slug: "about/changelog" },
            { label: "FAQ", slug: "about/faq" }
          ]
        }
      ]
    })
  ]
});
