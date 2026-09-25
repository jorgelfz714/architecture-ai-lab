# Architecture AI Lab — Google Antigravity Project Specification

## 1. Project Identity

**Architecture AI Lab** is a personal digital laboratory by Jorge Ludeña exploring the intersection of:

- Architecture
- Artificial Intelligence
- Design
- Research
- Automation
- Education
- Housing
- Sustainability
- Digital tools
- New architectural workflows

This is **not a conventional portfolio**. It is a living editorial and experimental platform whose content evolves through AI-assisted creation.

### Core principle

> Jorge selects and directs. The AI researches, develops, structures, designs, implements and prepares publication.

The objective is to minimize Jorge's operational work while preserving his intellectual and editorial control.

---

# 2. Objectives

## Primary objective

Create a personal website where Jorge can provide a simple idea, topic, question or reference and the AI can progressively handle most of the work required to transform it into a polished web publication.

Example:

> "Where AI actually works in AEC" 1. 
Abstract
I have spent a lot of time on one question: why does AI so often fall short in AEC? Not whether it works, but which parts work, which parts do not, and where the ceiling is low. This is where I have landed so far.

The agent should be able to:

1. Understand the idea.
2. Classify the content.
3. Research when necessary.
4. Develop the concept.
5. Write the content.
6. Structure the publication.
7. Prepare visual assets when appropriate.
8. Create the Markdown/MDX file.
9. Integrate it into the website.
10. Test the website.
11. Present the result to Jorge for review.
12. Publish after approval.

---

# 3. Jorge's Role

Jorge is:

- Director
- Curator
- Editor
- Final decision maker

Jorge should primarily:

- choose topics;
- provide ideas;
- select interesting experiments;
- provide references;
- evaluate results;
- approve or reject publications.

Jorge should **not** have to:

- manually create web pages;
- manually format every article;
- manually upload every publication;
- manage a CMS;
- maintain repetitive technical workflows.

---

# 4. Agent Role

Google Antigravity + Gemini acts as the operational partner.

The agent is responsible for:

### Editorial

- proposing topics;
- developing ideas;
- writing;
- editing;
- creating titles;
- creating descriptions;
- creating tags;
- structuring content.

### Research

- researching current information;
- identifying relevant references;
- checking factual claims;
- distinguishing facts from interpretation.

### Design

- applying the site's visual language;
- structuring layouts;
- creating cards;
- arranging images;
- maintaining visual consistency.

Design references for information organization and visual style:

- [archaiflow.com](https://archaiflow.com/) — Primary reference for content structure, card layout, and editorial tone. An AI + Architecture lab with a minimal, warm, editorial approach.
- [anthropic.com](https://www.anthropic.com/) — Reference for typographic hierarchy: bold serif headlines, generous whitespace, restrained color palette (warm off-white background + black text + minimal accent).
- Claude Code presentations — Reference for clean information hierarchy: large serif titles, icon-based feature lists with short descriptions, and structured content blocks.

The agent should study these references before making design decisions.

### Development

- creating files;
- modifying components;
- creating pages;
- creating Markdown/MDX content;
- improving styles;
- running tests;
- fixing errors.

### Publication

- preparing Git commits;
- pushing approved changes to GitHub;
- allowing Netlify to deploy the website.

Major editorial publications require Jorge's approval before publication.

---

# 5. Technology Stack

The initial stack should remain deliberately simple.

| Layer | Technology |
|---|---|
| AI / Agent | Google Antigravity + Gemini |
| Web framework | Astro |
| Content | Markdown / MDX |
| Programming | TypeScript when necessary |
| Styling | CSS |
| Version control | Git |
| Repository | GitHub |
| Hosting / deployment | Netlify |
| Database | None |
| CMS | None initially |
| Backend | None initially |
| External APIs | None initially |

## Cost target

The V1 should target **$0 recurring cost**.

Do not introduce paid services without explicit approval.

If a proposed solution introduces a cost, report:

**COST IMPACT: YES**

and explain:

- expected cost;
- reason;
- free alternative.

---

# 6. Why Astro

Astro is preferred because this project is primarily:

- editorial;
- content-driven;
- visual;
- fast;
- mostly static;
- suitable for Markdown/MDX.

Avoid unnecessary application complexity.

Do not introduce React, databases, authentication, backend services or other frameworks unless a real requirement appears.

---

# 7. Website Structure

Primary navigation:

- Home
- Work
- Experiments
- Notes
- Resources
- About

## Home

The homepage should show:

- identity of the lab;
- short introduction;
- featured work;
- recent experiments;
- recent notes;
- selected resources.

It should feel like a **digital laboratory**, not a conventional CV.

## Work

More developed projects, investigations, systems and prototypes.

Possible structure:

- Context
- Problem
- Process
- Development
- Result
- Reflection
- Tools
- Images

## Experiments

The core experimental section.

Examples:

- testing an AI tool;
- testing an architectural workflow;
- prompt experiments;
- AI-assisted analysis;
- automation experiments;
- architectural prototyping;
- comparisons between tools;
- educational experiments.

Experiments should be concrete and easy to consume.

Possible structure:

- Question
- Hypothesis
- Tool
- Process
- Result
- What worked
- What failed
- Conclusion

## Notes

Shorter content:

- ideas;
- observations;
- references;
- questions;
- reflections;
- interesting tools;
- emerging trends.

Notes do not need to become long articles.

## Resources

Reusable knowledge:

- prompts;
- workflows;
- tools;
- references;
- templates;
- methods;
- tutorials;
- resources for architects.

## About

A concise presentation of Jorge and the intellectual purpose of the lab.

---

# 8. Content Philosophy

Prefer **concrete experiments over generic commentary**.

Prefer:

> "Where AI actually works in AEC"

over:

> "Artificial intelligence is transforming architecture."

The lab should demonstrate:

- practice;
- experimentation;
- evidence;
- critical thinking;
- useful workflows;
- limitations;
- results.

Avoid:

- AI hype;
- generic statements;
- clickbait;
- unsupported claims;
- repetitive content;
- unnecessarily long articles.

---

# 9. Content Types

Every publication belongs to one of:

- `work`
- `experiment`
- `note`
- `resource`

If classification is unclear, ask Jorge.

---

# 10. Repository Structure

Recommended structure:

```text
architecture-ai-lab/
│
├── AGENTS.md
├── README.md
├── package.json
├── astro.config.mjs
├── tsconfig.json
├── netlify.toml
├── .gitignore
│
├── .agents/
│   ├── rules/
│   │   └── architecture-ai-lab.md
│   │
│   └── skills/
│       └── architecture-ai-lab/
│           └── SKILL.md
│
├── public/
│   └── images/
│
└── src/
    ├── content/
    │   ├── work/
    │   ├── experiments/
    │   ├── notes/
    │   └── resources/
    │
    ├── components/
    ├── layouts/
    ├── pages/
    ├── styles/
    └── assets/
```

The agent should create the required files rather than requiring Jorge to create them manually.

---

# 11. Content Format

Use Markdown or MDX.

Example:

```yaml
---
title: "Where AI actually works in AEC"
description: "Where AI actually works in AEC. I have spent a lot of time on one question: why does AI so often fall short in AEC? Not whether it works, but which parts work, which parts do not, and where the ceiling is low. This is where I have landed so far."
category: "experiment"
date: "2026-09-11"
tags:
  - AI
  - Architecture
  - AEC
status: "draft"
featured: false
---
```

Maintain consistent metadata.

---

# 12. Editorial Workflow

Every substantial publication follows:

```text
IDEA
  ↓
INTERPRETATION
  ↓
CLASSIFICATION
  ↓
RESEARCH
  ↓
DEVELOPMENT
  ↓
DRAFT
  ↓
DESIGN
  ↓
IMPLEMENTATION
  ↓
TESTING
  ↓
JORGE REVIEW
  ↓
APPROVAL
  ↓
GITHUB
  ↓
NETLIFY
  ↓
PUBLICATION
```

The agent should not unnecessarily ask Jorge to perform intermediate technical tasks.

---

# 13. Interaction Example

Jorge may say:

> "I want to make something about "Artificial intelligence is transforming architecture."

The agent should:

1. Identify possible directions.
2. Propose a concise editorial angle.
3. Ask only questions that are genuinely necessary.
4. Research if required.
5. Develop the content.
6. Create the publication.
7. Integrate it into the website.
8. Test it.
9. Show Jorge what was done.
10. Wait for approval.
11. Publish after approval.

The intended experience is:

> **Jorge provides the idea. The agent does the operational work.**

---

# 14. Design Direction

The visual identity should feel:

- architectural;
- editorial;
- contemporary;
- experimental;
- intelligent;
- restrained;
- visually strong.

The style should be **simple and minimalist**.

Avoid:

- generic startup aesthetics;
- excessive gradients;
- excessive animations;
- dashboard-like interfaces;
- generic "AI" visual clichés;
- unnecessary visual effects;
- over-decorated components;
- heavy drop shadows or glass effects.

The website should feel like:

**Architecture + Research + Laboratory + Digital Culture**

rather than:

**another generic AI website.**

## Design References

The following sites serve as visual and organizational references:

### archaiflow.com (Primary reference)

URL: [https://archaiflow.com/](https://archaiflow.com/)

Relevant patterns to adopt:

- **Information architecture:** Hero section with personal identity + bio, then content grid, then contact/CTA. Simple and direct.
- **Card layout:** 3-column responsive grid. Each card has: thumbnail image (rounded corners), title, date (`YYYY-MM-DD` format), and a 1–2 sentence description. Cards have thin light borders and subtle hover effect (border darkens).
- **Article pages:** Back-breadcrumb navigation (`← back to works`), date + category tag, large serif title, lead summary, then numbered steps with clear structure.
- **Section headers:** Small uppercase sans-serif with extended letter spacing (e.g., `WORKS`, `WORK WITH ME`).
- **Collapsible content:** `<details>/<summary>` accordions for secondary information.
- **Content philosophy:** Problem-focused titles ("Revit Schedules in Notion"), practical methodology, transparent about what worked and what failed.

### anthropic.com (Typographic reference)

URL: [https://www.anthropic.com/](https://www.anthropic.com/)

Relevant patterns to adopt:

- **Bold serif headlines** with generous scale and weight.
- **Warm off-white background** (`~#f5f0e8`) with deep black text.
- **Extreme whitespace** — content breathes, sections are widely spaced.
- **Minimal accent usage** — one or two highlight colors at most.
- **Clean navigation bar** with simple text links.

### Claude Code (Information hierarchy reference)

Relevant patterns to adopt:

- **Large serif title** as focal point.
- **Icon + title + description** pattern for feature lists.
- **Structured content blocks** with clear visual separation.
- **Monochrome palette** with minimal decoration.

## Visual System Specifications

### Color Palette

| Token | Usage | Reference Value |
|---|---|---|
| `--background` | Page canvas | Warm off-white (`#e8e8e6` to `#f5f0e8` range) |
| `--surface` | Cards, panels | White (`#ffffff`) |
| `--foreground` | Primary text | Near-black (`#1c1c1c`) |
| `--muted` | Secondary text, dates, metadata | Slate gray (`#666666`) |
| `--border` | Card borders, dividers | Light gray (`#e4e4e7`) |
| `--accent` | Links, CTAs, highlights | Warm tone — terracotta, clay, or muted warm color |

The palette should remain restrained. **No more than two accent colors** in the entire site.

### Typography

Use a pairing of **serif + sans-serif** fonts.

| Role | Font Type | Example Fonts | Size Range |
|---|---|---|---|
| Site title, headings (H1, H2) | Serif | Source Serif 4, Newsreader, Playfair Display | 32–42px |
| Navigation, body, metadata, UI | Sans-serif | Inter, IBM Plex Sans, system sans | 14–16px |
| Dates, tags, code | Monospace | JetBrains Mono, IBM Plex Mono | 12–14px |

Heading weights: **bold (700)**. Body weights: **regular (400)**.

Section labels (e.g., `WORKS`, `EXPERIMENTS`) should use: small uppercase sans-serif, extended letter spacing (`0.12–0.18em`), muted color.

### Layout

- **Max content width:** ~1000–1140px, centered.
- **Content grid:** 3-column grid on desktop, 2-column on tablet, 1-column on mobile.
- **Vertical rhythm:** 40–60px gaps between major sections.
- **Card design:** Thin border (`1px solid var(--border)`), rounded corners (`12px`), internal padding (`16–20px`), thumbnail image at top with rounded corners.
- **Card hover:** Border color transitions from light to slightly darker.

### Component Patterns

| Component | Specification |
|---|---|
| **Cards** | Image + title + date + description. Thin border, rounded corners. |
| **Section labels** | Uppercase, small, tracked, muted. |
| **Article header** | Breadcrumb → date + tag → serif title → lead paragraph. |
| **Buttons** | Solid accent background for primary CTA. Outlined for secondary. |
| **Accordions** | `<details>/<summary>` for collapsible setup instructions or secondary info. |
| **Code/prompt blocks** | Monospace, bordered, with optional copy button. |

---

# 15. Responsive Design

The website must work properly on:

- desktop;
- tablet;
- mobile.

Do not design exclusively for desktop.

---

# 16. Performance

Prefer:

- static generation;
- optimized images;
- minimal JavaScript;
- simple architecture;
- fast loading.

Do not add client-side complexity unless it is necessary.

---

# 17. SEO

Each published page should have:

- title;
- description;
- appropriate headings;
- canonical metadata when appropriate;
- social metadata when appropriate.

SEO should support the editorial project rather than determine its content.

---

# 18. Research Rules

When a publication depends on current or factual information:

- use reliable sources;
- verify important claims;
- distinguish fact from interpretation;
- do not invent sources;
- do not invent data;
- do not present assumptions as facts.

When appropriate, clearly distinguish:

- FACT
- INTERPRETATION
- EXPERIMENT
- OPINION

---

# 19. Autonomy Rules

The agent may freely:

- read project files;
- create files;
- edit files;
- create drafts;
- improve layouts;
- run tests;
- fix bugs;
- improve responsive behavior;
- prepare content.

The agent must request approval before:

- deleting important content;
- changing the fundamental stack;
- introducing paid services;
- adding APIs with costs;
- radically changing the visual identity;
- publishing substantial editorial content.

---

# 20. GitHub

GitHub is the source repository.

Use meaningful commits.

Examples:

```text
feat: add AI housing experiment
feat: add new note
design: refine experiment cards
fix: improve mobile navigation
```

Avoid meaningless commits.

---

# 21. Netlify

Netlify is the deployment platform.

Expected deployment:

```text
GitHub
   ↓
Netlify
   ↓
Production website
```

Once connected, approved GitHub changes should trigger deployment automatically.

Do not require Jorge to manually upload website files.

---

# 22. Change Report

After meaningful work, report:

## WHAT CHANGED

Created and modified files.

## WHY

Purpose of the changes.

## RESEARCH

Sources or research performed.

## DESIGN

Important visual decisions.

## VERIFICATION

Tests performed.

## STATUS

Use:

- DRAFT
- READY FOR REVIEW
- APPROVED
- PUBLISHED
- BLOCKED

---

# 23. Error Handling

If something fails:

1. Diagnose the problem.
2. Explain it briefly.
3. Attempt a safe fix.
4. Test again.
5. Report the result.

Never hide errors.

---

# 24. Antigravity Skills

Use `.agents/skills/` for specialized reusable workflows.

Initial skill:

```text
.agents/
└── skills/
    └── architecture-ai-lab/
        └── SKILL.md
```

The skill should manage:

- content creation;
- research;
- editorial workflow;
- publication preparation;
- website integration.

Do not create a multi-agent architecture in V1.

Start with one primary agent and add specialized agents only when a real limitation appears.

---

# 25. Future Architecture

Possible future system:

```text
JORGE
  ↓
GEMINI / ANTIGRAVITY
  ↓
RESEARCH
  ↓
EDITORIAL
  ↓
DESIGN
  ↓
CONTENT
  ↓
REVIEW
  ↓
GITHUB
  ↓
NETLIFY
```

This is a future direction, not a V1 requirement.

Do not over-engineer the project.

---

# 26. V1 Priority

The immediate objective is to prove one thing:

```text
Jorge gives an idea
        ↓
AI develops it
        ↓
AI creates the content
        ↓
AI integrates it
        ↓
Jorge reviews it
        ↓
Approved content is published
```

Everything else is secondary.

---

# 27. FIRST ANTIGRAVITY TASK

After placing this `AGENTS.md` in the project root, tell Antigravity:

> Read `AGENTS.md` completely.
>
> Do not build the full website yet.
>
> Analyze the project requirements and propose the minimum technical architecture for V1.
>
> Identify anything in the proposed stack that is unnecessary or overly complex.
>
> Explain how the workflow can eventually allow Jorge to provide an idea and have the agent research, write, design, implement and prepare the publication with minimal manual work.
>
> Do not introduce paid services.
>
> Do not introduce a CMS, database or backend unless you can demonstrate that it is necessary.
>
> Before making major architectural changes, present the plan for review.

---

# 28. Golden Rule

The project should always optimize for:

**Maximum intellectual output from Jorge with minimum operational work by Jorge.**

Jorge provides:

- direction;
- curiosity;
- judgment;
- ideas;
- approval.

The AI provides:

- research;
- development;
- writing;
- design;
- implementation;
- testing;
- technical maintenance;
- publication preparation.

The website is itself an experiment in **AI-assisted architectural knowledge production**.

---

# 29. Pre-Publication Review

Before any content is published, the agent must present the **complete page** to Jorge for review.

This is not a summary or a text preview. The agent must show the actual rendered page with all its details:

- final layout and visual design;
- typography (headings, body, metadata);
- all images, diagrams and visual assets in place;
- card appearance (thumbnail, title, date, description);
- frontmatter metadata (title, description, category, tags, date, status);
- responsive behavior (desktop, tablet, mobile);
- internal and external links working;
- navigation and breadcrumbs;
- SEO metadata (title tag, meta description);
- reading flow and content structure;
- overall visual consistency with the rest of the site.

The agent should use the browser to navigate the local dev server and capture screenshots or recordings of the complete page at different viewport sizes.

### Review checklist

```text
BEFORE REQUESTING JORGE'S APPROVAL:

  □  Page renders without errors
  □  Layout matches design system (cards, grids, spacing)
  □  Typography is correct (serif headings, sans body)
  □  All images load and display at correct size
  □  Frontmatter is complete and valid
  □  Links work (internal navigation + external references)
  □  Page looks correct on mobile (≤ 480px)
  □  Page looks correct on tablet (≤ 768px)
  □  Page looks correct on desktop (≥ 1024px)
  □  Content reads well (structure, flow, length)
  □  No placeholder or draft content remains
  □  SEO metadata is present
```

### How to present

The agent should report:

1. **Screenshots** of the full page at desktop, tablet and mobile widths.
2. **Summary** of the content (title, category, word count, key sections).
3. **Any issues found** during the review.
4. **Status: READY FOR REVIEW**.

Jorge then decides:

- **APPROVED** → proceed to commit and publish.
- **CHANGES REQUESTED** → the agent applies corrections and presents again.
- **REJECTED** → the content is archived or discarded.

No content should reach GitHub without passing this review.
