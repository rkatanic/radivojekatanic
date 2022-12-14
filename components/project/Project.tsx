import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { DATE_FORMAT } from "utils/dateTimeUtils";
import { ProjectType } from "../../types/Project";

interface Props {
  project: ProjectType;
  index: number;
}

const Project = ({
  project: { slug, title, description, creationDate },
  index,
}: Props): JSX.Element => (
  <Link className="flex w-full" href={`/projects/${slug}`}>
    <div className="group relative flex border-2 border-gray-200 bg-slate-50 shadow-sm transition-[border] duration-200 hover:border-sky-400 dark:border-gray-800 dark:bg-gray-900 dark:shadow-md dark:hover:border-sky-400">
      <div className="flex-1 p-4">
        <div className="mb-4 text-2xl font-medium dark:border-gray-700 dark:text-gray-200">
          {title}
        </div>
        <div className="absolute top-4 right-4 z-10 flex items-end gap-1 border-2 border-gray-200 py-1 px-2 text-xs font-medium tracking-wide text-gray-600 dark:border-gray-800 dark:text-gray-300">
          <span className="text-gray-400">#</span> 0{index + 1}
        </div>
        <div className="group absolute bottom-6 right-4 z-10 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-gray-400 group-hover:text-sky-500 dark:text-gray-500 dark:group-hover:text-sky-300">
          View
          <div className="h-[2px] w-3 bg-gray-400 dark:bg-gray-500 dark:group-hover:bg-sky-300"></div>
        </div>
        <p className="text-lg leading-relaxed tracking-wide text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <hr className="my-4 dark:border-gray-800" />
        <div className="mb-2 flex items-center gap-2 text-sm uppercase tracking-wide text-gray-600 dark:text-gray-400">
          {DATE_FORMAT.format(new Date(creationDate))}
        </div>
      </div>
      <div className="xbg-gradient-to-r relative h-full w-44 overflow-hidden from-gray-900 to-gray-800/40">
        <div className="cube group-hover:animate-[rotate_30s_linear_infinite]">
          <div className="sphere-one inner"></div>
          <div className="sphere-two inner"></div>
          <div className="sphere-three inner"></div>
          <div className="sphere-four inner"></div>
          <div className="sphere-five inner"></div>
          <div className="sphere-six inner"></div>
        </div>
      </div>
    </div>
  </Link>
);

export default Project;
