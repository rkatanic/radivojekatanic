interface Props {
  href: string;
  icon: JSX.Element;
}

const IconButon = ({ href, icon }: Props): JSX.Element => (
  <a
    target="blank"
    href={href}
    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 text-sm font-medium tracking-wider hover:bg-gray-100 hover:text-gray-950"
  >
    {icon}
  </a>
);

export default IconButon;
