# JC Climatizar - Replit Configuration

## Overview

JC Climatizar is a professional HVAC (Heating, Ventilation, and Air Conditioning) services website for a Brazilian company based in Barracão-PR. The site serves customers across the Southwest Paraná region (200km radius) and extends into Argentina (Bernardo de Irigoyen).

The application is a single-page React website with hash-based routing, featuring service listings, coverage area information, bilingual support (Portuguese/Spanish), and lead generation through WhatsApp integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **React 18** with TypeScript for type safety
- **Vite** as the build tool for fast development and optimized production builds
- No React Router - uses custom hash-based routing (`window.location.hash`) to avoid 404 issues on static hosting

### Styling Approach
- **Tailwind CSS** loaded via CDN (`cdn.tailwindcss.com`)
- Custom color palette defined in `index.html` tailwind config (jc-navy, jc-gold, jc-argentina, etc.)
- Custom animations (fadeInUp, slideDown, pulse-slow, etc.) defined inline
- Font Awesome icons via CDN

### Routing Strategy
Hash-based routing implemented in `App.tsx`:
- `#/servicos` - Services listing page
- `#/servicos/{serviceId}` - Individual service detail pages
- `#/ar-condicionado-{citySlug}` - City-specific landing pages
- `#/argentina` - Argentina service page with bilingual support
- Default route renders homepage with all sections

### Component Structure
- Stateless functional components with React hooks
- Intersection Observer pattern for scroll-triggered animations
- Constants file (`constants.ts`) centralizes company info, navigation links, and service data

### Data Management
- No backend or database - all content is static
- Company information centralized in `COMPANY_INFO` constant
- Services defined in `SERVICES_LIST` and `DETAILED_SERVICES` arrays
- City coverage data in `MAIN_CITIES` and `ALL_CITIES` arrays

### Lead Generation
- WhatsApp integration as primary contact method
- Forms construct pre-filled WhatsApp messages with form data
- Cookie consent banner with localStorage persistence

### SEO Approach
- Dynamic meta tag updates per page using `useEffect`
- City-specific landing pages for local SEO
- Semantic HTML structure

## External Dependencies

### CDN Resources
- **Tailwind CSS**: `cdn.tailwindcss.com` - Utility-first CSS framework
- **Font Awesome 6**: `cdnjs.cloudflare.com` - Icon library

### Third-Party Services
- **WhatsApp Business API**: Direct links to WhatsApp for customer contact (`wa.me/{phone}`)
- No analytics, payment processors, or authentication services currently integrated

### Build Dependencies
- `react` / `react-dom`: Core React libraries
- `vite`: Build tool and dev server
- `@vitejs/plugin-react`: React support for Vite
- `typescript`: Type checking

### Asset Handling
- Static assets served from `attached_assets` directory (configured as `publicDir` in Vite)
- Images referenced with absolute paths (e.g., `/logo-jc_1765724862776.jpeg`)