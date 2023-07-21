import {
  FiCommand,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMoon,
  FiSearch,
  FiUser,
  FiZap,
} from "react-icons/fi";
import { getAllProjects } from "lib/api";
import { ProjectType } from "types/Project";
import { DATE_FORMAT } from "utils/dateTimeUtils";

interface Props {
  projects: ProjectType[];
}

const Labs = ({ projects }: Props): JSX.Element => (
  <div className="mx-auto min-h-screen max-w-2xl py-16">
    <div className="max-w-xs rounded-md border border-gray-800">
      <div className="p-6">
        <div className="flex items-baseline justify-between">
          <p className="mb-44 text-sm text-gray-400">Aug 20, 2020</p>
        </div>
        <h3 className="text-2xl">Project Title</h3>
      </div>
      <p className="border-t border-gray-900 p-6 text-gray-400">
        Lorem ipsum dolor sit amet consectetur adi pisicing elit.
      </p>
    </div>
  </div>
);

export default Labs;

export const getStaticProps = async () => {
  const projects = getAllProjects([
    "slug",
    "title",
    "description",
    "creationDate",
  ]);

  return {
    props: {
      projects,
    },
  };
};
