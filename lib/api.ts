import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const snippetsDirectory = join(process.cwd(), "__snippets");

export const getSnippetSlugs = (): string[] => {
  return fs.readdirSync(snippetsDirectory);
};

export const getSnippetBySlug = (slug: string, fields: string[] = []) => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(snippetsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: any;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
};

export const getAllSnippets = (fields: string[] = []) => {
  const slugs = getSnippetSlugs();
  const snippets = slugs.map((slug) => getSnippetBySlug(slug, fields));
  // sort projects by date in descending order
  // .sort((project1, project2) =>
  // project1.creationDate > project2.creationDate ? -1 : 1
  // );
  return snippets;
};
