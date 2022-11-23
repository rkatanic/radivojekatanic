import { getAllSnippets } from "lib/api";
import Link from "next/link";
import { Snippet } from "types/snippet";

type Props = {
  projects: Snippet[];
};

const Snippets = ({ projects }: Props): JSX.Element => {
  console.log(projects);
  return (
    <div className="m-auto max-w-5xl flex-1">
      <div className="m-auto max-w-2xl mb-12">
        <h1 className="text-3xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
          Code snippets
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400">
          These are a collection of code snippets I've used in the past and
          saved.
        </p>
      </div>
      {projects.map((project) => (
        <Link href={`/snippets/${project.slug}`}>
          <div className="dark:text-neutral-200">{project.title}</div>
          <p className="dark:text-neutral-400">{project.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default Snippets;

export const getStaticProps = async () => {
  const projects = getAllSnippets([
    "title",
    "description",
    "slug",
    "creationDate",
    "url",
  ]);

  return {
    props: {
      projects,
    },
  };
};
