import { getProjectBySlug, getAllProjects } from "../../lib/api";
import { ProjectType } from "../../types/Project";
import Markdown from "@/components/Markdown";
import ProjectTable from "@/components/project/ProjectTable";

type Props = {
  project: ProjectType;
};

const Project = ({ project }: Props): JSX.Element => (
  <div>
    <ProjectTable links={project.links} updated={project.updated} />
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
    "slug",
    "title",
    "content",
    "updated",
    "links",
  ]);

  return {
    props: {
      project: {
        ...project,
      },
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
