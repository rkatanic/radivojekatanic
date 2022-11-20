import { Project as ProjectType } from "../types/project";
import { DATE_FORMAT } from "../utils/dateTimeUtils";
import { FiArrowUpRight } from "react-icons/fi";

interface Props {
  project: ProjectType;
}

const Project = ({ project }: Props): JSX.Element => (
  <a
    href={project.link}
    target="blank"
    className="border dark:border-neutral-800 w-full flex flex-col gap-4 p-6 rounded-xl hover:bg-neutral-50/50 dark:hover:bg-neutral-800/30 cursor-pointer group"
  >
    <div className="flex items-baseline justify-between gap-4">
      <h3 className="flex flex-wrap gap-3 items-baseline font-medium dark:text-neutral-200 text-xl font-medium">
        {project.name}
        {project.badgeLabel && (
          <div className="whitespace-nowrap text-xs rounded-full bg-emerald-50/50 dark:bg-emerald-800/20 border border-emerald-300 text-emerald-600 dark:text-emerald-300 max-w-min px-1.5">
            {project.badgeLabel}
          </div>
        )}
      </h3>
      <div className="whitespace-nowrap flex gap-3 items-center text-neutral-400 dark:text-neutral-600 text-sm">
        {DATE_FORMAT.format(new Date(project.creationDate))}
      </div>
    </div>
    <p className="text-neutral-500 dark:text-neutral-400 mb-2">
      {project.description}
    </p>

    <hr className="dark:border-neutral-800" />
    <div className="gap-1 text-sm items-center text-neutral-400 dark:text-neutral-500 group-hover:text-blue-500 dark:group-hover:text-blue-300 flex">
      Go to link
      <FiArrowUpRight
        className="stroke-neutral-400 dark:stroke-neutral-500 group-hover:stroke-blue-400 dark:group-hover:stroke-blue-300"
        size="1rem"
      />
    </div>
  </a>
);

export default Project;
