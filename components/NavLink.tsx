import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  link: string;
  label: string;
}

const NavLink = ({ link, label }: Props): JSX.Element => {
  const { asPath } = useRouter();
  const isActiveLink = asPath === link;

  return (
    <Link href={link}>
      <span
        className={`${
          isActiveLink ? "bg-gray-50 text-gray-900" : "text-gray-600"
        } rounded-lg py-2 px-3 font-medium hover:text-gray-900`}
      >
        {label}
      </span>
    </Link>
  );
};

export default NavLink;
