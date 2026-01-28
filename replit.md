# Trade Engine Marketing Website

## Overview

Trade Engine is a marketing website designed to sell AI-powered white-labelled websites to trade businesses, starting with landscaping. The site promotes a SaaS product that offers instant quotes (15 seconds), AI design visualisation (90 seconds), and automated follow-ups (24/7). Pricing is £3,499 setup + £199/month with first month AI free and £250 in free ad spend via Meta/Google Ads.

The application follows a full-stack TypeScript architecture with a React frontend, Express backend, and PostgreSQL database. It's a single-page marketing site with multiple sections (Hero, Product Teaser, Features, Pricing, Testimonials, FAQ, Contact) plus Privacy and Terms pages.

## Design System

### Colour Palette
- **Primary accent**: Warm amber/gold (hsl 25 95% 53%)
- **CTA buttons**: Amber gradient (from-amber-500 to-orange-500)
- **Checkmarks/bullets**: Amber (text-amber-500)
- **Stats/highlights**: Amber (text-amber-600)
- **Background**: Clean white with slate accents

### UK English Spelling
All content uses UK English: visualisation, white-labelled, optimisation, colours, customisable, personalised.

### Key Features
- Hero with Vanta.js animated birds background
- Interactive tabbed features section
- HubSpot CRM integration (no Airtable/Zoho)
- Demo links to www.premium-landscapes.co.uk

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight alternative to React Router)
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style)
- **State Management**: TanStack React Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom path aliases (@/, @shared/, @assets/)

### Backend Architecture
- **Framework**: Express 5 on Node.js
- **Language**: TypeScript with ESM modules
- **API Pattern**: REST endpoints under /api prefix
- **Development**: Vite middleware for HMR in development mode
- **Production**: Static file serving from dist/public

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: shared/schema.ts (shared between client and server)
- **Migrations**: Drizzle Kit with migrations output to /migrations
- **Schema Validation**: drizzle-zod for automatic Zod schema generation

### Current Data Models
- **Users**: Basic auth structure (id, username, password)
- **Contact Submissions**: Form submissions (id, name, email, phone, company, message, createdAt)

### Storage Pattern
- **Interface-based**: IStorage interface allows swapping implementations
- **Current Implementation**: MemStorage (in-memory) for development
- **Database Ready**: Schema configured for PostgreSQL when DATABASE_URL is provided

### Build Process
- **Client**: Vite builds to dist/public
- **Server**: esbuild bundles to dist/index.cjs with selective dependency bundling
- **Optimization**: Allowlist of dependencies to bundle for faster cold starts

## External Dependencies

### UI Components
- Radix UI primitives (full suite: dialog, dropdown, tabs, etc.)
- shadcn/ui component library with Tailwind CSS
- Lucide React for icons
- React Icons for brand icons (LinkedIn, WhatsApp, etc.)

### Data & Forms
- TanStack React Query for data fetching
- React Hook Form for form management
- Zod for runtime validation
- drizzle-zod for schema-to-validation bridging

### Database & Sessions
- PostgreSQL via DATABASE_URL environment variable
- connect-pg-simple for session storage (when database connected)
- Drizzle ORM for database operations

### Development Tools
- Vite with React plugin
- Replit-specific plugins (error overlay, cartographer, dev banner)
- TypeScript with strict mode
- esbuild for production server bundling