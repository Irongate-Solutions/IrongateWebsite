# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Irongate Solutions LLC marketing website built with Astro 4.x, TypeScript, and Tailwind CSS. This is a static site with client-side form submissions to N8N webhooks for backend processing. Content is managed through markdown files and JSON data files.

## Development Commands

```bash
npm run dev          # Start development server (default port 4321)
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build locally
npm run lint         # Run ESLint on src/
npm run type-check   # Run TypeScript compiler without emitting files
```

## Architecture

### Core Technology Stack
- **Framework**: Astro 4.x with TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom design tokens (charcoal, copper, linen color scheme)
- **Forms**: Client-side JavaScript submitting to N8N webhooks with JWT Bearer auth
- **Deployment**: Intended for Netlify with automatic rebuilds

### Path Aliases
TypeScript path aliases are configured in `tsconfig.json`:
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@data/*` → `src/data/*`
- `@types/*` → `src/types/*`
- `@content/*` → `src/content/*`

### Key Design Patterns

#### Under Construction Mode
The site supports a full-page "under construction" mode controlled by the `PUBLIC_UNDER_CONSTRUCTION` environment variable. When enabled, `BaseLayout.astro` conditionally renders the `UnderConstruction.astro` component instead of the normal site content.

#### Form Submission Architecture
Both `ContactForm.astro` and `EmailCapture.astro` follow the same pattern:
1. Accept a `source` prop to track submission origin
2. Use `define:vars` to pass environment variables to client-side scripts
3. Submit form data as JSON to N8N webhooks with `Authorization: Bearer ${authKey}` header
4. Display inline status messages (hidden by default, shown on submit)
5. Call `window.trackEvent()` analytics stub on success (implementation pending)

#### Content Management
- **Services**: Markdown files in `src/content/services/` with frontmatter (title, slug, order, icon, thumbnail)
- **Case Studies**: Markdown files in `src/content/case-studies/` with frontmatter (title, slug, date, problem, outcome, thumbnail, heroImage, etc.)
  - Homepage automatically displays 3 most recent case studies sorted by date (newest first)
  - Add new case studies by creating markdown files with `date` field in YYYY-MM-DD format
- **Company Info**: JSON data in `src/data/company.json` (includes philosophy and guiding scripture)
- **Navigation**: JSON structure in `src/data/navigation.json` (separate main and footer nav)

#### TypeScript Interfaces
All data structures are defined in `src/types/index.ts`:
- `NavigationItem`, `Service`, `CaseStudy`, `CompanyInfo`, `FormSubmission`

### Key Components

**BaseLayout.astro**: Main layout wrapper
- Handles all SEO meta tags (Open Graph, Twitter Card)
- Includes structured data via `StructuredData.astro`
- Conditionally renders under construction mode
- Provides analytics stub (`window.trackEvent` function)
- Loads Google Fonts (Inter for body, Montserrat for headings)

**Header.astro**: Sticky navigation
- Responsive with mobile hamburger menu
- Highlights current page in navigation
- Uses inline script for mobile menu toggle

**ContactForm.astro** & **EmailCapture.astro**: Form components
- Both require `source` prop for tracking
- Use N8N webhooks from environment variables
- Include JWT authorization header
- Show inline success/error messages

**StructuredData.astro**: Generates JSON-LD schema
- Organization schema from company.json data
- Includes address, founding date, and contact info

### Custom Tailwind Configuration
Extended theme in `tailwind.config.mjs`:
- **Colors**: `charcoal`, `charcoal-light`, `copper`, `copper-dark`, `linen`, `linen-dark`
- **Fonts**: `font-heading` (Montserrat), `font-sans` (Inter)
- **Animations**: `fade-in`, `slide-up` with custom keyframes

## Environment Variables

Required environment variables (see `.env.example`):

```bash
PUBLIC_N8N_CONTACT_WEBHOOK    # N8N webhook for contact form
PUBLIC_N8N_EMAIL_WEBHOOK      # N8N webhook for email capture
PUBLIC_N8N_AUTH_KEY            # JWT token for webhook authorization
PUBLIC_UNDER_CONSTRUCTION      # Set to 'true' to enable construction mode
PUBLIC_SITE_URL                # Base URL for canonical links
PUBLIC_COMPANY_EMAIL           # Company contact email
PUBLIC_ANALYTICS_ID            # (Stub for future analytics)
```

All are prefixed with `PUBLIC_` to be available in client-side code.

## Important Implementation Details

### Form Authentication
Forms use JWT bearer authentication for N8N webhooks. The auth key is passed from server-side environment variables to client-side scripts using Astro's `define:vars` directive.

### Git Branch Structure
- `main`: Primary branch for production
- `Version001`: Current feature branch (as of recent commits)

### Company Identity
Irongate Solutions LLC is a faith-based company (includes guiding scripture in company.json). Founded in 2025, based in Indianapolis, IN. Tagline: "Integration & Custom Software Development"

### Content Philosophy
The site emphasizes "no consultancy theater" and practical, scalable solutions. Content tone is direct, technical, and focused on long-term maintainability.

### Sitemap Configuration
Astro sitemap integration filters out any pages with `/admin` in the path.

## Common Tasks

### Adding a New Service
1. Create markdown file in `src/content/services/` with frontmatter (title, slug, order)
2. Update service references in page files if needed (services are typically hardcoded in index pages)

### Adding a New Case Study
1. Create markdown file in `src/content/case-studies/` with required frontmatter:
   ```yaml
   ---
   title: Your Case Study Title
   slug: your-case-study-slug
   date: 2025-01-15  # YYYY-MM-DD format, controls ordering
   problem: Brief problem statement
   outcome: Brief outcome statement
   thumbnail: /assets/case-studies/your-thumb.jpg
   heroImage: /assets/case-studies/your-hero.jpg
   client: Client Name
   industry: Industry
   duration: X months
   ---
   ```
2. Homepage automatically includes it if it's among the 3 most recent (by date)

### Updating Company Information
Edit `src/data/company.json` - changes affect footer, structured data, and any references to company info

### Modifying Navigation
Edit `src/data/navigation.json` - affects both header and footer navigation automatically

### Testing Forms
Ensure `.env.local` has valid N8N webhook URLs and auth token. Forms require working webhook endpoints to test successfully.

## Project-Specific Notes

- **No content management system**: All content is file-based (markdown/JSON)
- **No server-side rendering**: Astro builds static HTML with client-side JavaScript for forms
- **SEO-focused**: Includes Open Graph, Twitter Cards, canonical URLs, and structured data
- **Accessibility considerations**: Proper ARIA labels on navigation, semantic HTML
- **Mobile-first responsive design**: Tailwind breakpoints used throughout
- **Analytics stub**: `window.trackEvent()` function exists but requires implementation
- **Deep linking**: Case study cards on homepage link to `/work#slug` which scrolls to and highlights the specific case study on the work page
