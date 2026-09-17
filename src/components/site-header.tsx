"use client";

import type { MouseEvent } from "react";
import Link from "next/link";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function closeMobileMenu(event: MouseEvent<HTMLAnchorElement>) {
  event.currentTarget.closest("details")?.removeAttribute("open");
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-shell site-header__inner">
        <Link href="/" className="site-brand" aria-label="Le Xuan Hung homepage">
          <span className="site-brand__name">LE HUNG<span className="text-accent">.</span></span>
          <span className="site-brand__descriptor">BRIDGE STRUCTURES + COMPUTATION</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          <a className="nav-resume" href="/le-xuan-hung-resume.pdf" target="_blank" rel="noopener noreferrer">Resume <span aria-hidden="true">↗</span></a>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Open navigation">Menu <span aria-hidden="true">☰</span></summary>
          <nav aria-label="Mobile navigation">
            {links.map((link) => <Link key={link.href} href={link.href} onClick={closeMobileMenu}>{link.label}</Link>)}
            <a href="/le-xuan-hung-resume.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>Resume ↗</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
