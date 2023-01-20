import { FiArrowRight, FiBox } from "react-icons/fi";
import { DATE_FORMAT } from "utils/dateTimeUtils";
import { ProjectType } from "../../types/Project";

interface Props {
  project: ProjectType;
}

const Project = ({
  project: { slug, title, description, creationDate },
}: Props): JSX.Element => (
  <a className="flex w-full" href={`/projects/${slug}`}>
    <div className="w-full rounded-lg border bg-white shadow-sm">
      <div className="p-6">
        <div className="mb-6 flex items-start gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-50 text-gray-400">
            <FiBox size="1.25rem" />
          </div>
          <div>
            <h3 className="text-lg font-medium leading-8 text-gray-900">
              {title}
            </h3>
            <p className="text-sm text-gray-500">
              {DATE_FORMAT.format(new Date(creationDate))}
            </p>
          </div>
        </div>
        <p className="leading-6 text-gray-600">{description}</p>
      </div>
      <div className="flex items-center gap-2 border-t p-4 px-6 text-sm font-medium text-sky-400">
        View project <FiArrowRight />
      </div>
    </div>
  </a>
);

export default Project;
