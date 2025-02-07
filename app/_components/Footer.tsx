const Footer = () => (
  <footer>
    <div className="mt-20 flex flex-col justify-between gap-4 border-t border-zinc-200 py-12 text-center text-sm text-zinc-500 dark:border-zinc-800 lg:flex-row lg:items-center lg:text-left">
      <div>
        © {new Date().getFullYear()} Radivoje Katanic. All rights reserved.
      </div>
      <div>Built with Next.js and simplicity in mind.</div>
    </div>
  </footer>
);

export default Footer;
