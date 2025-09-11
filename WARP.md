# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is an Astro-based personal website/portfolio template called "Aria". It's a static site generator project that creates a minimalist personal homepage with blog posts, projects showcase, and about page.

## Architecture

### Framework Stack
- **Astro 4.8.2**: Static site generator with component islands architecture
- **TypeScript**: Type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework with dark mode support
- **Biome**: Fast formatter and linter (replaces ESLint/Prettier)

### Project Structure
- `src/pages/`: Route-based pages (index, about, posts, projects)
- `src/layouts/`: Reusable layout components (main.astro, post.astro)
- `src/components/`: UI components including header, footer, project cards
- `src/content/`: Content collections with schema validation for blog posts
- `src/collections/`: JSON data files for projects, experiences, and navigation menu
- `public/`: Static assets (images, favicon, robots.txt)

### Content Management
- Blog posts are in `src/content/post/` as Markdown files with frontmatter
- Project data is stored in `src/collections/projects.json`
- Experience/work history in `src/collections/experiences.json`
- Navigation menu in `src/collections/menu.json`
- Content schema validation via Zod in `src/content/config.js`

### Key Features
- Dark/light mode toggle with localStorage persistence
- Responsive design with mobile navigation
- Content collections for type-safe content management
- Tailwind Typography plugin for blog post styling

## Development Commands

### Package Management
- Uses `pnpm` as the package manager (specified in package.json)
- Install dependencies: `pnpm install`

### Development
- Start dev server: `pnpm dev` or `pnpm start`
- Both commands run `astro dev` (hot reload on http://localhost:4321)

### Build & Deploy
- Build for production: `pnpm build`
  - Runs type checking (`astro check`) then builds (`astro build`)
- Preview production build: `pnpm preview`

### Code Quality
- Format and lint: `pnpm check`
  - Runs `biome check --apply-unsafe .` (auto-fixes issues)
- Biome handles both formatting and linting in one tool

### Manual Commands
- Type check only: `astro check`
- Build only (skip type check): `astro build`
- Run Astro CLI: `pnpm astro [command]`

## Content Editing

### Adding Blog Posts
1. Create new `.md` file in `src/content/post/`
2. Add required frontmatter:
   ```yaml
   ---
   layout: ../../layouts/post.astro
   title: "Post Title"
   description: "Post description"
   dateFormatted: "MMM DD, YYYY"
   ---
   ```
3. Write content in Markdown below frontmatter

### Updating Projects
- Edit `src/collections/projects.json`
- Each project needs: name, description, image, url

### Updating Experience
- Edit `src/collections/experiences.json`
- Each experience needs: dates, role, company, description, logo

### Customizing Navigation
- Edit `src/collections/menu.json` to add/remove nav items

## Configuration Files

- `astro.config.mjs`: Astro configuration with Tailwind integration
- `tailwind.config.mjs`: Tailwind config with dark mode and typography plugin
- `biome.json`: Code formatting and linting rules
- `tsconfig.json`: TypeScript configuration (extends Astro's base config)
