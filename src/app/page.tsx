import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { TechnicalFigure } from "@/components/technical-figure";
import { featuredProjects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <section className="hero site-shell" aria-labelledby="home-title">
        <div className="hero__copy">
          <p className="eyebrow"><span className="eyebrow__line" /> Bridge structures / computation</p>
          <h1 id="home-title">Le Xuan Hung<span className="text-accent">.</span></h1>
          <p className="hero__role">Bridge structural engineer<br />{" "}&amp; engineering software developer</p>
          <p className="hero__intro">
            I design and analyse complex bridge structures, then build practical software to make engineering work clearer, faster and more reliable.
          </p>
          <div className="hero__actions">
            <Link href="/work" className="button button--primary">Explore selected work <span aria-hidden="true">↗</span></Link>
            <a href="/le-xuan-hung-resume.pdf" className="text-link" target="_blank" rel="noopener noreferrer">View resume <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero__visual"><TechnicalFigure /></div>
      </section>

      <section className="proof-strip" aria-label="Professional profile">
        <div className="site-shell proof-strip__inner">
          <div><strong>10+ years</strong><span>Bridge &amp; civil infrastructure</span></div>
          <div><strong>PhD</strong><span>Civil Engineering</span></div>
          <div><strong>Seoul, South Korea</strong><span>Working across structures &amp; software</span></div>
        </div>
      </section>

      <section className="section site-shell" aria-labelledby="selected-work-title">
        <div className="section-heading">
          <div><p className="eyebrow">01 / Selected work</p><h2 id="selected-work-title">Structures and software</h2></div>
          <Link href="/work" className="text-link">View all projects <span aria-hidden="true">↗</span></Link>
        </div>
        <p className="section-intro">Engineering projects and tools built around structural behaviour, construction methods and verifiable results.</p>
        <div className="project-grid">
          {featuredProjects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}
        </div>
      </section>

      <section className="approach-section" aria-labelledby="approach-title">
        <div className="site-shell approach-section__inner">
          <div><p className="eyebrow">02 / Approach</p><h2 id="approach-title">Engineering first.<br />Tools with a purpose.</h2></div>
          <div className="approach-section__copy">
            <p>My work spans bridge analysis, staged construction, seismic and nonlinear behaviour, and structural verification. I use that engineering foundation to develop tools for geometry control, design checks and project delivery.</p>
            <Link href="/about" className="text-link">More about my experience <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="contact-band site-shell" aria-labelledby="contact-title">
        <div><p className="eyebrow">03 / Contact</p><h2 id="contact-title">Let&apos;s discuss bridge engineering or technical software.</h2></div>
        <Link href="/contact" className="button button--light">Get in touch <span aria-hidden="true">↗</span></Link>
      </section>
    </>
  );
}
