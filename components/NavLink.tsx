import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  link: string;
  label: string;
  onClick?: () => void;
}

const NavLink = ({ link, label, onClick }: Props): JSX.Element => {
  const { asPath: activeLink } = useRouter();

  return (
    <Link href={link} onClick={onClick}>
      <span
        className={`block cursor-pointer dark:hover:text-neutral-200 hover:text-neutral-900 ${
          activeLink === link
            ? "dark:text-neutral-200 text-neutral-900"
            : "dark:text-neutral-500 text-neutral-400"
        }`}
      >
        {label}
      </span>
    </Link>
  );
};

export default NavLink;
