import { FiMoon } from "react-icons/fi";
import Navigation from "./Navigation";
import Link from "next/link";
import { useRouter } from "next/router";
import { TbArrowBackUp } from "react-icons/tb";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props): JSX.Element => {
  const { asPath } = useRouter();

  return (
    <div className="relative flex justify-center gap-12">
      <Navigation />
      <div className="w-full max-w-2xl pb-12 pt-16">{children}</div>
      <div className="sticky top-0 flex h-screen w-full max-w-min flex-col items-start justify-between p-10 pt-16">
        <div className="flex w-8 flex-col items-center gap-4 text-lg text-neutral-400">
          <FiMoon />
          {asPath.includes("/projects/") && (
            <Link
              href="/projects"
              className="flex items-center justify-center rounded-full bg-neutral-700 p-2.5 text-white"
            >
              <TbArrowBackUp />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
