import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  href: string;
  text: string;
}

const NavLink = ({ href, text }: Props): JSX.Element => {
  const { asPath } = useRouter();

  return (
    <Link
      href={href}
      className={classNames(
        {
          "text-zinc-800 dark:text-zinc-200": asPath === href,
        },
        {
          "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200":
            asPath !== href,
        }
      )}
    >
      {text}
    </Link>
  );
};

export default NavLink;
