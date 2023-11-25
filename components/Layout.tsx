import ThemeSwitch from "./ThemeSwitch";
import Footer from "./Footer";

interface Props {
  children: JSX.Element;
  locale: string;
}

const Layout = ({ children, locale }: Props): JSX.Element => (
  <div className="text-neutral-6000 relative mx-auto min-h-screen dark:bg-neutral-900 dark:text-neutral-200">
    <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-12">
      <div className="flex items-center gap-2 text-xl font-bold">
        <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-neutral-900 text-sm font-semibold">
          rk
        </div>
        <span className="hidden sm:block">radivoje katanic</span>
      </div>
      <div className="flex items-center gap-2">
        <ThemeSwitch />

        <div className="flex gap-1 rounded-full bg-neutral-100 p-1 font-medium text-neutral-500">
          <a
            href=""
            className="rounded-full bg-neutral-900 p-1 px-4 text-neutral-200"
          >
            About
          </a>

          <a
            href=""
            className="rounded-full p-1 px-4 text-neutral-900 hover:bg-neutral-200"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
    <div className="xpx-6 mx-auto w-full max-w-2xl flex-1 px-6 py-16">
      {children}
    </div>
    <Footer />
  </div>
);

export default Layout;
