import { FiChevronDown, FiChevronUp, FiSearch, FiSun } from "react-icons/fi";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import Menu from "./Menu";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props): JSX.Element => (
  <div className="z-10 flex min-h-screen items-start justify-center gap-8 py-20 px-8  dark:bg-gray-900">
    <Menu />
    <div className="z-10 flex gap-8">
      <div className="w-full max-w-xl"> {children}</div>
    </div>
  </div>
);

export default Layout;
