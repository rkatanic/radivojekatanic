import Card from "app/_components/Card";
import Footer from "app/_components/Footer";
import Navigation from "app/_components/Navigation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiExternalLink } from "react-icons/fi";

const Contact = () => (
  <div>
    <Navigation />

    <div className="prose prose-zinc relative dark:prose-invert prose-headings:text-zinc-100 prose-a:border-b prose-a:border-b-red-500 prose-a:no-underline prose-a:dark:text-zinc-100">
      <h2>Get In Touch</h2>
      <p>
        Have a question, or just want to say hello? Probably the best way to
        contact me these days would be via e-mail:
      </p>
      <ul>
        <li>
          <a href="mailto:rkatanic@outlook.com">rkatanic@outlook.com</a>
        </li>
      </ul>

      <h3>Social links</h3>
      <p>You can find my source code on GitHub or message me on LinkedIn.</p>
      <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2">
        <Card
          href="https://github.com/rkatanic"
          icon={<FiGithub className="size-5 text-red-500" />}
          title="GitHub"
        />
        <Card
          href="https://www.linkedin.com/in/radivoje-katanic/"
          icon={<FiLinkedin className="size-5 stroke-[1.5px] text-red-500" />}
          title="LinkedIn"
        />
      </div>
    </div>
    <Footer />
  </div>
);

export default Contact;
