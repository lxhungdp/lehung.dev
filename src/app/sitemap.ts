import type { MetadataRoute } from "next";
import { softwareProjects } from "@/data/projects";
import { blogPosts } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lehung.dev";
  return ["", ...softwareProjects.map((project) => project.path!), ...blogPosts.map((post) => `/blogs/${post.slug}`)].map((path) => ({ url: `${base}${path}`, changeFrequency: "monthly", priority: path === "" ? 1 : 0.6 }));
}
