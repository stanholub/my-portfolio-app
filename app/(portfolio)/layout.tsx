import type { Metadata } from "next";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import Header from "@/app/components/global/Header";
import Footer from "@/app/components/global/Footer";

export async function generateMetadata(): Promise<Metadata> {
  const profile: ProfileType[] = await getProfile();

  return {
    title: {
      template: "%s | Stanislav Holub Portfolio",
      default: "Stanislav Holub Portfolio",
    },
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

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
