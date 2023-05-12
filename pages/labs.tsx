import { FiZap } from "react-icons/fi";
import { getAllProjects } from "lib/api";
import { ProjectType } from "types/Project";
import { DATE_FORMAT } from "utils/dateTimeUtils";

interface Props {
  projects: ProjectType[];
}

const Labs = ({ projects }: Props): JSX.Element => (
  <div className="mx-auto max-w-4xl px-8">
    <h1 className="mb-4 text-3xl font-medium leading-snug">
      This is my playground.
    </h1>
    <p className="text-lg leading-7 text-gray-400">
      These projects are set of small tools that I built over time. Most of them
      are result of experimentation and for personal use.
    </p>

    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-y-12">
      {projects.map((project) => (
        <div
          key={project.title}
          className="border-bx 6 flex items-start gap-6 border-gray-800 last:border-0"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-900">
            <FiZap className="fill-gray-400 stroke-none" size="1.125rem" />
          </div>
          <div className="flex-1">
            <h3 className="mb-2 text-2xl font-medium">{project.title}</h3>
            <p className="mb-4 text-sm">
              {DATE_FORMAT.format(new Date(project.creationDate))}
            </p>
            <p className="mb-4 text-gray-400">{project.description}</p>
            <span className="rounded-full bg-gray-800 p-0.5 px-3 text-sm font-medium tracking-wide text-gray-400">
              WIP
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Labs;

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
