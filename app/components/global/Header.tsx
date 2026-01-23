import Link from "next/link";
import { PiBird } from "react-icons/pi";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-stone-200 dark:border-stone-800">
      <Link href="/" className="text-2xl font-display font-bold text-stone-900 dark:text-white flex items-center gap-2">
        <PiBird className="text-primary text-3xl" />
      </Link>
    </nav>
  );
}
