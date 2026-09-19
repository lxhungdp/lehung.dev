import Link from "next/link";
import { LandingLink } from "@/components/landing-link";

export default function NotFound() {
  return (
    <div className="shell not-found">
      <p className="label">404</p>
      <h1>This page is not available.</h1>
      <p>The link may have moved. You can continue from the work index or return to the homepage.</p>
      <div className="link-actions">
        <LandingLink section="engineering-projects" className="link">Browse projects</LandingLink>
        <Link href="/" className="link">Go home</Link>
      </div>
    </div>
  );
}
