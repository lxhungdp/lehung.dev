import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={project.path ?? `/work/${project.slug}`} className="card">
      {project.image ? (
        <div className="card__visual">
          <Image src={project.image} alt={project.imageAlt ?? ""} fill sizes="(max-width: 760px) 100vw, 520px" />
        </div>
      ) : (
        <div className="card__visual card__visual--type" aria-hidden="true">
          <span className="card__visual-mark">{project.slug === "pus-pro" ? "PUS" : project.title.split(" ").map((word) => word[0]).join("").slice(0, 3)}</span>
          <span className="card__visual-coordinate">LEHUNG.DEV / SOFTWARE</span>
        </div>
      )}
      <div className="card__body">
        <div className="card__head">
          <span className="card__title">{project.title}</span>
          {project.status && <span className="badge">{project.status}</span>}
        </div>
        <p className="card__summary">{project.summary}</p>
        {project.tags.length > 0 && <div className="chips" aria-label="Project topics">
          {project.tags.slice(0, 3).map((tag) => <span className="chip" key={tag}>{tag}</span>)}
        </div>}
      </div>
    </Link>
  );
}

export function ProjectCardGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="card-grid">
      {projects.map((project) => <ProjectCard project={project} key={project.slug} />)}
    </div>
  );
}
