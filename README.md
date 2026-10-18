# Katalysa frontend prototype

An interactive, spec-driven prototype for a Nigerian private-school management platform. It is a standalone Next.js app with realistic demonstration data; it does not connect to a backend, database, production API, or payment provider.

## Run locally

Requirements: Node.js 20.9 or newer and npm.

```powershell
npm install
npm run dev
```

Open the local URL printed by Next.js (usually `http://localhost:3000`). Use the role selector on the sign-in screen to explore administrator, teacher, and parent views. All changes and payment callbacks are simulated in browser state/local storage and are not real school or payment operations.

To verify the app:

```powershell
npm run typecheck
npm run build
```

## Structure

- `app/` — App Router entry points and global responsive styling.
- `components/KatalysaApp.tsx` — role-based screens, shared shell, forms, tables, modals, and simulated flows.
- `lib/demo-data.ts` — Nigerian-school demonstration entities and initial state.
- `lib/mock-api.ts` — browser-only mock service boundary; contains no network requests.

The backend archive was used only as an API-contract reference. This project is in a separate output directory and does not import or modify backend files.
