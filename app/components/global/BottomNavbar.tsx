"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiHome, BiNews, BiUser } from "react-icons/bi";

export default function BottomNavbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 w-full max-w-[100vw] bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-lg border-t border-stone-200 dark:border-stone-800 z-50 md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="max-w-md mx-auto grid grid-cols-3 items-center px-4 py-3 h-full">
        <Link href="/" className={`flex flex-col items-center gap-1 transition-colors group ${isActive("/") ? "text-primary" : "text-stone-400 hover:text-stone-600 dark:hover:text-stone-300"}`}>
          <BiHome className={`text-2xl transition-colors ${isActive("/") ? "text-primary" : "group-hover:text-stone-600 dark:group-hover:text-stone-300"}`} />
          <span className="text-[10px] font-medium">Home</span>
        </Link>
        <Link href="/blog" className={`flex flex-col items-center gap-1 transition-colors group ${isActive("/blog") ? "text-primary" : "text-stone-400 hover:text-stone-600 dark:hover:text-stone-300"}`}>
          <div className="relative">
             <BiNews className={`text-2xl transition-colors ${isActive("/blog") ? "text-primary" : "group-hover:text-stone-600 dark:group-hover:text-stone-300"}`} />
          </div>
          <span className="text-[10px] font-medium">Blog</span>
        </Link>
        <Link href="/about" className={`flex flex-col items-center gap-1 transition-colors group ${isActive("/about") ? "text-primary" : "text-stone-400 hover:text-stone-600 dark:hover:text-stone-300"}`}>
          <BiUser className={`text-2xl transition-colors ${isActive("/about") ? "text-primary" : "group-hover:text-stone-600 dark:group-hover:text-stone-300"}`} />
          <span className="text-[10px] font-medium">About</span>
        </Link>
      </div>
    </nav>
  );
}
