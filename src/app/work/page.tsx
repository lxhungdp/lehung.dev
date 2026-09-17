import type { Metadata } from "next";
import { ProjectCardGrid } from "@/components/project-card";
import { ProjectList } from "@/components/project-list";
import { projects } from "@/data/projects";
import { socialMetadata } from "@/lib/social-metadata";

const description = "Selected bridge engineering projects and engineering software by Le Xuan Hung.";

export const metadata: Metadata = {
  title: "Work",
  description,
  alternates: { canonical: "/work" },
  ...socialMetadata("Selected Work | Le Xuan Hung", description, "/work"),
};

const groups = ["Bridge engineering", "Engineering software"] as const;

export default function WorkPage() {
  return (
    <div className="shell page">
      <header>
        <h1>Selected work</h1>
        <p className="section__body">
          Bridge design and analysis sit alongside the software I build to make technical work more
          precise and easier to review.
        </p>
      </header>

      <div className="work-groups">
        {groups.map((group) => {
          const items = projects.filter((project) => project.category === group);
          // Anything with a real screenshot is shown as a card; the rest stay as rows.
          const withImage = items.filter((project) => project.image);
          const withoutImage = items.filter((project) => !project.image);
          const id = group.toLowerCase().replace(/\s+/g, "-");

          return (
            <section className="work-group" aria-labelledby={id} key={group}>
              <div className="work-group__head">
                <h2 id={id}>{group}</h2>
                <span className="label">{items.length} projects</span>
              </div>
              {withImage.length > 0 && <ProjectCardGrid projects={withImage} />}
              {withoutImage.length > 0 && (
                <ProjectList projects={withoutImage} showTags={withImage.length === 0} />
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
