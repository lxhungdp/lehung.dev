import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const siteDescription =
  "Le Xuan Hung — bridge structural engineer and engineering software developer. Explore bridge engineering projects, engineering software and technical writing.";
const siteTitle = "Le Xuan Hung | Bridge Engineer & Engineering Software Developer";

export const metadata: Metadata = {
  metadataBase: new URL("https://lehung.dev"),
  title: { default: siteTitle, template: "%s | Le Xuan Hung" },
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Le Xuan Hung",
    title: siteTitle,
    description: siteDescription,
    url: "https://lehung.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">{`try{var theme=localStorage.getItem('theme');document.documentElement.dataset.theme=theme==='light'||theme==='dark'?theme:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch(e){document.documentElement.dataset.theme='light'}`}</Script>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
