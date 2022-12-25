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
  <div className="flex items-center gap-3 border-b border-gray-800 py-2.5 px-4 hover:bg-gray-800/30">
    <ProjectTableRowIcon type={type} />
    <a
      href={href}
      className={`${
        href === "" ? "pointer-events-none dark:text-gray-400" : "text-gray-100"
      } cursor-pointer tracking-wide  hover:text-sky-300 hover:underline`}
    >
      {title}
    </a>
  </div>
);

export default ProjectTableRow;
