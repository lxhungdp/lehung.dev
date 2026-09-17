import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected bridge engineering projects and engineering software by Le Xuan Hung.",
  alternates: { canonical: "/work" },
};

const groups = ["Bridge engineering", "Engineering software"] as const;

export default function WorkPage() {
  return (
    <div className="site-shell inner-page work-index">
      <header className="page-hero">
        <p className="eyebrow">Selected work / Index</p>
        <h1>Engineering work,<br /><span className="text-accent">from structures to tools.</span></h1>
        <p>Bridge design and analysis sit alongside the software I build to make technical work more precise and easier to review.</p>
      </header>

      {groups.map((group, groupIndex) => {
        const items = projects.filter((project) => project.category === group);
        return (
          <section className="work-group" aria-labelledby={`group-${groupIndex}`} key={group}>
            <div className="work-group__heading"><p className="eyebrow">0{groupIndex + 1} / {group}</p><span>{items.length} projects</span></div>
            <div className="work-list">
              {items.map((project, index) => (
                <Link href={`/work/${project.slug}`} className="work-row" key={project.slug}>
                  <span className="work-row__number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="work-row__main"><strong>{project.title}</strong><span>{project.summary}</span></span>
                  <span className="work-row__location">{project.location ?? project.status ?? "Engineering tool"}</span>
                  <span className="work-row__arrow" aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
