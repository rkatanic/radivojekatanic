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
    className="border dark:border-gray-800 w-full flex flex-col gap-4 p-6 rounded-xl hover:bg-gray-50/50 dark:hover:bg-gray-800/30 cursor-pointer group"
  >
    <div className="flex items-baseline justify-between">
      <h3 className="flex flex-wrap gap-3 items-baseline font-medium dark:text-gray-200 text-xl font-medium">
        {project.name}
        {project.badgeLabel && (
          <div className="whitespace-nowrap text-xs rounded-full bg-amber-50/50 dark:bg-amber-800/20 border border-amber-300 text-amber-600 dark:text-amber-300 max-w-min px-1.5">
            {project.badgeLabel}
          </div>
        )}
      </h3>
      <div className="whitespace-nowrap flex gap-3 items-center text-gray-400 dark:text-gray-600 text-sm">
        {DATE_FORMAT.format(new Date(project.creationDate))}
      </div>
    </div>
    <p className="text-gray-500 dark:text-gray-400 mb-2">
      {project.description}
    </p>

    <hr className="dark:border-gray-800" />
    <div className="gap-1 text-sm items-center text-gray-400 dark:text-gray-500 group-hover:text-amber-500 dark:group-hover:text-amber-300 flex">
      Go to link
      <FiArrowUpRight
        className="stroke-gray-400 dark:stroke-gray-500 group-hover:stroke-amber-400 dark:group-hover:stroke-amber-300"
        size="1rem"
      />
    </div>
  </a>
);

export default Project;
