import type { Metadata } from "next";
import { BlogList } from "@/components/blog-list";
import { blogPosts } from "@/data/blogs";
import { socialMetadata } from "@/lib/social-metadata";

const description = "Notes on bridge engineering, structural analysis and the software behind engineering workflows by Le Xuan Hung.";

export const metadata: Metadata = {
  title: "Blogs",
  description,
  alternates: { canonical: "/blogs" },
  ...socialMetadata("Blogs | Le Xuan Hung", description, "/blogs"),
};

export default function BlogsPage() {
  return (
    <div className="shell page">
      <header className="page-intro">
        <h1>Blogs</h1>
      </header>
      <BlogList posts={blogPosts} />
    </div>
  );
}
