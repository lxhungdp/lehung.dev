import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Experience, education and technical focus of Le Xuan Hung, PhD, bridge structural engineer and engineering software developer.",
  alternates: { canonical: "/about" },
};

const experience = [
  {
    period: "Sep 2024 — Present",
    role: "Deputy Project Manager & Engineering Software Developer",
    company: "ENVICO Co., Ltd.",
    place: "Seoul, South Korea",
    detail: "Bridge design and construction engineering, advanced structural analysis, and development of digital engineering workflows.",
  },
  {
    period: "Sep 2018 — Sep 2024",
    role: "Senior Structural and Bridge Engineer",
    company: "Wookyung Construction Co., Ltd.",
    place: "Seoul, South Korea",
    detail: "Steel box-girder bridge analysis and design, temporary works, engineering calculations and .NET-based design automation.",
  },
  {
    period: "Aug 2007 — Aug 2010",
    role: "Structural Engineer",
    company: "Hung Nghiep Construction Consulting Co., Ltd.",
    place: "Ho Chi Minh City, Vietnam",
    detail: "Bridge structural design and staged-construction analysis for concrete and temporary steel structures.",
  },
];

export default function AboutPage() {
  return (
    <div className="site-shell inner-page">
      <header className="page-hero page-hero--about"><p className="eyebrow">About / Background</p><h1>Structural thinking.<br /><span className="text-accent">Practical software.</span></h1><p>I am a bridge structural engineer with a PhD in Civil Engineering and more than ten years of experience across bridge design, analysis and verification. I also develop software that supports the engineering process itself.</p></header>
      <section className="about-intro" aria-labelledby="about-focus"><div><p className="eyebrow">01 / Focus</p><h2 id="about-focus">A bridge between engineering and computation</h2></div><div><p>My engineering work covers railway and highway bridges, prestressed concrete and steel systems, temporary works, staged construction, seismic analysis and structural verification.</p><p>In software, I turn recurring calculations and review steps into tools for geometry control, design checking, quantity take-off and project delivery.</p></div></section>
      <section className="about-experience" aria-labelledby="experience-title"><div className="section-heading"><div><p className="eyebrow">02 / Career</p><h2 id="experience-title">Experience</h2></div></div><div className="timeline">{experience.map((entry) => <div className="timeline__entry" key={entry.company}><span className="timeline__period">{entry.period}</span><div><h3>{entry.role}</h3><p className="timeline__company">{entry.company} · {entry.place}</p><p>{entry.detail}</p></div></div>)}</div></section>
      <section className="about-education" aria-labelledby="education-title"><div><p className="eyebrow">03 / Education</p><h2 id="education-title">Education</h2></div><div className="education-list"><div><strong>PhD · Civil Engineering</strong><span>Kyung Hee University · 2012–2018</span><p>Research on bridge deflection and vibration reliability.</p></div><div><strong>MEng</strong><span>Kyung Hee University · 2010–2012</span></div><div><strong>BSc · Civil Engineering</strong><span>University of Communications and Transport, Vietnam · 2002–2007</span></div></div></section>
      <section className="about-skills" aria-labelledby="skills-title"><p className="eyebrow">04 / Practice</p><h2 id="skills-title">Technical areas</h2><div className="skills-grid"><div><h3>Bridge engineering</h3><p>Railway and highway bridges, steel and concrete girders, segmental construction and temporary works.</p></div><div><h3>Analysis &amp; verification</h3><p>Finite-element modelling, staged construction, seismic and dynamic analysis, nonlinear response and connections.</p></div><div><h3>Software &amp; automation</h3><p>C#, Python, TypeScript, web applications and automated engineering calculations.</p></div></div></section>
      <div className="about-end"><a href="/le-xuan-hung-resume.pdf" target="_blank" rel="noopener noreferrer" className="button button--primary">View full resume <span aria-hidden="true">↗</span></a><Link href="/work" className="text-link">Explore my work <span aria-hidden="true">↗</span></Link></div>
    </div>
  );
}
