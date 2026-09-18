import type { Metadata } from "next";

const image = {
  url: "https://lehung.dev/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Le Xuan Hung — Bridge Engineer and Engineering Software Developer",
  type: "image/png",
};

export function socialMetadata(title: string, description: string, path: string): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Le Xuan Hung",
      title,
      description,
      url: `https://lehung.dev${path}`,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}
