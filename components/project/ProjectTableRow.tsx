import { FiFile, FiImage, FiZap } from "react-icons/fi";
import { ProjectLink, ProjectLinkType } from "types/Project";

interface Props {
  link: ProjectLink;
}

interface ProjectTableRowIconProps {
  type: ProjectLinkType;
}

const ProjectTableRowIcon = ({
  type,
}: ProjectTableRowIconProps): JSX.Element => {
  switch (type) {
    case "application":
      return <FiZap className="stroke-gray-400" />;
    case "image":
      return <FiImage className="stroke-gray-400" />;
    default:
      return <FiFile className="stroke-gray-400" />;
  }
};

const ProjectTableRow = ({
  link: { title, href, type },
}: Props): JSX.Element => (
  <div className="flex items-center gap-3 border-b py-3 px-4 last:border-0 hover:bg-slate-100/50 dark:border-gray-800 dark:hover:bg-gray-800/30">
    <ProjectTableRowIcon type={type} />
    <a
      href={href}
      className={`${
        href === "" ? "pointer-events-none" : "border-b"
      } cursor-pointer border-gray-900 leading-tight tracking-wide hover:border-sky-500 hover:text-sky-500 dark:border-gray-200 dark:text-gray-200 dark:hover:border-sky-300 dark:hover:text-sky-300`}
    >
      {title}
    </a>
  </div>
);

export default ProjectTableRow;
