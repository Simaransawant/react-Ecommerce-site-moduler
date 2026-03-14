# Moduler Commerce (Next.js App Router)

Production-ready frontend architecture for a modern e-commerce application with API-ready service layers and scalable folder organization.

## Tech Stack
- Next.js (App Router)
- TypeScript (strict)
- Tailwind CSS
- Zustand
- Jest + React Testing Library

## Installation
```bash
npm install
npm run dev
```

## Folder Structure
- `src/app`: routes and metadata
- `src/components`: reusable UI modules
- `src/services`: API-ready business/service layer
- `src/hooks`, `src/context`, `src/store`: client state and app logic
- `src/types`: type-safe domain interfaces
- `src/data`: mock JSON data
- `src/utils`: helper utilities
- `src/__tests__`: unit tests

## Features Implemented
- Home, Shop, Product, Cart, Checkout, Blog, Wishlist routes
- SEO metadata + dynamic metadata for product/blog detail pages
- LocalStorage cart + wishlist persistence
- Zustand state management
- Modular payment service placeholders (Stripe, Razorpay, Paypal)
- Responsive design system based on CSS variables + Tailwind tokens
- Error and Not Found pages + route loading UIs

## Environment Variables
Copy `.env.example` to `.env.local` and set values.

## Future Backend Integration Guide
1. Replace static JSON with real API endpoints in `services/*Service.ts`.
2. Keep component interfaces unchanged to avoid UI refactors.
3. Add auth/session handling in middleware and API client.
4. Connect payment services in `src/services/payments` to backend order APIs.

## Deployment
Optimized for Vercel deployment:
- `next build`
- `next start`
