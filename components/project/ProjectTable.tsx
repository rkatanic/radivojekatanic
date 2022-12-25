import ProjectTableRow from "./ProjectTableRow";
import { DATE_FORMAT } from "utils/dateTimeUtils";
import { ProjectLink, ProjectUpdated } from "types/Project";
import { FiFolder } from "react-icons/fi";

interface Props {
  links: ProjectLink[];
  updated: ProjectUpdated;
}

const ProjectTable = ({ updated, links }: Props): JSX.Element => (
  <div className="border shadow-md dark:border-gray-700 dark:bg-gray-900">
    <div className="flex items-center justify-between gap-3 border-b px-4 py-4 dark:border-gray-700">
      <div className="flex items-center gap-3 tracking-wide">
        <h3 className="text-lg font-medium dark:text-gray-200">rkatanic</h3>
        <p className="text-gray-300">{updated.description}</p>
      </div>
      <p className="float-right text-sm text-gray-400">
        {DATE_FORMAT.format(new Date(updated.date))}
      </p>
    </div>
    <div className="flex items-center gap-3 border-b border-gray-800 py-2.5 px-4 hover:bg-gray-800/30">
      <FiFolder className="stroke-gray-400" />
      <p className="1racking-wide pointer-events-none text-gray-100">src</p>
    </div>
    {links.map((link, i) => (
      <ProjectTableRow key={i} link={link} />
    ))}
  </div>
);

export default ProjectTable;