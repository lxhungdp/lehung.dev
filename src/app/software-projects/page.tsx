import type { Metadata } from "next";
import { SoftwareProjectList } from "@/components/software-project-list";
import { softwareProjects } from "@/data/projects";
import { socialMetadata } from "@/lib/social-metadata";

const description = "Engineering software projects by Le Xuan Hung, from bridge geometry control to structural analysis and design workflows.";

export const metadata: Metadata = {
  title: "Selected Software Projects",
  description,
  alternates: { canonical: "/software-projects" },
  ...socialMetadata("Selected Software Projects | Le Xuan Hung", description, "/software-projects"),
};

export default function SoftwareProjectsPage() {
  return (
    <div className="shell page">
      <header className="page-intro">
        <h1>Selected Software Projects</h1>
      </header>
      <SoftwareProjectList projects={softwareProjects} />
    </div>
  );
}
