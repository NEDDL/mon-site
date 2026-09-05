# Mustafa Onal · Personal website

Portfolio at [mustafa-onal.com](https://mustafa-onal.com/), built with Next.js, React, and styled-components.

## Local development

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

In another terminal, using Node.js 18 or newer:

```sh
node scripts/check-portfolio.cjs http://localhost:3187
```

The smoke check verifies served content, navigation targets, link labels, metadata, retained image assets, and a 404 response for the retired PDF URL. It does not replace interactive or visual browser testing.

## Delivery

Open a pull request against `main`. Keep the existing hosting setup; merging and deploying are separate from preparing the PR.
