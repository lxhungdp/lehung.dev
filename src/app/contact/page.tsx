import type { Metadata } from "next";
import { socialMetadata } from "@/lib/social-metadata";

const description = "Contact Le Xuan Hung about bridge engineering, structural analysis and engineering software.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  ...socialMetadata("Contact Le Xuan Hung", description, "/contact"),
};

export default function ContactPage() {
  return (
    <div className="site-shell inner-page contact-page">
      <header className="page-hero"><p className="eyebrow">Contact / Seoul, South Korea</p><h1>Get in touch<span className="text-accent">.</span></h1><p>For bridge engineering, structural analysis or engineering software conversations, email is the best place to start.</p></header>
      <div className="contact-options"><a href="mailto:lxhungdp@khu.ac.kr" className="contact-option"><span>Email</span><strong>lxhungdp@khu.ac.kr</strong><span aria-hidden="true">↗</span></a><a href="https://www.linkedin.com/in/lxhungdp/" target="_blank" rel="noopener noreferrer" className="contact-option"><span>LinkedIn</span><strong>Connect professionally</strong><span aria-hidden="true">↗</span></a><a href="/le-xuan-hung-resume.pdf" target="_blank" rel="noopener noreferrer" className="contact-option"><span>Resume</span><strong>View PDF</strong><span aria-hidden="true">↗</span></a></div>
    </div>
  );
}
