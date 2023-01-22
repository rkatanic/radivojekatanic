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
          isActiveLink
            ? "text-blue-500 before:absolute before:left-0 before:bottom-0 before:h-[3px] before:w-full before:rounded-t-lg before:bg-blue-400"
            : "text-gray-500"
        } relative flex rounded-lg p-4 px-6 text-sm font-semibold hover:text-gray-900`}
      >
        {label}
      </span>
    </Link>
  );
};

export default NavLink;
