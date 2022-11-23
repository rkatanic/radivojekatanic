import { getAllSnippets, getSnippetBySlug } from "lib/api";
import { Snippet as SnippetType } from "../../types/snippet";
import Markdown from "@/components/Markdown";

type Props = {
  snippet: SnippetType;
};

const Project = ({ snippet }: Props): JSX.Element => {
  return (
    <div>
      <h1 className="text-3xl font-bold dark:text-neutral-200 text-neutral-900 mb-4">
        {snippet.title}
      </h1>
      <p className="dark:text-neutral-400 text-neutral-600">
        {snippet.description}
      </p>
      <Markdown markdown={snippet.content} />
    </div>
  );
};

export default Project;

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const snippet = getSnippetBySlug(params.slug, [
    "title",
    "description",
    "slug",
    "content",
  ]);

  return {
    props: {
      snippet,
    },
  };
};

export const getStaticPaths = async () => {
  const snippet = getAllSnippets(["slug"]);

  return {
    paths: snippet.map((snippet) => {
      return {
        params: {
          slug: snippet.slug,
        },
      };
    }),
    fallback: false,
  };
};
