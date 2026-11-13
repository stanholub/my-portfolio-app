import type { Metadata, Viewport } from "next";
import { sans } from "./fonts";

export const metadata: Metadata = {
  title: { absolute: "EDELAS | Produkcja odzieży premium" },
  description:
    "Najwyższej jakości produkcja marek własnych, stroje korporacyjne i autorskie kolekcje szwalnicze.",
  // Preview copy of edelasapparel.com — keep it out of search results.
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.edelasapparel.com/" },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  colorScheme: "light",
};

export default function EdelasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      lang="pl"
      className={`${sans.className} min-h-screen bg-white text-black antialiased selection:bg-black selection:text-white`}
    >
      {children}
    </div>
  );
}
