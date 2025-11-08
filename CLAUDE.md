# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Pray.so is a React-based landing page for a prayer community platform. This is the marketing/landing site that directs users to the main app at `app.pray.so`. The site showcases features like live prayer rooms, prayer walls, private circles, and pricing tiers.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Backend**: Supabase (@supabase/supabase-js is included but not yet used in the current code)

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Page sections (Hero, Features, Pricing, etc.)
│   ├── ui/              # Reusable UI components (Button, Modal)
│   ├── ErrorBoundary.tsx
│   └── WaitlistForm.tsx
├── data/
│   └── content.ts       # Static content and data
├── lib/
│   └── supabase.ts      # Supabase client
├── App.tsx              # Main app component
├── main.tsx             # React app entry point
└── index.css            # Tailwind CSS imports and global styles
```

## Development Commands

```bash
# Start development server (default: http://localhost:5173)
npm run dev

# Type check without emitting files
npm run typecheck

# Lint with ESLint
npm run lint

# Build for production (outputs to ./dist)
npm run build

# Preview production build locally
npm preview
```

## Code Architecture

### Component Structure
The landing page is now modular with separate components for each section:
- **Layout components**: Header, Footer
- **Section components**: Hero, Problem, Solution, Features, HowItWorks, UseCases, Testimonials, Comparison, Security, Pricing, CTA
- **UI components**: Button, Modal (with focus trap and keyboard navigation)
- **Form component**: WaitlistForm (integrated with Supabase)

State is managed locally with React hooks in the main App component for:
- Modal visibility for waiting list signup

### Styling Approach
- Tailwind utility classes are used throughout
- Neutral color palette (neutral-50 to neutral-900)
- Responsive design with `md:` breakpoints
- Smooth scroll behavior enabled globally in `index.css`

### Data Management
- All static content is centralized in `src/data/content.ts`
- Content includes: features, steps, use cases, testimonials, pricing plans, security features, comparison data, footer links
- TypeScript interfaces ensure type safety for all content structures

### Accessibility Features
- **Modal**: Includes ARIA attributes, focus trap, ESC key handler, and backdrop click to close
- **Forms**: Proper labels, error states, and loading states
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Screen Reader Support**: Semantic HTML and ARIA labels

### Supabase Integration
- Waitlist form submits data to Supabase `waitlist` table
- Environment variables configured in `.env` (see `.env.example`)
- Error handling and loading states included
- Database schema documented in README.md

### Error Handling
- **ErrorBoundary** component wraps the entire app
- Catches and displays user-friendly error messages
- Prevents full app crashes from unhandled errors

### External Links
All "Start Praying" and signup CTAs link to `https://app.pray.so/`

## SEO & Meta Tags

Comprehensive SEO setup in `index.html`:
- Primary meta tags (title, description, keywords)
- Open Graph tags for social sharing (Facebook, LinkedIn)
- Twitter Card tags
- Canonical URL
- Structured data (JSON-LD) for Organization and WebSite
- Theme color for mobile browsers

## TypeScript Configuration

- Strict mode enabled
- Bundler module resolution
- React JSX transform
- Unused locals and parameters flagged as errors

## Linting

ESLint configured with:
- TypeScript ESLint recommended rules
- React Hooks rules enforced
- React Refresh for fast development

## CI/CD

GitHub Actions workflow (`.github/workflows/ci.yml`):
- Runs on push/PR to main branch
- Installs dependencies with npm ci
- Runs linter and type checking
- Builds the project
- Uploads build artifacts

## Environment Variables

Required for Supabase integration:
- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous key

See `.env.example` for full list of supported variables.
