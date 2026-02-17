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

- **Install dependencies**: `npm install` (or `pnpm install`)
- **Start development server**: `npm run dev`
- **Build for production**: `npm run build`
- **Start production server**: `npm run start`
- **Lint code**: `npm run lint`
- **Format code**: `npm run format` (Prettier)

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

- **Formatting**: Prettier is configured with double quotes, semicolons, 2-space indentation. Format on save is enabled in VS Code. Run `npm run format` to format all files manually.
- **Components**: Use strict typing for props. Prefer functional components.
- **Styling**: Use Tailwind CSS utility classes. Avoid inline styles.
- **Data Fetching**: Data is fetched directly in Server Components using `sanity.query.ts`.
- **Absolute Imports**: Use `@/*` alias for imports (e.g., `@/components/Navbar`).
- **Quotes**: Always use double quotes for strings (enforced by Prettier).
- **Semicolons**: Always use semicolons (enforced by Prettier).
- **Line Width**: 80 characters (enforced by Prettier).
- **Indentation**: 2 spaces, no tabs (enforced by Prettier).

## Key Context

- The project uses **Sanity CMS** for content management. Changes to content structure usually require updating both the Sanity schema and the manual types in `types/index.ts`.
- Metadata is currently hardcoded in `layout.tsx`.
- The design system is minimal, relying on Zinc colors and default Tailwind utilities.

## Git Commit Conventions

This project enforces [Conventional Commits](https://www.conventionalcommits.org/). All commit messages must follow the format:

```
<type>(<scope>): <subject>
```

Common types:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to our CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files
- `revert`: Reverts a previous commit

Examples:
- `feat(blog): add new blog post component`
- `fix(header): correct z-index issue on mobile`
- `chore: update dependencies`
