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
  <div className="flex gap-4 border-b border-slate-800 pb-8">
    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-800 bg-gradient-to-t from-slate-800/70 to-slate-800/10">
      <TbSeeding size="1.25rem" className="stroke-sky-500" />
    </div>
    <div className="flex-1">
      <p className="mb-1 text-sm text-slate-500">
        {DATE_FORMAT.format(new Date(creationDate))}
      </p>
      <h3 className="font-serif text-lg font-semibold tracking-wide text-slate-200">
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
