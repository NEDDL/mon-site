# Mustafa Onal · Personal website

Portfolio at [mustafa-onal.com](https://mustafa-onal.com/), built with Next.js, React, and styled-components.

## Local development

Use Node.js 24 (`nvm use` reads `.nvmrc`). The same major version is pinned in `package.json` and the production Dockerfile.

```sh
npm ci
npm run dev
```

## Content

- `src/data/heroData.js`: introduction and core technologies.
- `src/data/aboutData.js`: professional narrative.
- `src/data/portfolioData.js`: selected work, project status, outcomes, and public links.
- `src/data/experienceData.js`: professional roles and dates.
- `src/data/educationData.js`: education.
- `src/data/navbarData.js`: section navigation.
- `pages/index.js`: page title, description, and canonical URL.

Use only supported achievements, distinguish beta from production, and mark past projects clearly. Leave links absent for internal products instead of using empty or placeholder URLs.

The website intentionally has no résumé download. The previous PDF is removed from the current public assets, not erased from Git history or existing deployments.

## Validation

```sh
npm run lint
npm run build
npm run start -- --port 3187
```

In another terminal:

```sh
node scripts/check-portfolio.cjs http://localhost:3187
```

The smoke check verifies served content, server-rendered styles, navigation targets, link labels, metadata, retained image assets, portrait optimization, and a 404 response for the retired PDF URL. It does not replace interactive or visual browser testing.

## Dependency maintenance

The site uses the Pages Router on Next.js 16, React 19, styled-components 6, and the Pages Router API from next-seo 7. Next.js's built-in compiler replaces the old Babel setup. Styling-only props use the `$` prefix so they are not forwarded into HTML.

ESLint stays on the latest compatible 9.x release because the React, import, and accessibility plugins used by eslint-config-next do not yet declare ESLint 10 support. Revisit this constraint when those plugins support ESLint 10. Do not bypass peer checks with `--legacy-peer-deps` or `--force`.

Docker builds use Node.js 24 and `npm ci`. Commit `package-lock.json` with dependency updates.

## Delivery

Open a pull request against `main`. CI validates lint, the Next.js build, and the production Docker image with the same HTTP smoke tests.

Production runs on Coolify's Personal team, on Hetzner `platform-01`, using the repository Dockerfile and Next.js standalone output. The runtime runs as a non-root user on port `3000`, including image optimization. Its health check requests `http://127.0.0.1:3000/`.

To test the deployment image locally:

```sh
docker build -t mon-site:local .
docker run --rm -p 3188:3000 mon-site:local
# In another terminal:
npm run test:smoke -- http://localhost:3188
```

Coolify is the deployment target; Vercel is no longer required to run this site.

`vercel.json` disables Vercel's automatic Git deployments. The previous deployment can be retained temporarily for rollback without receiving new builds.
