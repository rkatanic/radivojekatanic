import Link from "next/link";
import { getAllProjects } from "../../lib/api";
import { Project as ProjectType } from "../../types/Project";

type Props = {
  projects: ProjectType[];
};

const Projects = ({ projects }: Props): JSX.Element => (
  <div className="text-white">
    {projects.map((project) => (
      <Link
        href={`/projects/${project.slug}`}
        className="border dark:border-gray-700"
      >
        <div className="border-b p-4 text-lg font-medium tracking-wide dark:border-gray-700">
          {project.title}
        </div>
        <div className="p-4">
          <p className="text-lg dark:text-gray-400">{project.description}</p>
        </div>
      </Link>
    ))}
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
