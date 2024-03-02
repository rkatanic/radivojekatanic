import { useRouter } from "next/router";
import { TbUserCircle } from "react-icons/tb";

interface Props {
  children: JSX.Element;
  locale: string;
}

const Layout = ({ children }: Props): JSX.Element => {
  const { asPath } = useRouter();

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-400">{children}</div>
  );
};

export default Layout;
