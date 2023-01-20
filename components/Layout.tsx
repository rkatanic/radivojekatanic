import { useRouter } from "next/router";
import IconButon from "./IconButton";
import Menu from "./Menu";
import ThemeSwitch from "./ThemeSwitch";
import { TbArrowBackUp } from "react-icons/tb";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props): JSX.Element => {
  const router = useRouter();
  const isProjectPage = router.pathname.includes("/projects/[slug]");

  const navigateToProjectsPage = (): void => {
    router.push("/projects");
  };

  return (
    <div className="z-10 flex min-h-screen flex-col items-start justify-center bg-slate-50  dark:bg-neutral-900">
      <div className="-mb-8 h-60 w-full bg-gradient-to-r from-orange-300 via-fuchsia-300 to-indigo-300"></div>
      <div className="m-auto w-full max-w-3xl"> {children}</div>
    </div>
  );
};

export default Layout;
