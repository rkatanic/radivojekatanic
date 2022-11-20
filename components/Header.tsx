import NavLink from "./NavLink";
import ThemeSwitch from "./ThemeSwitch";
import { FiMenu } from "react-icons/fi";
import Menu from "./Menu";

const LINKS = [
  { link: "/", label: "About" },
  { link: "/labs", label: "Labs" },
  { link: "/contact", label: "Contact" },
];

const Header = (): JSX.Element => (
  <div className="m-auto w-full max-w-2xl flex items-center justify-between py-10 font-medium">
    <div className="dark:text-gray-200 text-gray-900 text-sm">RK</div>
    <Menu />
  </div>
);

export default Header;
