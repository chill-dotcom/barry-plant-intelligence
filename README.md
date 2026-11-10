# Barry Plant Intelligence

First visual prototype for Warragul–Drouin, Berwick and Pakenham. Built with Next.js App Router, React and TypeScript. All business data and agent identities are synthetic.

## Run

Use Node.js 22 or newer, then `npm ci`, `npm run dev`. Open http://localhost:3000.

`npm run build` creates a production build; `npm start` serves it. `npm run typecheck` and `npm test` check types, office aggregation, forecast separation and playlist validation.

## Screens

- `/dashboard/director`: responsive director overview with office, department, period and forecast scenario filters; KPI tiles, office comparison, target pacing, illustrative trends, fictional leaderboard and expandable priorities.
- `/admin/tv`: six independent Sales/PM playlist editors. Configure duration, visibility and ordering. Changes persist in this browser's local storage and synchronize to other tabs in the same browser.
- `/tv/warragul-drouin/sales` and `/tv/warragul-drouin/pm`: six-slide rotating broadcasts, previous/next, pause and fullscreen controls. Substitute `berwick` or `pakenham` for the other offices.
- `/manifest.webmanifest`: initial home-screen app shell metadata. HTTPS hosting and browser support determine installation availability. Offline service worker support is not implemented.

## Data definitions

Written and unconditional GCI are distinct measures; do not add them together. Forecast GCI is explicitly estimated: written GCI multiplied by 1.06 (conservative), 1.15 (base), or 1.25 (upside). These are demo assumptions, not trained predictions. Net rent roll growth is gross gains less losses. PUM is the active management snapshot. Period factors create synthetic snapshots; they do not represent live imports. Trend lines are illustrative shapes, clearly labelled as such. Some TV activity/service measures are fixed illustrative examples, not derived from office records. Reporting uses AUD and a fixed 10 November 2026, 9:00 am AEDT demo snapshot.

## Design

Shared design tokens and components serve dashboard, mobile and broadcast layouts. Navy, royal blue, red and green indicate visual hierarchy and departments. Text branding is provisional; no official logo is recreated. Obtain an approved Barry Plant logo and confirm colours before production. The home-screen icon is a neutral BI monogram. Manrope loads from Google Fonts with local system fallbacks.

## Prototype boundaries and next phase

This is a visual demonstration, not a secure production service. The director and admin routes have no authentication or role enforcement. No client records, tenant information, credentials, live integrations or private data belong in this version. The Chris Hill display is a demo identity, not an authenticated session.

Production work still requires Supabase authentication, tested server-side roles and office-scoped RLS, validated CSV/XLSX imports, audit logs, forecast assumptions based on authorised records, secure TV device tokens, device revocation, remote configuration/status, scheduled refresh, offline recovery and deployment. Browser-local playlist controls do not manage remote devices. Do not connect real data before security tests pass.

## Hosting

The repository can be imported into Vercel as a Next.js app. No environment variables are required for this demo. Restrict preview access if desired. This change does not set up cloud hosting or a database.
