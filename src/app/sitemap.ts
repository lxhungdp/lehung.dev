import type { MetadataRoute } from "next";
import { bridgeEngineeringProjects, softwareProjects } from "@/data/projects";
import { blogPosts } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lehung.dev";
  const paths = [
    "",
    "/work",
    "/software-projects",
    ...bridgeEngineeringProjects.map((project) => `/work/${project.slug}`),
    ...softwareProjects.map((project) => project.path!),
    ...blogPosts.map((post) => `/blogs/${post.slug}`),
  ];

  return paths.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.6,
  }));
}
