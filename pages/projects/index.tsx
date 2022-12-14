import Project from "@/components/project/Project";
import { getAllProjects } from "../../lib/api";
import { ProjectType } from "../../types/Project";

type Props = {
  projects: ProjectType[];
};

const Projects = ({ projects }: Props): JSX.Element => (
  <div className="flex flex-col gap-4">
    {projects.map((project, i) => (
      <Project key={i} project={project} index={i} />
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
