import type {
  PortableTextBlockComponent,
  PortableTextListComponent,
  PortableTextMarkComponent,
} from "@portabletext/react";

type BasePortableTextStyleOptions = {
  normalClassName: string;
  bulletListClassName: string;
  numberListClassName: string;
  strongClassName: string;
  linkClassName: string;
};

type BasePortableTextComponents = {
  block: Record<string, PortableTextBlockComponent | undefined>;
  list: Record<string, PortableTextListComponent | undefined>;
  marks: Record<string, PortableTextMarkComponent | undefined>;
};

export const createBasePortableTextComponents = ({
  normalClassName,
  bulletListClassName,
  numberListClassName,
  strongClassName,
  linkClassName,
}: BasePortableTextStyleOptions): BasePortableTextComponents => {
  return {
    block: {
      normal: ({ children }) => <p className={normalClassName}>{children}</p>,
    },
    list: {
      bullet: ({ children }) => (
        <ul className={bulletListClassName}>{children}</ul>
      ),
      number: ({ children }) => (
        <ol className={numberListClassName}>{children}</ol>
      ),
    },
    marks: {
      strong: ({ children }) => (
        <strong className={strongClassName}>{children}</strong>
      ),
      em: ({ children }) => <em className="italic">{children}</em>,
      link: ({ value, children }) => {
        const href =
          typeof value?.href === "string" ? (value.href as string) : "";

        if (!href) {
          return <>{children}</>;
        }

        const isExternal = href.startsWith("http");

        return (
          <a
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className={linkClassName}
          >
            {children}
          </a>
        );
      },
    },
  };
};
