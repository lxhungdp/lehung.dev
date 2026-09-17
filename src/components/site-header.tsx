import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { LandingLink } from "@/components/landing-link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link href="/" className="site-header__brand" aria-label="Le Xuan Hung, home">
          <span className="site-header__name">Le Xuan Hung</span>
          <span className="site-header__title">Bridge structural engineer <span aria-hidden="true">/</span> Engineering software developer</span>
        </Link>
        <div className="site-header__actions">
          <nav className="site-nav" aria-label="Main navigation">
            <LandingLink section="about">About</LandingLink>
            <LandingLink section="software-projects">Software Projects</LandingLink>
            <LandingLink section="blogs">Blogs</LandingLink>
            <LandingLink section="contacts">Contacts</LandingLink>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
