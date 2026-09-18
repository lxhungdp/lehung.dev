import Link from "next/link";
import type { BlogPost } from "@/data/blogs";

export function BlogList({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="blog-list">
      {[...posts].reverse().map((post) => (
        <Link href={`/blogs/${post.slug}`} className="blog-row" key={post.slug}>
          <time dateTime={post.date}>{post.date}</time>
          <strong>{post.title}</strong>
          <span className="blog-row__arrow" aria-hidden="true">↗</span>
        </Link>
      ))}
    </div>
  );
}
