import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import Header from "./components/global/Header";
import BottomNavbar from "./components/global/BottomNavbar";
import Footer from "./components/global/Footer";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
});

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: "Stanislav Holub Portfolio",
  description: "Portfolio of a software engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${jakarta.variable} bg-background-light dark:bg-background-dark text-stone-800 dark:text-stone-200 font-body transition-colors duration-300 antialiased selection:bg-primary selection:text-white`}>
        <div className="relative min-h-screen flex flex-col pb-24">
          <Header />
          {children}
          <Footer />
        </div>
        <BottomNavbar />
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="5ffe66b6-75c9-4c87-be9b-4d8e43da7940"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
