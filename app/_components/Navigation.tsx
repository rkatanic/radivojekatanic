import { FaRegUserCircle } from "react-icons/fa";
import ThemeSwitch from "./ThemeSwitch";

export default function Navigation() {
  return (
    <header className="relative mx-auto max-w-5xl">
      <div className="flex items-center">
        <a
          href="#"
          className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200"
        >
          <FaRegUserCircle />
          <span className="text-lg font-semibold">rkatanic</span>
        </a>

        <div className="ml-auto flex items-center">
          <a
            href="mailto:rkatanic@outlook.com"
            target="_blank"
            rel="noopener referrer"
            className="relative flex h-8 max-w-min cursor-pointer items-center justify-center whitespace-nowrap rounded-full px-3 text-sm font-medium leading-6 text-indigo-600 ring-1 ring-indigo-400 dark:text-teal-400  dark:ring-teal-600"
          >
            Lets talk
          </a>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}
