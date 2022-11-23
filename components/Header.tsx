import ThemeSwitch from "./ThemeSwitch";
import Menu from "./Menu";

const LINKS = [
  { link: "/", label: "About" },
  { link: "/labs", label: "Labs" },
  { link: "/contact", label: "Contact" },
];

const Header = (): JSX.Element => (
  <div className="sm:shadow-none m-auto w-full max-w-2xl flex items-center justify-between sm:py-10 py-7 mb-8 sm:mb-0 font-medium dark:bg-neutral-900 bg-white fixed px-6 sm:px-0 left-0 sm:relative top-0 h-12 z-20 shadow-xl dark:shadow-black/50 sm:border-0 border-b dark:border-neutral-800">
    <div className="dark:text-gray-200 text-gray-900 text-sm">RK</div>
    <div className="flex gap-4">
      <div className="sm:hidden">
        <ThemeSwitch />
      </div>
      <Menu />
    </div>
  </div>
);

export default Header;
