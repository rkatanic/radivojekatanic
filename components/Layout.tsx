import { useRouter } from "next/router";
import { TbUserCircle } from "react-icons/tb";

interface Props {
  children: JSX.Element;
  locale: string;
}

const Layout = ({ children }: Props): JSX.Element => {
  const { asPath } = useRouter();

  return (
    <div className="min-h-screen bg-neutral-950 text-zinc-300">{children}</div>
  );
};

export default Layout;
