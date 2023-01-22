import Footer from "./Footer";
import Menu from "./Menu";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props): JSX.Element => (
  <div className="z-10 flex min-h-screen flex-col items-start justify-between bg-white  dark:bg-neutral-900">
    {/* <Menu /> */}
    <div className="mx-auto w-full max-w-4xl">{children}</div>
    <Footer />
  </div>
);

export default Layout;
