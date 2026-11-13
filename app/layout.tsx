import "./globals.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pigeondev.eu"),
};

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
        {children}
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="5ffe66b6-75c9-4c87-be9b-4d8e43da7940"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
