const ScrollIndicator = (): JSX.Element => (
  <div className="hidden lg:flex absolute top-0 -left-16 h-full flex-col justify-between font-medium dark:font-normal">
    <a
      id="top"
      href="#bottom"
      className="group flex items-end gap-2 w-0 h-0 mt-10 -rotate-90 dark:text-gray-600 text-sm text-gray-300 dark:hover:text-gray-200 hover:text-gray-900"
    >
      <div className="group-hover:bg-gray-900 dark:group-hover:bg-gray-200 bg-gray-300 dark:bg-gray-600 w-6 h-px absolute -top-[0.55rem] -left-8"></div>
      <div>scroll</div>
    </a>
    <a
      id="bottom"
      href="#"
      className="group flex items-end gap-2 w-0 h-0 mt-10 -rotate-90 dark:text-gray-600 text-sm text-gray-300 dark:hover:text-gray-200 hover:text-gray-900"
    >
      <div className="group-hover:bg-gray-900 dark:group-hover:bg-gray-200 bg-gray-300 dark:bg-gray-600 w-6 h-px absolute -top-[0.65rem] left-12"></div>
      <div>scroll</div>
    </a>
  </div>
);

export default ScrollIndicator;
