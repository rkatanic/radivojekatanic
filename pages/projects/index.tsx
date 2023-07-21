import { DATE_FORMAT } from "utils/dateTimeUtils";
import { getAllProjects } from "../../lib/api";
import { ProjectType } from "../../types/Project";
import Link from "next/link";
import Image from "next/image";

type Props = {
  projects: ProjectType[];
};

const Projects = ({ projects }: Props): JSX.Element => (
  <div>
    <h3 className="text-alt text-4xl font-bold leading-tight">
      Collection of small <br /> personal tools & experiments.
    </h3>
    <br />
    <p className="leading-relaxed text-neutral-600">
      I enjoy working on side-projects mainly for learning different
      techonologies and development principles. These small personal tools are
      results of that experimentation.
    </p>
    <br />

    <ul className="grid grid-cols-2 gap-4">
      {projects.map((p) => (
        <Link
          key={p.title}
          href={`/projects/${p.slug}`}
          className="group flex w-full cursor-pointer flex-col items-center justify-between rounded-sm border-2 border-neutral-100 p-6 text-center transition-all hover:border-neutral-800"
        >
          <div className="flex w-full justify-between text-sm tracking-wide text-neutral-400">
            <p className="group-hover:text-neutral-800">
              {DATE_FORMAT.format(new Date(p.creationDate))}
            </p>
            <p className="rounded-full border-2 p-0.5 px-1.5 text-xs font-medium uppercase tracking-wide group-hover:border-neutral-800 group-hover:text-neutral-800">
              wip
            </p>
          </div>
          <br />
          <Image
            width={96}
            height={96}
            alt={`${p.icon}`}
            src={`/${p.icon}.svg`}
          />
          <div className="text-centexr mt-4">
            <h3 className="text-alt mb-2 text-xl font-semibold">{p.title}</h3>
            <p className="text-neutral-600">{p.description}</p>
          </div>
        </Link>
      ))}
    </ul>
  </div>
);

export default Projects;

export const getStaticProps = async () => {
  const projects = getAllProjects([
    "slug",
    "title",
    "description",
    "creationDate",
    "icon",
  ]);

  return {
    props: {
      projects,
    },
  };
};
