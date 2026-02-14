import "./globals.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF9" },
    { media: "(prefers-color-scheme: dark)", color: "#1C1917" },
  ],
  viewportFit: "cover",
  colorScheme: "light dark",
};

export async function generateMetadata(): Promise<Metadata> {
  const profile: ProfileType[] = await getProfile();

  return {
    title: "Stanislav Holub Portfolio",
    description: profile[0]?.shortBio || "Portfolio of a software engineer",
    metadataBase: new URL("https://www.pigeondev.eu"),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: "Stanislav Holub Portfolio",
      description: profile[0]?.shortBio || "Portfolio of a software engineer",
      url: "https://www.pigeondev.eu",
      siteName: "Stanislav Holub Portfolio",
      images: [
        {
          url: profile[0]?.profileImage?.image || "",
          width: 1200,
          height: 630,
          alt: profile[0]?.profileImage?.alt || "Stanislav Holub Portfolio",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Stanislav Holub Portfolio",
      description: profile[0]?.shortBio || "Portfolio of a software engineer",
      images: [profile[0]?.profileImage?.image || ""],
      creator: "@stanislavholub",
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${jakarta.variable} bg-background-light dark:bg-background-dark text-stone-800 dark:text-stone-200 font-body transition-colors duration-300 antialiased selection:bg-primary selection:text-white`}
      >
        <div className="relative min-h-screen flex flex-col">
          <Header />
          {children}
          <Footer />
        </div>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="5ffe66b6-75c9-4c87-be9b-4d8e43da7940"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
