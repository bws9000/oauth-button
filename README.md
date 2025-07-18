# Vite + React Component Starter Kit

A minimal monorepo setup for building and publishing reusable React components with live local development support. This is a basic starting point that can help save time or serve as a useful reference for similar projects.

## Use case

I was developing a **component** (e.g., a login button, modal, widget) and wanted:

- I wanted local development with hot reloading
- React + Vite + TypeScript setup
- An easy publish flow to npm
- Shared dev playground for multiple components or frameworks
- Save you some time and give you a starting point. The hard part the configuration
- used a layered architecture facade/factory pattern because I want it to be easily maintained and updated/upgraded
- Everyone loves tailwind, seemed easy example for demo/button

## Included

- Vite dev environment with a sample `OAuthLoginButton`
- Monorepo-style layout using plain `npm` (no workspace manager required)
- Build & publish ready (ESM/CJS/types)
- TailwindCSS ready (optional)
- React 18+, TypeScript
- OAuth component example and demo

## Real example

starter kit super powers... [`@charmr/oauth-button`](https://www.npmjs.com/package/@charmr/oauth-button), a reusable login component published to npm.

## How to use it

1. Clone this repo
2. Run `npm install`
3. Run `npm run dev` to start local dev
4. Modify `packages/oauth-button` or add your own
5. Build and publish

## Modular Package Design

This starter kit includes a **modular architecture** example with an internal `oauth-core` package that’s imported by the main `oauth-button` component example.

- `oauth-core` contains shared logic and provider definitions  
- `oauth-button` is the public-facing UI component  
- **No need to publish `oauth-core` separately** — it’s bundled automatically into the final build

The hard part was configuring the build system to **bundle internal packages cleanly** without requiring multiple npm publishes. This setup avoids exposing internal logic while keeping everything reusable and isolated.

### Benefits

- Code reuse and separation of concerns
- Easy refactoring or expansion (e.g., multiple UI wrappers sharing the same core logic)
- A clean, single-package publish process — **only the main component is published to npm**


## Packages

- `packages/oauth-button`: Sample component (Google login)
- `apps/dev`: Local playground for testing

## Requirements

- **Node.js** `>= 20.19.0`  
  (Certain dependencies require Node 20+ for compatibility and performance)
- **React** `^18.0.0` or `^19.0.0`  
  (The component is tested with the latest stable versions of React)

  🚀
