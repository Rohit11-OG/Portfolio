# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Express + Vite HMR) on port 5000
npm run build      # Production build: Vite client + esbuild server → dist/
npm start          # Run production build (node dist/index.js)
npm run check      # TypeScript type checking (tsc, no emit)
npm run db:push    # Push Drizzle schema to database
```

No test framework is configured.

## Architecture

Full-stack monorepo: React SPA client served by an Express backend, both on a single port (default 5000).

- **`client/`** — React 18 + TypeScript SPA. Entry: `client/src/main.tsx`. Vite builds from `client/` root.
- **`server/`** — Express server. Entry: `server/index.ts`. In dev, Vite middleware handles client HMR. In prod, serves static files from `dist/public/`.
- **`shared/`** — `schema.ts` defines Drizzle ORM tables and Zod validation schemas, shared by both client and server.

**Routing:** Client uses Wouter. Server API routes go in `server/routes.ts` under `/api` prefix. The server catch-all serves the client SPA.

**Data layer:** Drizzle ORM with PostgreSQL (Neon serverless driver). `server/storage.ts` defines a `MemStorage` in-memory implementation. Requires `DATABASE_URL` env var for real DB.

**State management:** TanStack React Query for server state. No global client state library.

**UI:** shadcn/ui components (Radix primitives + Tailwind) in `client/src/components/ui/`. New-York style variant. Theme uses CSS variables with HSL values, toggled via `class` dark mode (`ThemeProvider`).

**3D:** Three.js via React Three Fiber + Drei + postprocessing. `ThreeBackground` renders particle field; `ThreeDElement` renders interactive dodecahedron with bloom.

## Path Aliases

```
@/       → client/src/
@shared/ → shared/
@assets/ → attached_assets/
```

## Key Conventions

- Single-page portfolio: all sections rendered in `client/src/pages/Portfolio.tsx`
- Section components live in `client/src/components/` (e.g., `HeroSection.tsx`, `ProjectsSection.tsx`)
- CSS custom properties for theming defined in `client/src/index.css` (`:root` and `.dark`)
- Custom animation classes (`animate-float`, `animate-glow`, `magnetic-button`, etc.) defined in `index.css` `@layer utilities`
- Icons from `lucide-react`

## Environment Variables

- `DATABASE_URL` — PostgreSQL connection string (required for DB features)
- `SESSION_SECRET` — Express session secret
- `PORT` — Server port (default: 5000)
