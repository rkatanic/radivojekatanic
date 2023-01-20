import Menu from "./Menu";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props): JSX.Element => (
  <div className="z-10 flex min-h-screen flex-col items-start justify-center bg-white  dark:bg-neutral-900">
    <Menu />
    <div className="h-60 w-full bg-gradient-to-r from-lime-100 via-sky-100 to-blue-100"></div>
    <div className="m-auto w-full max-w-3xl">{children}</div>
  </div>
);

export default Layout;
