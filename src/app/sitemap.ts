import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lehung.dev";
  return ["", "/work", "/about", "/contact", ...projects.map((project) => `/work/${project.slug}`)].map((path) => ({ url: `${base}${path}`, changeFrequency: "monthly", priority: path === "" ? 1 : path === "/work" ? 0.8 : 0.6 }));
}
