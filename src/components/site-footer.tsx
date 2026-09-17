import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell site-footer__inner">
        <div>
          <Link href="/" className="site-footer__name">Le Xuan Hung, PhD</Link>
          <p>Bridge structural engineer &amp; engineering software developer</p>
        </div>
        <div className="site-footer__links">
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <a href="mailto:lxhungdp@khu.ac.kr">Email</a>
          <a href="/le-xuan-hung-resume.pdf" target="_blank" rel="noopener noreferrer">Resume ↗</a>
        </div>
        <div className="site-footer__bottom"><span>© {new Date().getFullYear()} Le Xuan Hung</span><span>Seoul, South Korea</span></div>
      </div>
    </footer>
  );
}
