# AGENTS.md

> [!NOTE]
> This file is intended to provide context for AI coding agents working on this project.

## Project Overview
This is a personal portfolio application built with Next.js (App Router), TypeScript, Tailwind CSS, and Sanity CMS.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity
- **Icons**: react-icons
- **Fonts**: next/font (Inter)

## Commands
- **Install dependencies**: `npm install`
- **Start development server**: `npm run dev`
- **Build for production**: `npm run build`
- **Start production server**: `npm run start`
- **Lint code**: `npm run lint`

## Project Structure
- `/app`: distinct routes and pages (App Router)
  - `/app/components`: Reusable UI components
  - `/app/global`: Global styles (`globals.css`) and layout components
- `/sanity`: Sanity client configuration and queries
  - `sanity.query.ts`: GROQ queries for fetching data
  - `sanity.client.ts`: Sanity client initialization
- `/types`: TypeScript type definitions (manually maintained)
- `/public`: Static assets

## Code Style & Conventions
- **Components**: Use strict typing for props. Prefer functional components.
- **Styling**: Use Tailwind CSS utility classes. Avoid inline styles.
- **Data Fetching**: Data is fetched directly in Server Components using `sanity.query.ts`.
- **Absolute Imports**: Use `@/*` alias for imports (e.g., `@/components/Navbar`).

## Key Context
- The project uses **Sanity CMS** for content management. Changes to content structure usually require updating both the Sanity schema and the manual types in `types/index.ts`.
- Metadata is currently hardcoded in `layout.tsx`.
- The design system is minimal, relying on Zinc colors and default Tailwind utilities.
