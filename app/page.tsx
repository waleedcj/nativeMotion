import { Metadata } from "next";
import LandingPage from "@/components/LandingPage"; 

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nativemotion.dev";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Native Motion: Stunning React Native Animations & UI Components";
  const description = "Production-ready React Native animations that are lightweight and performant. Copy-paste beautiful components without the bloat, built by a developer for developers ❤️.";

  return {
    title,
    description,
    alternates: {
      canonical: SITE_URL,
    },
    openGraph: {
      title,
      description,
      url: SITE_URL,
      type: 'website',
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "Native Motion - React Native Animations and UI Components",
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ["/opengraph-image.png"],
    },
    keywords: [
      "react native animated components", "expo animated components", "react native ui library",
      "best react native ui library", "react native animations", "react native reanimated",
      "copy paste react native", "react native boilerplate", "react native design system",
      "react native UI components", "expo react native components", "react native custom components",
      "mobile app animations", "react native development tools", "react native UI kits",
      "react native examples", "performant react native animations", "cross platform UI components",
      "react native motion", "react native custom UI",
    ],
  };
}

export default function HomePage() {
  return <LandingPage />;
}