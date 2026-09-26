# 🏛️ Architecture AI Lab — Bitácora de Proyecto & Control Editorial

> **Laboratorio Digital de Investigación Empírica en Arquitectura, IA y Razonamiento Espacial**  
> **Director & Curador:** Jorge Ludeña (ETSAM)  
> **Socio Operativo:** Google Antigravity (Gemini 2.5 Pro)  
> **Estado del Proyecto:** 🟢 EN PRODUCCIÓN (Publicado y Operativo)  
> **Costo Recurrente:** **$0.00 USD / mes** (Netlify Free Tier + GitHub)

---

## 📌 1. Accesos Rápidos & Enlaces de Producción

| Recurso | Enlace Directo | Descripción |
| :--- | :--- | :--- |
| **Sitio Web Oficial** | [architecture-ai-lab.netlify.app](https://architecture-ai-lab.netlify.app/) | Producción en vivo con SSL y CDN global |
| **Repositorio GitHub** | [github.com/jorgelfz714/architecture-ai-lab](https://github.com/jorgelfz714/architecture-ai-lab) | Código fuente, colecciones y pipelines de CI/CD |
| **Dossier Activo (EXP_004)** | [/experiments/where-ai-actually-works-in-aec](https://architecture-ai-lab.netlify.app/experiments/where-ai-actually-works-in-aec) | Benchmark empírico canónico con diseño Auralis |
| **Google Stitch Archive** | [/Google_Stitch/index.html](https://architecture-ai-lab.netlify.app/Google_Stitch/index.html) | Repositorio multi-versión de diagramación |
| **Panel de Netlify** | [app.netlify.com/teams/jorgelfz84](https://app.netlify.com) | Consola de despliegues y configuración DNS |

---

## 🎯 2. Principio Rector & Metodología Operativa

> **Regla de Oro:**  
> **Jorge selecciona, dirige y aprueba. Antigravity investiga, desarrolla, estructura, diseña, implementa y prepara la publicación.**

- **Filosofía del Laboratorio:** Evidencia empírica sobre comentario abstracto. Cero *hype* tecnológico o clickbait; evaluación cuantitativa de en qué tareas la IA aporta aceleración real y en cuáles tropieza con barreras físicas insalvables.
- **Flujo de Trabajo:**
  1. Jorge aporta una idea, inquietud o pregunta de investigación.
  2. Antigravity investiga el estado del arte, diseña la metodología empírica y redacta el borrador.
  3. Se estructura bajo esquemas tipados Zod en Markdown/MDX.
  4. Jorge evalúa y aprueba el diseño visual.
  5. Se publica automáticamente en Netlify al hacer `git push` a la rama `main`.

---

## 📚 3. Inventario de Contenidos Desarrollados

### 🔬 Colección: `experiments` (Ensayos Técnicos)
- **ID:** `EXP_004`
- **Título:** *Where AI Actually Works in AEC (and Where It Fails)*
- **Estado:** 🟢 `published` (Peer-Reviewed Draft)
- **DOI:** `10.1038/arch.ai.2026.042`
- **Modelos Evaluados:** Gemini 2.5 Pro, Claude 3.5 Sonnet, GPT-4o, Grasshopper + RhinoCompute, Ladybug FEA.
- **Hallazgos Clave:**
  - ✅ **Aceleración efectiva:** Búsqueda y RAG normativo (~94%), scripting paramétrico para Grasshopper (~88%), síntesis de memorias técnicas (~85%).
  - ❌ **Fallas estructurales:** Razonamiento geométrico 3D estricto (~0%), edición directa de topologías IFC, coordinación multidisciplinar automática (MEP vs. Estructura).

### 🏗️ Colección: `work` (Proyectos & Sistemas)
- **ID:** `WORK_001`
- **Título:** *Sistema Algorítmico de Clasificación Espacial para Tejidos Urbanos*
- **Estado:** 🟢 `published`
- **Enfoque:** Categorización automatizada de morfologías urbanas utilizando grafos espaciales (*Space Syntax*) y modelos de lenguaje para diagnósticos urbanos de impacto ambiental.

### 📝 Colección: `notes` (Field Notes)
- **ID:** `NOTE_001`
- **Título:** *Manifiesto: Architecture AI Lab*
- **Estado:** 🟢 `published`
- **Enfoque:** Reflexión sobre la tectónica y la curaduría crítica frente a la proliferación de renders generativos efímeros.

### 🛠️ Colección: `resources` (Recursos Reusables)
- **ID:** `RES_001`
- **Título:** *Guía de Prompts Estructurados para Interpretación de Normativa Urbanística*
- **Estado:** 🟢 `published`
- **Enfoque:** Esquemas JSON con *Few-Shot Chain of Thought* para contrastar anteproyectos con ordenanzas municipales minimizando alucinaciones.

---

## 🎨 4. Registro de Versiones de Diseño (Google Stitch)

Consolidado en la herramienta interactiva de exploración tipográfica y diagramación:

| Versión | Nombre Clave | Paleta Cromática | Características de Diagramación |
| :--- | :--- | :--- | :--- |
| **v2 (Canónica)** | `Auralis Original + Estructura Comprimida` | Piedra `#F7F7F4`, Blanco `#FFFFFF`, Dark CTA `#0D0D0D`, Mesh animado | Hero compacto con mesh gradient, subnav con navegación por pasos, tabla de contenidos con números de página, cajas de métricas y atajos de teclado (`←`/`→`/`J`/`K`). |
| **v1** | `Paper Editorial Clásico` | Pergamino `#FAFAF7`, Texto `#1A1A1A`, Bordes `#E8E8E2` | Maquetación sobria en 2 columnas, tipografía serif *Newsreader* pura, estilo paper académico tradicional. |
| **v3** | `Exploración Paper Pastel` | Salvia `#C8D7CE`, Lavanda `#E8E2F5`, Durazno `#FDE8DE` | Exploración de fondos suaves sin fondos negros, resaltados pastel y lectura relajada. |

---

## 💻 5. Stack Tecnológico & Arquitectura ($0/mes)

```text
architecture-ai-lab/
├── .agents/                    # Reglas operativas y skills de IA
│   ├── rules/architecture-ai-lab.md
│   └── skills/architecture-ai-lab/SKILL.md
├── src/
│   ├── content/                # Content Collections tipadas con Zod
│   │   ├── experiments/        # Ensayos empíricos
│   │   ├── work/               # Sistemas e investigaciones mayores
│   │   ├── notes/              # Field notes y reflexiones breves
│   │   └── resources/          # Prompts y metodologías
│   ├── layouts/BaseLayout.astro # Header sticky, nav activa, progreso de lectura
│   ├── components/Card.astro   # Tarjetas Auralis con badge de ID y hover lift
│   ├── pages/                  # Rutas estáticas generadas por Astro
│   └── styles/global.css       # Sistema de tokens minimalistas (CSS puro)
├── public/                     # Demos independientes y Google Stitch
├── netlify.toml                # Configuración de despliegue y Node 22
└── astro.config.mjs            # Salida static pura (Zero Server)
```

- **Motor:** Astro 7 (Static Mode) + MDX.
- **Tipografías:** *Inter* (UI/Cuerpo), *Newsreader* (Títulos editoriales), *JetBrains Mono* (Código y metadatos).
- **Hospedaje & CDN:** Netlify Edge Network.
- **Control de Versiones:** Git + GitHub (`main`).

---

## ⏱️ 6. Historial de Hitos de Desarrollo (Changelog)

- **2026-09-23:** Creación del dossier base sobre límites empíricos de la IA en AEC.
- **2026-09-24:** Definición de la línea estética Auralis (mesh gradient animado, frosted glass y tarjetas de métricas).
- **2026-09-24:** Integración de Google Stitch como archivo multi-versión para comparar el Paper Editorial Clásico vs. Auralis.
- **2026-09-25:** Unificación canónica: Auralis con la estructura comprimida del paper editorial (subnav de pasos, modal móvil y copia de citas DOI/BibTeX).
- **2026-09-25:** Depuración integral del código, auditoría de esquemas Zod en todas las colecciones y eliminación de archivos residuales.
- **2026-09-25:** Inicialización de Git, creación del repositorio remoto en GitHub (`jorgelfz714/architecture-ai-lab`) y push inicial.
- **2026-09-25:** Conexión con Netlify, ajuste de entorno a Node 22 y resolución de compilación para puesta en producción en vivo.

---

---

## ✅ 7. Tareas & Recordatorios Pendientes (To-Do List)

- [ ] **Navegación Móvil:** Probar la experiencia del sitio oficial en tu móvil o tablet: [https://architecture-ai-lab.netlify.app/](https://architecture-ai-lab.netlify.app/)
- [ ] **Dominio Personalizado:** Decidir si registrar y conectar un dominio propio en Netlify (ej. `architectureailab.com`).
- [ ] **Experimento 02:** Definir la hipótesis central del próximo ensayo (Predimensionado estructural con o1 / Gemini 2.5 Flash Thinking).
- [ ] **Página /about:** Revisar y personalizar el texto de presentación y trayectoria en [src/pages/about.astro](file:///h:/Mi%20unidad/0000%20ANTIGRAVITY/ArchitectureAI_LAB/src/pages/about.astro).
- [ ] **Activos Gráficos:** Seleccionar 2 diagramas morfológicos o esquemas axiales para el proyecto de Clasificación Espacial (`WORK_001`).
- [ ] **Suscripciones:** Evaluar la integración de un canal RSS estático en XML para lectores e investigadores.

---

## 🚀 8. Roadmap de Investigación

- [ ] **EXP_005:** Evaluación de modelos de razonamiento (OpenAI o1 / Gemini 2.5 Flash Thinking) en cálculo de cargas axiales y predimensionado estructural.
- [ ] **WORK_002:** Pipeline de generación de componentes Grasshopper C# asistidos por prompts restrictivos.
- [ ] **Newsletter / RSS Feed:** Integración de canal RSS estático en XML para suscripción de lectores a nuevos ensayos.

