---
title: "Guía de Prompts Estructurados para Interpretación de Normativa Urbanística"
description: "Plantillas de prompting con esquemas JSON para auditar memorias técnicas frente a ordenanzas municipales."
category: "resource"
date: "2026-09-18"
tags:
  - "Prompts"
  - "Normativa"
  - "Workflow"
status: "published"
featured: true
resourceType: "Prompt Guide"
---

# Guía de Prompts Estructurados para Interpretación de Normativa Urbanística

Esta guía proporciona directrices para consultar códigos de edificación locales minimizando alucinaciones mediante la técnica *Few-Shot Chain of Thought* y respuestas forzadas en JSON.

## Estructura del Prompt Base

```text
Actúa como revisor técnico urbanístico. Analiza el siguiente extracto de la normativa de edificación respecto a la parcela propuesta:

[INSERTAR NORMA: Parámetros urbanísticos - Retiros, Altura Máxima, Ocupación]

Revisa el siguiente proyecto preliminar:
- Altura propuesta: [X] m
- Retiro frontal: [Y] m
- Coeficiente de ocupación: [Z] %

Genera un informe con los siguientes campos:
1. "cumplimiento": booleano
2. "articulo_afectado": número de artículo
3. "observacion_tecnica": justificación sin inferencias no citadas
```

## Reglas de Validación
1. No aceptar suposiciones si un dato dimensional no se especifica en la memoria.
2. Citar textualmente el numeral de la ordenanza aplicable.
