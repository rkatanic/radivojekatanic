import { FiArrowRight } from "react-icons/fi";
import { DATE_FORMAT } from "utils/dateTimeUtils";
import { ProjectType } from "../types/Project";
import { TbSeeding } from "react-icons/tb";

interface Props {
  project: ProjectType;
}

const Project = ({
  project: { title, description, creationDate },
}: Props): JSX.Element => (
  <div className="flex gap-4 border-b border-gray-800 pb-8">
    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-800 bg-gradient-to-t from-gray-800/70 to-gray-800/10">
      <TbSeeding size="1.25rem" className="stroke-sky-500" />
    </div>
    <div className="flex-1">
      <p className="mb-1 text-sm text-gray-500">
        {DATE_FORMAT.format(new Date(creationDate))}
      </p>
      <h3 className="font-serif text-lg font-semibold tracking-wide text-gray-200">
        {title}
      </h3>
      <p className="mt-2">{description}</p>
      {/* <button className="border-tran mt-4 flex items-center gap-2 border-b border-transparent text-sm text-sky-400 hover:border-sky-500">
        View more <FiArrowRight />
      </button> */}
    </div>
  </div>
);

export default Project;
