import Menu from "./Menu";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props): JSX.Element => (
  <div className="flex min-h-screen items-start justify-center gap-8 py-20 px-8  dark:bg-gray-900">
    <Menu />
    <div className="w-full max-w-xl"> {children}</div>
  </div>
);

export default Layout;
