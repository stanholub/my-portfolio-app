'use client'
import Link from "next/link";
import { PiBird } from "react-icons/pi";
import { useTheme } from "next-themes";
import { IoSunnyOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const themeIcon = () => {
    if (theme === "dark") {
      return <IoSunnyOutline  />;
    } else {
      return <FaRegMoon />;
    }
  }

  return (
    <header className="py-6 md:px-16 px-6 border-b border-zinc-800 z-30 md:mb-28 mb-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <PiBird className="text-2xl" />
        </Link>
        <nav>
          <ul className="flex items-center gap-x-8">
            <li>
              <Link
                href="/about"
                className="hover:text-purple-400 duration-300"
              >
                Who am I?
              </Link>
            </li>
            <li>
              <button onClick={toggleTheme}>{themeIcon()}</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
