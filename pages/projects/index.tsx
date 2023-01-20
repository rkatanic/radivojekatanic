import Project from "@/components/project/Project";
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
