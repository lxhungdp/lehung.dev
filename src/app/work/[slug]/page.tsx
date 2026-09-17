import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TechnicalFigure } from "@/components/technical-figure";
import { getProject, projects } from "@/data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { title: project.title, description: project.summary, url: `https://lehung.dev/work/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const related = (project.related ?? []).map((relatedSlug) => getProject(relatedSlug)).filter((entry) => entry !== undefined);

  return (
    <article className="site-shell project-page">
      <Link href="/work" className="back-link">← All work</Link>
      <header className="project-page__hero">
        <p className="eyebrow">{project.category}{project.status ? ` / ${project.status}` : ""}</p>
        <h1>{project.title}<span className="text-accent">.</span></h1>
        <p className="project-page__lead">{project.summary}</p>
        <div className="project-page__facts">
          {project.location && <div><span>Location</span><strong>{project.location}</strong></div>}
          {project.role && <div><span>Role</span><strong>{project.role}</strong></div>}
          <div><span>Field</span><strong>{project.category}</strong></div>
        </div>
      </header>

      {(project.image || project.visual) && (
        <figure className="project-page__visual">
          {project.image ? <Image src={project.image} alt={project.imageAlt ?? ""} width={project.imageWidth ?? 1500} height={project.imageHeight ?? 900} sizes="(max-width: 1216px) 100vw, 1216px" loading="eager" /> : <TechnicalFigure variant={project.visual} />}
          {project.image && <figcaption>Project interface screenshot</figcaption>}
        </figure>
      )}

      <div className="project-page__content">
        <section aria-labelledby="overview-title"><p className="eyebrow">01 / Context</p><h2 id="overview-title">Overview</h2><p>{project.overview}</p></section>
        <section aria-labelledby="contribution-title"><p className="eyebrow">02 / My work</p><h2 id="contribution-title">Contribution</h2><ul>{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul></section>
        {project.outcome && <section aria-labelledby="outcome-title"><p className="eyebrow">03 / Result</p><h2 id="outcome-title">Outcome</h2><p>{project.outcome}</p></section>}
        <aside className="project-page__aside">
          <h2>Project notes</h2>
          <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          {project.links?.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-link">{link.label} <span aria-hidden="true">↗</span></a>)}
        </aside>
      </div>
      {related.length > 0 && <div className="related-work"><p className="eyebrow">Related work</p>{related.map((entry) => <Link href={`/work/${entry.slug}`} key={entry.slug}>{entry.title} <span aria-hidden="true">↗</span></Link>)}</div>}
      <div className="project-page__next"><Link href="/work" className="text-link">Explore all projects <span aria-hidden="true">↗</span></Link></div>
    </article>
  );
}
