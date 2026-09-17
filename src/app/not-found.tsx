import Link from "next/link";

export default function NotFound() {
  return <div className="site-shell not-found"><p className="eyebrow">404 / Page not found</p><h1>This page is not available.</h1><p>The link may have moved. You can continue from the work index or return to the homepage.</p><div><Link href="/work" className="button button--primary">Browse work <span aria-hidden="true">↗</span></Link><Link href="/" className="text-link">Go home <span aria-hidden="true">↗</span></Link></div></div>;
}
