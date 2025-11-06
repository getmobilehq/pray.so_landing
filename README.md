# Pray.so Landing Page

Marketing landing page for Pray.so - a platform connecting believers through live prayer rooms.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm preview
```

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite 5** - Fast build tool
- **Tailwind CSS 3** - Utility-first styling
- **Supabase** - Backend & database
- **Lucide React** - Icon library

## 📁 Project Structure

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
├── App.tsx
├── main.tsx
└── index.css
```

## 🔧 Environment Setup

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Add your Supabase credentials:
   ```
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```

## 📊 Supabase Setup

Create a `waitlist` table in your Supabase project:

```sql
create table waitlist (
  id uuid default uuid_generate_v4() primary key,
  name text,
  email text not null,
  role text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table waitlist enable row level security;

-- Allow inserts from anyone
create policy "Allow public inserts" on waitlist
  for insert with check (true);
```

## 🧪 Quality Checks

```bash
# Type checking
npm run typecheck

# Linting
npm run lint
```

## 🚢 Deployment

This project is configured for GitHub Actions CI/CD. On push to `main`:
- Runs linter
- Runs type checking
- Builds the project
- Uploads build artifacts

### Deploy to Vercel/Netlify

1. Connect your GitHub repository
2. Set environment variables (Supabase credentials)
3. Deploy!

## 📝 Key Features

- ✅ Component-based architecture
- ✅ TypeScript for type safety
- ✅ Responsive design
- ✅ SEO optimized (meta tags, structured data)
- ✅ Accessibility features (ARIA, keyboard navigation)
- ✅ Error boundary for graceful error handling
- ✅ Waitlist form with Supabase integration
- ✅ CI/CD with GitHub Actions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run quality checks (`npm run lint && npm run typecheck`)
5. Submit a pull request

## 📄 License

All rights reserved - Pray.so

## 🔗 Links

- [Live Site](https://pray.so)
- [Main App](https://app.pray.so)
- [CLAUDE.md](./CLAUDE.md) - Development guide for Claude Code
