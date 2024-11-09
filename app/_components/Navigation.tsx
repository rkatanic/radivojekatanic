const Navigation = () => (
  <nav className="not-prose flex flex-1 items-center gap-4">
    <div className="flex items-center gap-3">
      <span className="relative">
        <span
          className="absolute inset-x-2 -bottom-2.5 h-0.5 rounded-full bg-zinc-950 dark:bg-white"
          style={{ opacity: 1 }}
        />
        <a
          className="relative flex min-w-0 items-center gap-3 rounded-lg p-2 text-left text-base/6 font-medium text-zinc-950 data-[active]:bg-zinc-950/5 data-[hover]:bg-zinc-950/5 data-[slot=avatar]:*:-m-0.5 data-[slot=avatar]:*:size-7 data-[slot=icon]:*:size-6 data-[slot=icon]:*:shrink-0 data-[slot=icon]:*:data-[active]:fill-zinc-950 data-[slot=icon]:*:data-[hover]:fill-zinc-950 data-[slot=icon]:*:fill-zinc-500 data-[slot=avatar]:*:[--avatar-radius:theme(borderRadius.DEFAULT)] data-[slot=avatar]:*:[--ring-opacity:10%] dark:text-white dark:data-[active]:bg-white/5 dark:data-[hover]:bg-white/5 dark:data-[slot=icon]:*:data-[active]:fill-white dark:data-[slot=icon]:*:data-[hover]:fill-white dark:data-[slot=icon]:*:fill-zinc-400 sm:text-sm/5 sm:data-[slot=avatar]:*:size-6 sm:data-[slot=icon]:*:size-5 data-[slot=icon]:last:[&:not(:nth-child(2))]:*:ml-auto data-[slot=icon]:last:[&:not(:nth-child(2))]:*:size-5 sm:data-[slot=icon]:last:[&:not(:nth-child(2))]:*:size-4"
          data-current="true"
          data-headlessui-state=""
          href="#"
        >
          <span
            className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
            aria-hidden="true"
          />
          Home
        </a>
      </span>
    </div>
  </nav>
);

export default Navigation;
