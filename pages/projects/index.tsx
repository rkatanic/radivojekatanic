import Project from "@/components/Project";
import { FiLink2 } from "react-icons/fi";
import { getAllProjects } from "../../lib/api";
import { ProjectType } from "../../types/Project";

type Props = {
  projects: ProjectType[];
};

const Projects = ({ projects }: Props): JSX.Element => (
  <div className="mb-12 mt-4">
    <h3 className="text-3xl font-semibold leading-10 text-gray-900">
      Playground
    </h3>
    <p className="mb-12 leading-6 text-gray-600">
      Collection of small personal tools & experiments
    </p>
    <div className="grid grid-cols-2 gap-6">
      {projects.map((project, i) => (
        <Project key={i} project={project} />
      ))}
    </div>
    <div className="overlow-hidden rounded-md border dark:border-gray-800">
      <div className="h-40 w-full dark:bg-gray-900/50"></div>
      <div className="p-4">
        <h3 className="mb-2 text-lg font-medium dark:text-gray-200">
          Color Scale
        </h3>
        <p className="max-w-xs dark:text-gray-400">
          Color shade generator based on HSL.
        </p>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm dark:text-gray-500">Mar 07,2020</p>
          <FiLink2 className="dark:stroke-gray-700" />
        </div>
      </div>
    </div>
  </div>
);

export default Projects;

export const getStaticProps = async () => {
  const projects = getAllProjects([
    "slug",
    "title",
    "description",
    "creationDate",
  ]);

  return {
    props: {
      projects,
    },
  };
};
