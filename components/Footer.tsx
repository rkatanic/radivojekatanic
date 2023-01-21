import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = (): JSX.Element => (
  <div className="w-full border-t py-12">
    <div className="m-auto flex max-w-3xl items-center justify-between text-gray-400">
      <span>© {new Date().getFullYear()} Radivoje Katanic</span>
      <div className="flex gap-6">
        <a
          className="hover:text-gray-900"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/radivoje-katanic"
        >
          <FiLinkedin />
        </a>
        <a
          className="hover:text-gray-900"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/rkatanic"
        >
          <FiGithub />
        </a>
        <a
          className="hover:text-gray-900"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:rkatanic96@gmail.com"
        >
          <FiMail />
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
