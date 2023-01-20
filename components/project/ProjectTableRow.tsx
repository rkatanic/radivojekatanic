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
      return <FiZap className="stroke-neutral-400" />;
    case "image":
      return <FiImage className="stroke-neutral-400" />;
    default:
      return <FiFile className="stroke-neutral-400" />;
  }
};

const ProjectTableRow = ({
  link: { title, href, type },
}: Props): JSX.Element => (
  <div className="flex h-11 items-center gap-3 border-b px-4 last:border-0 hover:bg-slate-100/50 dark:border-neutral-800 dark:hover:bg-neutral-800/30">
    <ProjectTableRowIcon type={type} />
    <a
      href={href}
      className={`${
        href === "" ? "pointer-events-none" : "border-b"
      } cursor-pointer border-neutral-900 leading-tight tracking-wide hover:border-sky-500 hover:text-sky-500 dark:border-neutral-200 dark:text-neutral-200 dark:hover:border-sky-300 dark:hover:text-sky-300`}
    >
      {title}
    </a>
  </div>
);

export default ProjectTableRow;
