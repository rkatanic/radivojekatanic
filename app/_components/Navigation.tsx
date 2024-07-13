import { MoonIcon } from "@heroicons/react/24/outline";
import { FaRegUserCircle } from "react-icons/fa";
export default function Navigation() {
  return (
    <header className="relative mx-auto max-w-5xl">
      <div className="flex items-center">
        <a href="#" className="flex items-center gap-2">
          <FaRegUserCircle />
          <span className="text-lg font-semibold">rkatanic</span>
        </a>

        <div className="ml-auto flex items-center">
          <a
            href="mailto:rkatanic@outlook.com"
            target="_blank"
            rel="noopener referrer"
            className="relative flex h-8 max-w-min cursor-pointer items-center justify-center whitespace-nowrap rounded-full px-3 text-sm font-medium leading-6 text-indigo-600 ring-1  ring-indigo-400"
          >
            Lets talk
          </a>
          <div className="ml-3 flow-root">
            <a href="#" className="group ml-auto flex h-8 items-center px-2">
              <MoonIcon
                aria-hidden="true"
                className="h-5 w-5 flex-shrink-0 text-zinc-400 group-hover:text-zinc-600"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
