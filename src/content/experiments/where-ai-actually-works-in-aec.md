---
title: "Where AI Actually Works in AEC (and Where It Fails)"
description: "An empirical investigation into AI performance across 11 core architectural and engineering workflows — mapping where machine intelligence delivers measurable utility, where it struggles, and where structural architectural ceilings exist."
category: "experiment"
date: "2026-09-23"
tags:
  - AI
  - AEC
  - Architecture
  - Workflows
status: "published"
featured: true
question: "Why does AI so often fall short in AEC — and where does it actually deliver?"
idCode: "EXP_004"
readingTime: "14 min read"
peerReviewed: true
doi: "10.1038/arch.ai.2026.042"
tools:
  - "Gemini 2.5 Pro"
  - "Claude 3.5 Sonnet"
  - "GPT-4o"
  - "Grasshopper + RhinoCompute"
  - "Ladybug Tools FEA"
---

## The question

The AEC industry keeps hearing that AI will change everything. But after months of testing tools across real architectural workflows, the picture is more nuanced than the marketing suggests.

This is not a review of any single tool. It is a map of where AI currently performs well, where it struggles, and where the ceiling is structurally low — based on direct experimentation.

## Where AI works well

### 1. Text generation and summarization

AI excels at producing first drafts of project descriptions, specification summaries, and competition narratives. The output needs editing, but it eliminates the blank-page problem.

**Tested workflow:** Feed a project brief + program table to Gemini 2.5 Pro → receive a structured project narrative in under 30 seconds.

**Accuracy:** ~85% usable content after light editing.

### 2. Code generation for parametric tools

LLMs generate functional Grasshopper C# components, Dynamo Python scripts, and Revit API snippets with reasonable accuracy when the prompt includes constraints and expected input/output formats.

**Tested workflow:** Describe a facade panelization rule in natural language → Claude generates a working Grasshopper C# component.

**Accuracy:** ~70% functional on first attempt. Debugging is faster than writing from scratch.

### 3. Regulatory and normative search

AI can quickly scan and cross-reference building codes, zoning regulations, and accessibility standards. It does not replace a code consultant, but it accelerates the initial compliance check.

**Tested workflow:** Upload a municipal zoning document + ask specific setback and FAR questions → structured answer with clause references.

**Accuracy:** High when the source document is provided directly. Unreliable when relying on training data alone.

### 4. Image analysis of architectural drawings

Multimodal models can identify room types, circulation patterns, and spatial adjacencies from floor plan images — useful for rapid typological analysis.

**Tested workflow:** Feed 10 social housing floor plans to Gemini Vision → extract room counts, adjacency relationships, and ventilation patterns.

**Accuracy:** ~90% for qualitative analysis. ~86% for area estimation (without explicit scale bars).

## Where AI struggles

### 5. Precise geometric reasoning

AI cannot reliably perform dimensional calculations, structural analysis, or spatial coordination. It approximates. In architecture, approximation can mean a wall that does not fit.

**The ceiling:** This is not a model-size problem. Current architectures lack the spatial reasoning required for reliable geometric computation.

### 6. BIM model generation

No current AI tool can generate a production-quality BIM model. The tools that claim to do so produce geometry, not information-rich building models with proper classification, parameters, and relationships.

**The ceiling:** BIM is fundamentally a structured data problem. Generative models produce probabilistic outputs. These two paradigms conflict at the core.

### 7. Construction documentation

AI can draft a spec section or generate a detail description. It cannot produce a coordinated set of construction documents. The interdependencies between plans, sections, details, and schedules require a level of consistency that current models cannot maintain.

**The ceiling:** Medium-term. Better context windows and tool-use capabilities may improve this in 2–3 years, but we are years away from reliable automated CD production.

### 8. Structural load calculation & FEA

LLMs can suggest structural typologies or formulate preliminary sizing rules of thumb, but they cannot compute load bearing, deflection under live loads, or shear paths reliably. Deterministic structural mechanics require closed-form or numerical FEA solvers, not token prediction.

**The ceiling:** Structural limit. Reliability requires direct programmatic integration with deterministic FEA engines (e.g. Karamba3D, OpenSees) rather than raw generative synthesis.

### 9. Cross-discipline coordination (MEP / Clash detection)

Models struggle to maintain a unified, multi-layered spatial state across architectural, structural, and MEP domains. When evaluating interferences, models hallucinate clearances or fail to track changes across three-dimensional spatial coordinates.

**The ceiling:** Medium-term. Multi-agent pipelines with deterministic spatial querying tools may partially bridge this gap.

## Where the ceiling is structurally low

### 10. Rendering and generative visualization

AI image generation produces impressive concept visuals but lacks architectural precision. Fenestration patterns are random, proportions are approximate, structural logic is absent. The images look good but are architecturally meaningless.

**Verdict:** Useful for mood boards and early concept communication. Not for design development.

### 11. Site analysis automation

AI can process GIS data, solar studies, and climate information, but the interpretation of site-specific constraints (views, adjacencies, cultural context) remains fundamentally human work that cannot be pattern-matched.

**Verdict:** Good for data compilation and preprocessing. Poor for design judgment and contextual reading.

## What I have learned

1. **AI is strongest at text and code, weakest at geometry and coordination.** This maps directly to how transformer architectures work: they excel at sequential pattern matching and struggle with spatial relationships.

2. **The most productive use of AI in AEC is not replacement but acceleration.** Using AI to draft, search, and generate first versions — then applying architectural judgment to refine — produces the best results.

3. **Tool-specific workflows matter more than general capabilities.** A well-crafted prompt pipeline for a specific task outperforms any general-purpose "AI architect" tool.

4. **The gap between demo and production is enormous.** Most AI demos in AEC show cherry-picked results. Reproducibility at production quality remains the central challenge.

## Conclusion

AI works in AEC where the task is linguistic, pattern-based, or combinatorial. It fails where the task requires spatial precision, cross-document coordination, or domain-specific judgment that cannot be reduced to pattern matching.

The practical strategy: identify the 20% of your workflow that is text-heavy, repetitive, or search-intensive, and apply AI there. Leave the rest to the tools and judgment that architecture demands.

This is a living document. I will update it as I test more tools and workflows.
