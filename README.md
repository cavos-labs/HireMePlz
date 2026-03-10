# HireMePlz

App que genera CVs en minutos. Pegás el link del job en LinkedIn, respondés unas preguntas y te devuelve un PDF listo para enviar.

## Estructura del proyecto

```
HireMePlz/
├── frontend/     → Landing + app (Next.js)
└── README.md
```

Por ahora todo vive en `frontend`. Backend/API se agregará cuando corresponda.

## Setup

```bash
cd frontend
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Build de producción:

```bash
npm run build
npm start
```

## Stack

- **Frontend:** Next.js 16 (App Router), React 19, Tailwind 4, TypeScript
- Fuentes: Geist (body) y Ramagothicbold (títulos), misma que Cavos

## Frontend

```
frontend/
├── src/
│   ├── app/          → layout, page, globals.css
│   ├── components/   → Header, Hero, JourneyPath, Testimonials, Footer
│   └── lib/          → fonts
└── public/           → logos, cavos-logo, etc
```

`JourneyPath` tiene una barra de progreso que se llena con el scroll. `FadeInOnScroll` anima la entrada de secciones y respeta `prefers-reduced-motion`.

### Paleta (Burnt Sienna)

| Color      | Hex       |
|------------|-----------|
| Cream      | `#F5F5DC` |
| Sandy      | `#F4A460` |
| Terracotta | `#E35336` |
| Sienna     | `#A0522D` |

Variables en `frontend/src/app/globals.css`.

## Cavos

Integración en el footer. Logo en `frontend/public/cavos-logo.png`.

## Deploy

Vercel-ready. Deploy del folder `frontend` con `npm run build`. Sin env vars para la landing.

---

`npm run lint` en frontend para ESLint.
