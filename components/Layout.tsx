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
    <div className="z-10 flex min-h-screen items-start justify-center gap-8 bg-slate-50 py-16 px-8  dark:bg-gray-900">
      <Menu />
      <div className="z-10 flex gap-8">
        <div className="w-full max-w-xl"> {children}</div>
        <div className="sticky top-16 flex h-full flex-col gap-3">
          <ThemeSwitch />
          {isProjectPage && (
            <IconButon
              onClick={navigateToProjectsPage}
              icon={
                <TbArrowBackUp
                  data-testid="go-back-icon"
                  className="stroke-gray-400 group-hover:stroke-gray-900 dark:group-hover:stroke-white"
                />
              }
              tooltip="Go Back"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
