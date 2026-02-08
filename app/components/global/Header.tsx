"use client";

import Link from "next/link";
import { PiBird } from "react-icons/pi";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav
      className="flex justify-between items-center p-6 sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-stone-200 dark:border-stone-800"
      style={{ paddingTop: 'calc(1.5rem + env(safe-area-inset-top))' }}
    >
      <Link href="/" className="text-2xl font-display font-bold text-stone-900 dark:text-white flex items-center gap-2">
        <PiBird className="text-primary text-3xl" />
      </Link>

      <div className="hidden md:flex items-center gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition-colors hover:text-stone-600 dark:hover:text-stone-300 ${
              isActive(link.href) ? "text-primary" : "text-stone-400"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
