import ProjectTableRow from "./ProjectTableRow";
import { DATE_FORMAT } from "utils/dateTimeUtils";
import { ProjectLink, ProjectUpdated } from "types/Project";
import { FiFolder } from "react-icons/fi";

interface Props {
  links: ProjectLink[];
  updated: ProjectUpdated;
}

const ProjectTable = ({ updated, links }: Props): JSX.Element => (
  <div className="border-2 border-gray-200 bg-slate-50 dark:border-gray-800 dark:bg-gray-900 dark:shadow-md">
    <div className="flex items-center justify-between gap-3 border-b-2 border-gray-200 px-4 py-4 dark:border-gray-800">
      <div className="flex items-center gap-3 tracking-wide">
        <h3 className="text-lg font-medium dark:text-gray-200">rkatanic</h3>
        <p className="text-gray-500 dark:text-gray-300">
          {updated.description}
        </p>
      </div>
      <p className="float-right text-sm text-gray-500 dark:text-gray-400">
        {DATE_FORMAT.format(new Date(updated.date))}
      </p>
    </div>
    <div className="flex h-11 items-center gap-3 border-b px-4 hover:bg-slate-100/50 dark:border-gray-800 dark:hover:bg-gray-800/30">
      <FiFolder className="stroke-gray-400" />
      <p className="pointer-events-none tracking-wide dark:text-gray-200">
        src
      </p>
    </div>
    {links.map((link, i) => (
      <ProjectTableRow key={i} link={link} />
    ))}
  </div>
);

export default ProjectTable;
