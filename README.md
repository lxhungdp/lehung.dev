# lehung.dev

Personal portfolio for Le Xuan Hung, PhD: bridge structural engineering, computational methods, and engineering software.

## Stack

- Next.js App Router, TypeScript, React
- Tailwind CSS 4 plus a small site-specific stylesheet
- Static, content-driven pages with no database, sign-in, analytics, or external API dependency
- Ready for deployment to Vercel

## Run locally

Node.js 20.9 or newer is required. The project was developed with Node.js 24.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. To check the project before deploying:

```bash
npm run typecheck
npm run lint
npm run build
```

## Update the portfolio

- Edit project summaries, project pages, statuses, and external links in `src/data/projects.ts`. The Work index and individual project pages are generated from that file.
- Edit the introduction in `src/app/page.tsx`, career and education in `src/app/about/page.tsx`, and contact information in `src/app/contact/page.tsx`.
- Replace `public/le-xuan-hung-resume.pdf` when the resume changes.
- Project screenshots live in `public/images`. Keep the screenshots and alt text aligned with the current product UI.
- The SVG figures are labelled as schematic illustrations; they are not project drawings.

The portfolio copy is based on the supplied bridge resume and the reviewed local engineering software repositories. Review project claims, live URLs, client references, screenshots, and resume details before making the site public.

## Deploy on Vercel

Push this project to a Git repository, import that repository into Vercel as a Next.js project, then assign `lehung.dev` as the production domain. The site needs no environment variables. Next.js handles the build and image optimization. Set the domain's DNS records according to Vercel's project settings.

Use `main` as Vercel's production branch. Continue work on `develop`; merge reviewed changes into `main` when they are ready for the public site.

## Structure

```text
src/app/                Routes, metadata, sitemap, robots and styles
src/components/         Shared header, footer, cards and technical figures
src/data/projects.ts    Typed project content
public/images/          Selected product screenshots
public/*.pdf            Downloadable resume
```
