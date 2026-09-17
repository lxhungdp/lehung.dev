# lehung.dev

Personal portfolio for Le Xuan Hung, PhD: bridge structural engineering, computational methods, and engineering software.

## Stack

- Next.js App Router, TypeScript, React
- Tailwind CSS 4 plus a small site-specific stylesheet
- Static, content-driven pages with no database, sign-in, or external API dependency
- Vercel Web Analytics; Inter self-hosted through `next/font`
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

- Edit project summaries, page content, statuses, screenshots, and external links in `src/data/projects.ts`. The public project URLs are set by each project's `path` field and ordered in `softwareProjectOrder`. The home page displays summaries; these URLs display the full profiles.
- Add republished LinkedIn articles to `src/data/blogs.ts` with a unique `slug`, date, summary, paragraphs and optional original post URL. The Blogs section on the home page and article pages are generated from that file.
- Edit the About, Software Projects, Blogs, and Contacts sections in `src/app/page.tsx`. The page begins with About. Header and footer navigation scroll to those sections without adding URL fragments.
- Replace `public/le-xuan-hung-resume.pdf` when the resume changes.
- Project screenshots live in `public/images`. Keep the screenshots and alt text aligned with the current product UI. Projects without a screenshot have a typographic card until a real image is available.
- The two About photos are `public/images/le-xuan-hung-bridge-construction-site.jpg` and `public/images/le-xuan-hung-steel-girders.jpg`; their layout and captions are in `src/app/page.tsx`.
- Screenshots are captured at 1440x900 from the live applications. Keep source images at or below 1440px wide; Next.js handles the responsive delivery.

The portfolio copy is based on the supplied bridge resume and the reviewed local engineering software repositories. Review project claims, live URLs, client references, screenshots, and resume details before making the site public.

## Design system

The site uses semantic color variables in `src/app/globals.css`, a light/dark theme switch, and a uniform low-contrast technical grid background:

- **Three surfaces**: page, muted, and card backgrounds.
- **Two text colours**: `--text` and `--text-muted`.
- **One rule weight**: a single hairline, used for list separators and section edges.
- **One accent**: `--accent`, used for links, focus rings and restrained engineering details.
- **One type scale and one 4px space scale**, so nothing is sized by eye.

Beyond those, shape is the only added dimension: one corner radius, one neutral grey
shadow on card hover, and outlined pill chips for topics and status.

Projects are shown in cards on the home and Software Projects pages:

- **Image cards** use a real product screenshot when one is available.
- **Typographic cards** use project initials on a grid where a screenshot is not yet available.

The current public project routes are `/pus`, `/castcontrol`, `/RCdesigner`, `/anchor`, `/truss`, `/steelbridge`, `/alignment`, and `/movingload`. Former index URLs redirect to sections on the home page; old software-project URLs redirect to the new project routes.

Two link styles exist: `.link` for internal navigation and `.link-out` for anything
that leaves the site or opens a file, which is the only place the arrow marker appears.

When adding to the site, reuse these tokens instead of introducing new colours,
sizes or spacing values.

## Deploy on Vercel

Push this project to a Git repository, import that repository into Vercel as a Next.js project, then assign `lehung.dev` as the production domain. The site needs no environment variables. Next.js handles the build and image optimization. Set the domain's DNS records according to Vercel's project settings.

Use `main` as Vercel's production branch. Continue work on `develop`; merge reviewed changes into `main` when they are ready for the public site.

## Structure

```text
src/app/                Routes, metadata, sitemap, robots and styles
src/components/         Shared header, footer, project cards and detail layout
src/data/projects.ts    Typed project content and public route order
src/data/blogs.ts       Republished article content
public/images/          Selected product screenshots
public/*.pdf            Downloadable resume
```
