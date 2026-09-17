import type { Metadata } from "next";
import { socialMetadata } from "@/lib/social-metadata";

const description =
  "Contact Le Xuan Hung about bridge engineering, structural analysis and engineering software.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  ...socialMetadata("Contact Le Xuan Hung", description, "/contact"),
};

const channels = [
  { label: "Email", value: "lxhungdp@gmail.com", href: "mailto:lxhungdp@gmail.com", external: false },
  { label: "LinkedIn", value: "linkedin.com/in/lxhungdp", href: "https://www.linkedin.com/in/lxhungdp/", external: true },
];

export default function ContactPage() {
  return (
    <div className="shell page">
      <header>
        <h1>Contacts</h1>
      </header>

      <div className="contact-list">
        {channels.map((channel) => (
          <a
            key={channel.label}
            href={channel.href}
            className="contact-row"
            {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <span className="label">{channel.label}</span>
            <span className="contact-row__value">
              {channel.value}
              {channel.external && <span aria-hidden="true"> ↗</span>}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
