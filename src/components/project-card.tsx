import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { TechnicalFigure } from "@/components/technical-figure";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link href={`/work/${project.slug}`} className="project-card group">
      <div className="project-card__visual">
        {project.image ? (
          <Image src={project.image} alt={project.imageAlt ?? ""} fill sizes="(max-width: 760px) 100vw, 50vw" className="object-cover object-top" />
        ) : (
          <TechnicalFigure variant={project.visual} compact />
        )}
      </div>
      <div className="project-card__body">
        <div className="project-card__meta"><span>{String(index + 1).padStart(2, "0")} / {project.category}</span><span aria-hidden="true">↗</span></div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="project-card__tags" aria-label="Project topics">{project.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>
    </Link>
  );
}
