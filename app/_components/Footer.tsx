import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <footer className="mt-16 border-t pb-4 pt-12 dark:border-zinc-800">
    <div className="flex gap-6">
      <a
        href="https://github.com/rkatanic"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="size-5 dark:text-zinc-400 dark:hover:text-zinc-300" />
      </a>
      <a
        href="https://www.linkedin.com/in/radivoje-katanic/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="size-5 dark:text-zinc-400 dark:hover:text-zinc-300" />
      </a>
    </div>
  </footer>
);

export default Footer;
