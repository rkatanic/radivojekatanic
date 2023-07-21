import {
  FiFile,
  FiFileText,
  FiFolder,
  FiInfo,
  FiLink2,
  FiPlay,
  FiX,
} from "react-icons/fi";
import { getAllProjects, getProjectBySlug } from "../../lib/api";
import { ProjectType } from "../../types/Project";
import Link from "next/link";
import Markdown from "@/components/Markdown";

type Props = {
  project: ProjectType;
};
const Project = ({ project }: Props): JSX.Element => (
  <div>
    <div className="mb-2 flex items-center gap-2 text-sm">
      <Link
        href="/projects"
        className="cursor-pointer text-neutral-500 hover:underline"
      >
        Playground
      </Link>
      <FiPlay className="fill-neutral-800 text-neutral-800" size="0.5rem" />
      <span>{project.title}</span>
    </div>
    <h3 className="text-alt text-4xl font-bold leading-tight">
      {project.title}
    </h3>
    <br />
    <div className="mb-4 rounded bg-neutral-700 p-4 text-neutral-200">
      <div className="mb-2 flex items-center gap-2">
        <FiInfo />
        <p className="font-medium text-neutral-50">Note</p>
      </div>
      <p className="text-sm">
        This page is still work in progress. Preview files will be added soon.
      </p>
    </div>
    <p className="border-b-2 py-3 font-medium tracking-wide text-neutral-500">
      Files
    </p>
    <ul>
      {project.links.map((link) => (
        <li
          key={link.title}
          className="border-b py-3 font-medium text-neutral-800"
        >
          {link.title}
        </li>
      ))}
    </ul>
    <Markdown markdown={project.content} />
  </div>
);

export default Project;

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const project = getProjectBySlug(params.slug, [
    "title",
    "links",
    "slug",
    "creationDate",
    "modificationDate",
    "content",
    "activity",
    "preview",
  ]);

  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths = async () => {
  const project = getAllProjects(["slug"]);

  return {
    paths: project.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      };
    }),
    fallback: false,
  };
};
