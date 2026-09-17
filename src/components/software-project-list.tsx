import Link from "next/link";
import type { Project } from "@/data/projects";

export function SoftwareProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="software-card-list">
      {projects.map((project) => (
        <article className="software-card" key={project.slug}>
          <div>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
          </div>
          <Link
            href={project.path ?? `/work/${project.slug}`}
            className="software-card__link"
            aria-label={`See more about ${project.title}`}
          >
            See more <span aria-hidden="true">↗</span>
          </Link>
        </article>
      ))}
    </div>
  );
}
