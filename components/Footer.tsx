const Footer = () => (
  <div className="m-auto w-full max-w-2xl flex items-end justify-between py-10 border-t dark:border-neutral-800 mt-16 text-sm text-neutral-400 dark:text-neutral-500">
    <div className="hidden sm:block whitespace-nowrap flex-1">
      © 2022 Radivoje Katanic.
    </div>
    <div className="sm:hidden whitespace-nowrap flex-1">© 2022 Radivoje K.</div>
    <div className="flex gap-4">
      <a
        className="hover:text-neutral-900 dark:hover:text-neutral-200 hover:underline"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/rkatanic"
      >
        GitHub
      </a>
      <a
        className="hover:text-neutral-900 dark:hover:text-neutral-200 hover:underline"
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/radivoje-katanic"
      >
        LinkedIn
      </a>
    </div>
  </div>
);

export default Footer;
