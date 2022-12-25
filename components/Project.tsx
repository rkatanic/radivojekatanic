import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { DATE_FORMAT } from "utils/dateTimeUtils";
import { ProjectType } from "../types/Project";

interface Props {
  project: ProjectType;
}

const Project = ({
  project: { slug, title, description, creationDate },
}: Props): JSX.Element => (
  <Link className="flex w-full" href={`/projects/${slug}`}>
    <div className="group relative flex border shadow-md transition-[border] duration-200 dark:border-gray-700 dark:hover:border-sky-400">
      <div className="flex-1 p-4">
        <div className="mb-4 text-xl font-medium tracking-wide dark:border-gray-700 dark:text-gray-200">
          {title}
        </div>
        <div className="absolute top-4 right-4 z-10 flex items-end gap-1 text-sm font-light tracking-wide group-hover:text-sky-300 dark:text-gray-500">
          View <FiChevronRight className="mb-0.5" />
        </div>
        <p className="text-lg leading-relaxed tracking-wide dark:text-gray-400">
          {description}
        </p>
        <hr className="my-4 dark:border-gray-800" />
        <div className="mb-2 flex items-center gap-2 text-sm dark:text-gray-400">
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
