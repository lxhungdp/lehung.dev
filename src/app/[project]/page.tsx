import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/project-detail";
import { getProjectByPath, softwareProjects } from "@/data/projects";
import { socialMetadata } from "@/lib/social-metadata";

export const dynamicParams = false;
export function generateStaticParams() { return softwareProjects.map((project) => ({ project: project.path!.slice(1) })); }

export async function generateMetadata({ params }: { params: Promise<{ project: string }> }): Promise<Metadata> {
  const { project: segment } = await params;
  const project = getProjectByPath(`/${segment}`);
  if (!project) return { title: "Project not found" };
  return { title: project.title, description: project.summary, alternates: { canonical: project.path }, ...socialMetadata(`${project.title} | Le Xuan Hung`, project.summary, project.path!) };
}

export default async function SoftwareProjectPage({ params }: { params: Promise<{ project: string }> }) {
  const { project: segment } = await params;
  const project = getProjectByPath(`/${segment}`);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
