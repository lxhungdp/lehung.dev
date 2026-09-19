"use client";

import Link from "next/link";
import { useEffect, type MouseEvent, type ReactNode } from "react";

type LandingSection = "about" | "engineering-projects" | "software-projects" | "blogs" | "contacts";
const storageKey = "landing-scroll-target";
const sections: LandingSection[] = ["about", "software-projects", "engineering-projects", "blogs", "contacts"];

export function LandingLink({ section, children, className }: { section: LandingSection; children: ReactNode; className?: string }) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    if (window.location.pathname === "/") {
      event.preventDefault();
      if (window.location.hash) window.history.replaceState(null, "", window.location.pathname + window.location.search);
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.sessionStorage.setItem(storageKey, section);
    }
  }

  return <Link href="/" className={className} onClick={handleClick}>{children}</Link>;
}

/** Finish navigation from a project page without adding a URL fragment. */
export function LandingScrollRestorer() {
  useEffect(() => {
    const saved = window.sessionStorage.getItem(storageKey);
    window.sessionStorage.removeItem(storageKey);
    const fragment = window.location.hash.slice(1);
    const target = sections.find((section) => section === saved) ?? sections.find((section) => section === fragment);

    if (window.location.hash) window.history.replaceState(null, "", window.location.pathname + window.location.search);
    if (target) window.requestAnimationFrame(() => document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }, []);

  return null;
}
