import classNames from "classnames";
import Link from "next/link";
import { FiCodepen, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import NavLink from "./NavLink";

const Sidebar = (): JSX.Element => {
  return (
    <div className="top-0 flex w-full max-w-xs flex-col gap-8 py-8 pb-4 lg:sticky lg:h-screen lg:py-16 xl:max-w-sm">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-950 text-gray-200 lg:mb-4">
        <FiCodepen size="1.5rem" />
      </div>

      <div className="flex h-full flex-1 flex-col justify-between">
        <div>
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-medium text-gray-900">
              Radivoje Katanic
            </h1>
            <h3 className="text-lg text-gray-600">Software Developer</h3>
            <p className="mt-4 hidden max-w-lg leading-6 text-gray-950 lg:my-6 lg:block lg:max-w-xs">
              Hey there 👋. I am Radivoje Katanic, Web Developer from Doboj,
              Bosnia. In a free time I do some sports and gardening.
            </p>

            <div className="text-x hidden flex-col items-start gap-2 text-gray-600 lg:flex">
              <a
                href=""
                className="flex items-center gap-3 hover:text-gray-950 hover:underline"
              >
                <FiGithub />
                github
              </a>
              <a
                href=""
                className="flex items-center gap-3 hover:text-gray-950 hover:underline"
              >
                <FiLinkedin />
                linkedin
              </a>
              <a
                href=""
                className="flex items-center gap-3 hover:text-gray-950 hover:underline"
              >
                <FiMail />
                e-mail
              </a>
            </div>
          </div>
        </div>

        <div className="hidden flex-col items-start gap-6 lg:flex">
          <div className="flex max-w-min items-center gap-1 rounded-full bg-gray-50 p-1 text-sm font-medium">
            <NavLink href="/about" text="About" />
            <NavLink href="/craft" text="Work" />
            <NavLink href="/contact" text="Contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
