import ProjectTableRow from "./ProjectTableRow";
import { DATE_FORMAT } from "utils/dateTimeUtils";
import { ProjectLink, ProjectUpdated } from "types/Project";
import { FiFolder } from "react-icons/fi";

interface Props {
  links: ProjectLink[];
  updated: ProjectUpdated;
}

const ProjectTable = ({ updated, links }: Props): JSX.Element => (
  <div className="rounded-md border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 dark:shadow-md">
    <div className="flex items-center justify-between gap-3 border-b-2 border-slate-200 px-4 py-4 dark:border-slate-800">
      <div className="flex items-center gap-3 tracking-wide">
        <h3 className="text-lg font-medium dark:text-slate-200">rkatanic</h3>
        <p className="text-slate-500 dark:text-slate-300">
          {updated.description}
        </p>
      </div>
      <p className="float-right text-sm text-slate-500 dark:text-slate-400">
        {DATE_FORMAT.format(new Date(updated.date))}
      </p>
    </div>
    <div className="flex h-11 items-center gap-3 border-b px-4 hover:bg-slate-100/50 dark:border-slate-800 dark:hover:bg-slate-800/30">
      <FiFolder className="stroke-slate-400" />
      <p className="pointer-events-none tracking-wide dark:text-slate-200">
        src
      </p>
    </div>
    {links.map((link, i) => (
      <ProjectTableRow key={i} link={link} />
    ))}
  </div>
);

export default ProjectTable;
