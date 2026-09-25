# Architecture AI Lab

> Laboratorio digital personal de **Jorge Ludeña** explorando la intersección entre arquitectura, inteligencia artificial, hábitat y metodologías computacionales.

## Principio Operativo
> **Jorge selecciona, dirige y aprueba. Antigravity investiga, desarrolla, estructura, diseña, implementa y prepara la publicación.**

## Estructura del Proyecto
```text
architecture-ai-lab/
├── AGENTS.md                   # Directrices canónicas para agentes de IA
├── Architecture_AI_Lab_AGENTS.md # Especificación completa del proyecto
├── .agents/
│   ├── rules/                  # Reglas del espacio de trabajo
│   └── skills/                 # Skill de flujo editorial automatizado
├── src/
│   ├── content/                # Content Collections tipadas con Zod
│   │   ├── work/               # Proyectos e investigaciones mayores
│   │   ├── experiments/        # Ensayos empíricos y tests de herramientas
│   │   ├── notes/              # Reflexiones y observaciones breves
│   │   └── resources/          # Prompts y metodologías reusables
│   ├── layouts/                # Plantilla base (Astro)
│   ├── components/             # Componentes UI minimalistas
│   ├── pages/                  # Rutas y páginas de archivo
│   └── styles/                 # Sistema de diseño y CSS global
├── netlify.toml                # Configuración de despliegue en Netlify
└── astro.config.mjs            # Configuración estática de Astro
```

## Desarrollo Local

```powershell
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción (Static HTML)
npm run build

# Previsualizar el build de producción
npm run preview
```

## Despliegue ($0 recurrente)
El proyecto se compila como un sitio estático puro (`output: 'static'`) y se despliega de manera continua en **Netlify** al hacer push a la rama principal de GitHub.
