const Navigation = () => (
  <nav className="not-prose flex flex-1 items-center gap-8 pb-10">
    <div className="flex items-center gap-3">
      <span className="relative">
        <span
          className="absolute -bottom-5 left-0 h-0.5 w-full rounded-full bg-violet-600 dark:bg-white"
          style={{ opacity: 1 }}
        />
        <a
          className="font-medium text-violet-600"
          data-current="true"
          data-headlessui-state=""
          href="#"
        >
          <span
            className="absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
            aria-hidden="true"
          />
          Home
        </a>
      </span>
    </div>
    <a
      className="font-medium text-gray-800"
      data-current="true"
      data-headlessui-state=""
      href="#"
    >
      Projects
    </a>
    <a
      className="font-medium text-gray-800"
      data-current="true"
      data-headlessui-state=""
      href="#"
    >
      Contact
    </a>
  </nav>
);

export default Navigation;
