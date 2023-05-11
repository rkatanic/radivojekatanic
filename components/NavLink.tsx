import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  path: string;
  label: string;
}

const NavLink = ({ path, label }: Props): JSX.Element => {
  const { asPath } = useRouter();
  const isActiveLink = asPath === path;

  return (
    <Link
      href={path}
      className={`${
        isActiveLink
          ? "bg-gray-100 text-gray-900"
          : "hover:bg-gray-800 hover:text-gray-200"
      } rounded-full p-0.5 px-3 text-sm font-semibold text-gray-400`}
    >
      {label}
    </Link>
  );
};

export default NavLink;
