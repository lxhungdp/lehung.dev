import Image from "next/image";
import Link from "next/link";
import { LandingLink } from "@/components/landing-link";
import { getProject, type Project } from "@/data/projects";

export function ProjectDetail({ project }: { project: Project }) {
  const related = (project.related ?? []).map(getProject).filter((entry) => entry !== undefined);
  const pending = !project.overview && project.contributions.length === 0;

  return (
    <article className="shell page">
      <LandingLink section="software-projects" className="link">← Software Projects</LandingLink>
      <header className="project-hero">
        <p className="label">{project.category}{project.status ? ` · ${project.status}` : ""}</p>
        <h1>{project.title}</h1>
        <p className="project-hero__lead">{project.summary}</p>
        {(project.location || project.role || project.tags.length > 0) && <dl className="detail-list">
          {project.location && <div><dt className="label">Location</dt><dd>{project.location}</dd></div>}
          {project.role && <div><dt className="label">Role</dt><dd>{project.role}</dd></div>}
          {project.tags.length > 0 && <div><dt className="label">Topics</dt><dd><span className="chips">{project.tags.map((tag) => <span className="chip" key={tag}>{tag}</span>)}</span></dd></div>}
        </dl>}
      </header>

      {project.image && <figure className="figure"><Image src={project.image} alt="" width={project.imageWidth ?? 1500} height={project.imageHeight ?? 900} sizes="(max-width: 1088px) 100vw, 1040px" loading="eager" /><figcaption>{project.imageAlt}</figcaption></figure>}

      {pending && project.slug !== "pus-pro" ? <div className="project-pending"><span className="label">Project profile</span><p>Details will be added soon.</p></div> : !pending && <div className="project-body">
        {project.overview && <section aria-labelledby="overview-title"><h2 id="overview-title">Overview</h2><p>{project.overview}</p></section>}
        {project.contributions.length > 0 && <section aria-labelledby="contribution-title"><h2 id="contribution-title">Contribution</h2><ul>{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul></section>}
        {project.outcome && <section aria-labelledby="outcome-title"><h2 id="outcome-title">Outcome</h2><p>{project.outcome}</p></section>}
      </div>}

      <div className="project-footer">
        {project.links && project.links.length > 0 && <div className="project-footer__group"><span className="label">Links</span>{project.links.map((link) => <a key={link.href} href={link.href} className="link-out" target="_blank" rel="noopener noreferrer">{link.label} <span aria-hidden="true">↗</span></a>)}</div>}
        {related.length > 0 && <div className="project-footer__group"><span className="label">Related</span>{related.map((entry) => <Link href={entry.path ?? `/work/${entry.slug}`} className="link" key={entry.slug}>{entry.title}</Link>)}</div>}
        <div className="project-footer__group"><LandingLink section="software-projects" className="link">All software projects</LandingLink></div>
      </div>
    </article>
  );
}
