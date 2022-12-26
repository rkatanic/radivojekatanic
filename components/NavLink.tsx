import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  link: string;
  label: string;
  icon: JSX.Element;
}

const NavLink = ({ link, label, icon }: Props): JSX.Element => {
  const { asPath } = useRouter();
  const isActiveLink = asPath.includes(link);

  return (
    <Link href={link}>
      <span
        className={`${
          isActiveLink
            ? "bg-sky-500 dark:text-gray-50"
            : "text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
        } flex items-center gap-3 py-2 px-3 font-medium`}
      >
        {icon}
        {label}
      </span>
    </Link>
  );
};

export default NavLink;
