interface Props {
  href: string;
  label: string;
}
const Link = ({ href, label }: Props) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="border-b border-neutral-600 text-neutral-600 hover:border-neutral-800 hover:text-neutral-800"
  >
    {label}
  </a>
);

export default Link;
