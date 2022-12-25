import NavLink from "./NavLink";
import ThemeSwitch from "./ThemeSwitch";
import { FiMail, FiUser, FiZap } from "react-icons/fi";

const LINKS = [
  { link: "/about", label: "About", icon: <FiUser /> },
  { link: "/projects", label: "Labs", icon: <FiZap /> },
  // {
  //   link: "/contact",
  //   label: "Contact",
  //   icon: <FiMail />,
  // },
];

const Menu = (): JSX.Element => (
  <div className="sticky top-20 max-h-min w-64 border p-4 shadow-md dark:border-gray-700 dark:bg-gray-900">
    <div className="flex flex-col items-center">
      <div className="relative my-3 flex h-16 w-16 items-center justify-center rounded-full bg-gray-50 text-2xl dark:bg-gray-800">
        <span className="dark:text-gray-200">rk</span>
        {/* <div className="absolute top-2.5 right-2.5 ml-1 mt-1 h-2.5 w-2.5 rounded-full border-2"></div> */}
      </div>
      <h1 className="text-xl font-medium dark:text-gray-200">
        Radivoje Katanic
      </h1>
      <h3 className="text-lg text-gray-400">Software Developer</h3>
    </div>
    <hr className="my-4 dark:border-gray-800" />
    <div>
      {LINKS.map(({ link, label, icon }, i) => (
        <NavLink key={i} link={link} label={label} icon={icon} />
      ))}
    </div>
    {/* <hr className="my-4 dark:border-gray-800" /> */}
    {/* <ThemeSwitch /> */}
  </div>
);

export default Menu;
