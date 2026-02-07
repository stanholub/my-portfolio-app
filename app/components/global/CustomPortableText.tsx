import { PortableText, PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/lib/sanity.image";
import Image from "next/image";
import Link from "next/link";

const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: any }) => {
      return (
        <div className="relative w-full aspect-video my-8 overflow-hidden rounded-xl">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Post image"}
            fill
            className="object-cover"
          />
          {value.caption && (
            <div className="absolute bottom-0 w-full bg-black/50 p-2 text-white text-sm text-center">
              {value.caption}
            </div>
          )}
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }: { children?: React.ReactNode; value?: any }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="text-primary hover:text-primary/80 underline decoration-primary/30 hover:decoration-primary transition-colors font-medium"
        >
          {children}
        </Link>
      );
    },
  },
};

interface CustomPortableTextProps {
  value: any;
  className?: string;
}

export function CustomPortableText({ value, className }: CustomPortableTextProps) {
  return (
    <div className={className}>
      <PortableText value={value} components={components} />
    </div>
  );
}
