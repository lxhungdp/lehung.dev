import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const siteDescription =
  "Le Xuan Hung, PhD — bridge structural engineer and engineering software developer. Explore selected bridge projects, computational tools and professional experience.";

export const metadata: Metadata = {
  metadataBase: new URL("https://lehung.dev"),
  title: { default: "Le Xuan Hung | Bridge Engineer & Engineering Software Developer", template: "%s | Le Xuan Hung" },
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Le Xuan Hung",
    title: "Le Xuan Hung | Bridge Engineer & Engineering Software Developer",
    description: siteDescription,
    url: "https://lehung.dev",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
