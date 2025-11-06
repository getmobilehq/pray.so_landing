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

This is a simple single-page application with minimal structure:
- `src/App.tsx` - Main landing page component containing all sections (hero, features, pricing, testimonials, etc.)
- `src/main.tsx` - React app entry point
- `src/index.css` - Tailwind CSS imports and global styles
- `public/` - Static assets including the Pray.so logo

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
The entire landing page is currently a single component (`App.tsx`) with inline sections. State is managed locally with React hooks for:
- Modal visibility for waiting list signup
- Form data for waiting list
- Submission state

### Styling Approach
- Tailwind utility classes are used throughout
- Neutral color palette (neutral-50 to neutral-900)
- Responsive design with `md:` breakpoints
- Smooth scroll behavior enabled globally in `index.css`

### Key Features in App.tsx
1. **Navigation**: Sticky header with links to sections
2. **Hero Section**: Main call-to-action
3. **Features Grid**: 6 key features with icons
4. **How It Works**: 4-step process
5. **Use Cases**: 4 target audiences
6. **Testimonials**: Social proof with stats
7. **Comparison Table**: Pray.so vs traditional prayer groups
8. **Security Section**: Privacy and protection features
9. **Pricing**: 3 tiers (Free, Premium, Church) with waiting list modal
10. **Footer**: Navigation and legal links

### External Links
All "Start Praying" and signup CTAs link to `https://app.pray.so/signup`

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

## Future Considerations

The Supabase client is included as a dependency but not yet integrated. Future work may include connecting the waiting list form to a Supabase backend for data persistence.
