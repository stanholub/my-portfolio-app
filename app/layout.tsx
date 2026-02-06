import "./globals.css";
import type { Metadata } from "next";
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
      </body>
    </html>
  );
}
