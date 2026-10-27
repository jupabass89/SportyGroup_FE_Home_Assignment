# Sports Leagues Explorer

A React + TypeScript app for browsing sports leagues and viewing league badges from TheSportsDB API.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL provided in the terminal

## Design decisions

- **Vite scaffold:** Bootstrapped with Vite's React + TypeScript setup for fast local development.
- **BEM styles:** Styles use Block–Element–Modifier class names Methodology.
- **Container and presentational components:** The Smart and Dumb components pattern was implemented here. Page/container handles data, state and business logic. Smaller components in components folder such as search, filters, and league items focus on rendering their props.
- **SWR caching:** Data hooks use SWR to cache API responses and manage loading, error, and revalidation states.
- **Copilot:** Used copilot as the main AI tool for adding project component styles and improve UI/UX at the end of the implementation.
