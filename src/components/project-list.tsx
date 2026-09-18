import Link from "next/link";
import type { Project } from "@/data/projects";

/** Location for built work, status for tools, category as a last resort. */
function meta(project: Project) {
  return project.location ?? project.status ?? project.category;
}

export function ProjectList({ projects, showTags = false }: { projects: Project[]; showTags?: boolean }) {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <Link href={project.path ?? `/work/${project.slug}`} className="project-row" key={project.slug}>
          <span className="project-row__title">{project.title}</span>
          <span className="project-row__meta">{meta(project)}</span>
          <span className="project-row__summary">{project.summary}</span>
          {showTags && (
            <span className="chips" aria-label="Project topics">
              {project.tags.slice(0, 3).map((tag) => <span className="chip" key={tag}>{tag}</span>)}
            </span>
          )}
        </Link>
      ))}
    </div>
  );
}
