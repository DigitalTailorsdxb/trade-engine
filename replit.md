# Trade Engine Marketing Website

## Overview

Trade Engine sells complete, premium websites for trade businesses, not SaaS and not just landing pages. Pricing: Premium Website £129.99/month; Website + SEO £149.99/month including monthly SEO updates; Complete Package £300/month total including the premium website, monthly SEO updates, instant quoting and AI garden design. The £300 package is not an additional charge. Premium Landscapes remains the live website example, and existing AI demo links should be preserved. Do not reintroduce the former SaaS tiers, setup-fee promotions, or unconfirmed setup fees and contract terms.

The application follows a full-stack TypeScript architecture with a React frontend, Express backend, and PostgreSQL database. The site includes:
- **Home page**: Hero, Video Walkthrough, Problems, Product Teaser, Examples (PDF/Design), Features preview, Pricing, Testimonials, FAQ, Contact sections
- **Features page** (/features): Dedicated page with expanded feature details, interactive tabs, and additional features grid
- **Blog** (/blog): SEO-focused blog with articles on landscaping business topics. Blog data stored in client/src/lib/blog-data.ts
- **Privacy and Terms pages**: Legal pages
- **Location pages** (/landscaping-estimating-software-[city]): 99 city-specific landing pages targeting "landscaping estimating software [city]" keywords. Data in client/src/lib/location-data.ts, template in client/src/pages/location-page.tsx
- **Locations index** (/locations): Directory page listing all 99 cities organised by region. Links from footer.

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