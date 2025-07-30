import type { MDXComponents } from "mdx/types";
import { JSX, ReactNode } from "react";

function createHeading(level: number) {
  const Heading = ({ children }: { children: ReactNode }) => {
    const text = typeof children === "string" ? children : "";
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .trim();

    const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

    const className =
      {
        1: "text-3xl font-bold mt-8 mb-4 scroll-mt-20",
        2: "text-2xl font-semibold mt-6 mb-3 scroll-mt-20",
        3: "text-xl font-semibold mt-5 mb-2 scroll-mt-20",
        4: "text-lg font-medium mt-4 mb-2 scroll-mt-20",
        5: "text-base font-medium mt-3 mb-1 scroll-mt-20",
        6: "text-sm font-medium mt-2 mb-1 scroll-mt-20",
      }[level] || "scroll-mt-20";

    return (
      <HeadingTag id={id} className={className}>
        {children}
      </HeadingTag>
    );
  };

  Heading.displayName = `Heading${level}`;
  return Heading;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
    ...components,
  };
}
