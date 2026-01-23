export default function Footer() {
  return (
    <footer className="text-center pt-8 pb-4 border-t border-stone-200 dark:border-stone-800 mt-20">
      <p className="text-xs text-stone-400 dark:text-stone-600 font-medium">© {new Date().getFullYear()} Stanislav Holub. All rights reserved.</p>
    </footer>
  );
}