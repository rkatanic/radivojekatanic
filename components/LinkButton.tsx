import { ReactElement } from "react-markdown/lib/react-markdown";

interface Props {
  label: string;
  href: string;
  icon?: JSX.Element;
}

const LinkButton = ({ label, href, icon }: Props): ReactElement => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-10 max-w-min items-center gap-2 whitespace-nowrap rounded-lg border border-gray-800 p-2 px-4 font-medium"
  >
    {icon && icon}
    {label}
  </a>
);

export default LinkButton;
