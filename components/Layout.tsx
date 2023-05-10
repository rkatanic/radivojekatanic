interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props): JSX.Element => <div>{children}</div>;

export default Layout;
