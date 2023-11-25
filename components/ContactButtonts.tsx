import { TbMail } from "react-icons/tb";
import LinkButton from "./LinkButton";
import { Link } from "./Markdown";

const ContactButtons = () => (
  <div className="my-6 flex items-center gap-4">
    <LinkButton
      icon={<TbMail />}
      label="Let's talk"
      href="mailto:rkatanic@outlook.com"
    />
    <Link href="https://www.google.com">View full resume</Link>
  </div>
);

export default ContactButtons;
