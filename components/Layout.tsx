import Footer from "./Footer";
import Navigation from "./Navigation";
import Profile from "./Profile";
import ThemeSwitch from "./ThemeSwitch";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props): JSX.Element => <div>{children}</div>;

export default Layout;
