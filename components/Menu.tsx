import NavLink from "./NavLink";
import { FiGithub, FiLinkedin, FiMail, FiUser } from "react-icons/fi";
import { RiFlaskLine } from "react-icons/ri";

const LINKS = [
  { link: "/about", label: "About", icon: <FiUser /> },
  { link: "/projects", label: "Labs", icon: <RiFlaskLine /> },
  // {
  //   link: "/contact",
  //   label: "Contact",
  //   icon: <FiMail />,
  // },
];

const Menu = (): JSX.Element => (
  <div className="sticky top-20 w-64 border p-4 shadow-md dark:border-gray-700 dark:bg-gray-900">
    <div className="mt-2 flex flex-col items-center gap-4">
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gray-50 text-2xl dark:bg-gray-800">
        <span className="dark:text-gray-200">rk</span>
      </div>

      <div className="text-center">
        <h1 className="text-xl font-medium dark:text-gray-200">
          Radivoje Katanic
        </h1>
        <h3 className="text-lg text-gray-400">Software Developer</h3>
      </div>

      <div className="flex justify-center gap-6">
        <a href="https://github.com/rkatanic" target="_blank" rel="noreferrer">
          <FiGithub className="dark:stroke-gray-400 dark:hover:stroke-sky-400" />
        </a>
        <a
          href="https://www.linkedin.com/in/radivoje-katanic/"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin className="dark:stroke-gray-400 dark:hover:stroke-sky-400" />
        </a>
        <a href="mailto:rkatanic@outlook.com" target="_blank" rel="noreferrer">
          <FiMail className="dark:stroke-gray-400 dark:hover:stroke-sky-400" />
        </a>
      </div>
    </div>

    <hr className="my-4 dark:border-gray-800" />
    <div>
      {LINKS.map(({ link, label, icon }, i) => (
        <NavLink key={i} link={link} label={label} icon={icon} />
      ))}
    </div>
  </div>
);

export default Menu;
