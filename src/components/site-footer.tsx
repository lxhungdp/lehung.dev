import Link from "next/link";
import { LandingLink } from "@/components/landing-link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="site-footer__inner">
          <div>
            <Link href="/" className="site-footer__name">Le Xuan Hung</Link>
            <p className="site-footer__tag">Bridge structural engineer &amp; engineering software developer</p>
          </div>
          <nav className="site-footer__links" aria-label="Footer navigation">
            <LandingLink section="about">About</LandingLink>
            <LandingLink section="software-projects">Software Projects</LandingLink>
            <LandingLink section="blogs">Blogs</LandingLink>
            <LandingLink section="contacts">Contacts</LandingLink>
          </nav>
        </div>
        <div className="site-footer__legal">
          <span>© {new Date().getFullYear()} Le Xuan Hung</span>
          <span>Seoul, South Korea</span>
        </div>
      </div>
    </footer>
  );
}
