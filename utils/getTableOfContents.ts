import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import { visit } from "unist-util-visit";
import { toString } from "mdast-util-to-string";

export type TOCItem = {
  id: string;
  text: string;
  level: number;
};

export async function extractTOCFromMDXFile(
  filePath: string,
): Promise<TOCItem[]> {
  const fs = await import("fs/promises");
  const content = await fs.readFile(filePath, "utf-8");
  const tree = unified().use(remarkParse).use(remarkMdx).parse(content);

  const toc: TOCItem[] = [];
  visit(tree, "heading", (node: any) => {
    const text = toString(node);
    toc.push({
      id: slugify(text),
      text,
      level: node.depth,
    });
  });

  return toc;
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[?!#:/\\().,']/g, "")
    .replace(/-+/g, "-");
}
