import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  link: string;
  label: string;
}

const NavLink = ({ link, label }: Props): JSX.Element => {
  const { asPath: activeLink } = useRouter();

  return (
    <Link href={link}>
      <span
        className={`cursor-pointer dark:hover:text-gray-200 hover:text-gray-900 ${
          activeLink === link
            ? "dark:text-gray-200 text-gray-900"
            : "dark:text-gray-400 text-gray-300"
        }`}
      >
        {label}
      </span>
    </Link>
  );
};

export default NavLink;
