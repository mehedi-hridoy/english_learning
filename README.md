# Course English

Phase 1 project setup for an Arabic-first website using Next.js and Tailwind CSS.

## Quick start

1. Clone the repository:

```bash
git clone https://github.com/mehedi-hridoy/english_learning.git
```

2. Go to the project folder:

```bash
cd english_learning
```

3. Open the project in VS Code:

```bash
code .
```

4. Install dependencies:

```bash
npm install
```

5. Run the development server:

```bash
npm run dev
```

6. Open this in your browser:

```text
http://localhost:3000
```

## Stack

- Next.js (App Router, TypeScript)
- Tailwind CSS v4
- ESLint (Next.js config)

## Scripts

- npm run dev
- npm run build
- npm run start
- npm run lint

## RTL setup

- Root layout is Arabic-first: html has lang="ar" and dir="rtl".
- Locale direction mapping is in src/i18n/config.ts.
- Prefer logical Tailwind utilities for spacing and alignment:
  - use ms-* / me-* instead of ml-* / mr-*
  - use ps-* / pe-* instead of pl-* / pr-*

## Current structure

- src/app: app router entry, layout, global styles
- src/components: reusable shared UI blocks
- src/features: feature-specific modules and sections
- src/i18n: locale and direction configuration
- src/lib: shared utilities

## Next phase

Implement the Arabic homepage UI based on the provided reference design.
