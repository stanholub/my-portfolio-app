import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { createBasePortableTextComponents } from "@/components/portableText/basePortableTextComponents";
import type { PortableTextBlock } from "sanity";

interface CustomPortableTextProps {
  value: PortableTextBlock[];
  className?: string;
}

const baseComponents = createBasePortableTextComponents({
  normalClassName: "mb-3 last:mb-0",
  bulletListClassName: "mb-3 list-disc space-y-1 pl-5",
  numberListClassName: "mb-3 list-decimal space-y-1 pl-5",
  strongClassName: "font-semibold text-stone-800 dark:text-stone-200",
  linkClassName:
    "text-primary underline decoration-primary/40 underline-offset-2 transition-colors hover:decoration-primary",
});

const customComponents: PortableTextComponents = {
  ...baseComponents,
  block: {
    ...baseComponents.block,
    h1: ({ children }) => (
      <h1 className="mt-6 mb-4 text-2xl font-bold text-stone-900 dark:text-stone-100">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-4 mb-2 text-base font-semibold text-stone-900 dark:text-stone-100">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-4 mb-2 text-sm font-semibold text-stone-900 dark:text-stone-100">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-4 mb-2 text-xs font-bold uppercase tracking-wide text-stone-900 dark:text-stone-100">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-stone-200 dark:border-stone-700 pl-4 italic my-4 text-stone-600 dark:text-stone-400">
        {children}
      </blockquote>
    ),
  },
};

export default function CustomPortableText({
  value,
  className = "",
}: CustomPortableTextProps) {
  return (
    <div className={className}>
      <PortableText value={value} components={customComponents} />
    </div>
  );
}
