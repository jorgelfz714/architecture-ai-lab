---
name: architecture-ai-lab
description: Workflow automatizado para procesar ideas arquitectónicas, investigar hechos, estructurar artículos MDX/Markdown, validar metadatos Zod e integrarlos en Architecture AI Lab.
---

# Skill: Architecture AI Lab Editorial Workflow

Este skill guía la conversión de una idea o consulta de Jorge Ludeña en una publicación completa para el laboratorio.

## 1. Clasificación Editorial

Al recibir una idea o tema de Jorge:
- **`work`**: Si es un proyecto integral, metodología de diseño profunda o investigación extensa.
- **`experiments`**: Si evalúa una herramienta concreta, un prompt, un pipeline generativo o análisis espacial con pregunta/hipótesis.
- **`notes`**: Si es una observación breve, reseña de un paper, fragmento de pensamiento o micro-análisis.
- **`resources`**: Si es un prompt reusable, guía paso a paso, plantilla o recopilación de herramientas.

## 2. Estructura Frontmatter Estándar

Toda entrada en `src/content/{collection}/{slug}.mdx` (o `.md`) debe incluir:

```yaml
---
title: "Título claro y directo (sin clickbait)"
description: "Resumen conciso en 1 o 2 oraciones."
category: "work" | "experiment" | "note" | "resource"
date: "AAAA-MM-DD"
tags:
  - "Arquitectura"
  - "IA"
status: "draft" | "ready" | "published"
featured: false
---
```

### Estructura para Experimentos (`src/content/experiments/`):
- **Pregunta / Objetivo:** Qué se buscaba responder.
- **Hipótesis:** Qué se esperaba que ocurriera.
- **Herramientas & Entorno:** Modelos, software, scripts utilizados.
- **Proceso:** Metodología paso a paso.
- **Resultados:** Datos, capturas o descripciones de salida.
- **Qué funcionó:** Hallazgos positivos.
- **Qué falló / Limitaciones:** Errores o sesgos observados.
- **Conclusión y Siguientes Pasos:** Aprendizajes aplicables a la arquitectura.

## 3. Checklist Pre-Publicación
Antes de solicitar la aprobación de Jorge:
1. Validar que no contenga afirmaciones no respaldadas (distinguir HECHO de INTERPRETACIÓN).
2. Verificar que los metadatos cumplan con el esquema Zod de `src/content.config.ts`.
3. Ejecutar `npm run build` para asegurar que Astro compila sin advertencias ni errores.
4. Generar el reporte de cambio según el formato estándar.
