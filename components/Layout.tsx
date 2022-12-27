import Menu from "./Menu";
import ThemeSwitch from "./ThemeSwitch";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props): JSX.Element => (
  <div className="z-10 flex min-h-screen items-start justify-center gap-8 bg-slate-50 py-16 px-8  dark:bg-gray-900">
    <Menu />
    <div className="z-10 flex gap-8">
      <div className="w-full max-w-xl"> {children}</div>
      <div className="sticky top-16 flex h-full flex-col gap-4">
        <ThemeSwitch />
      </div>
    </div>
  </div>
);

export default Layout;
