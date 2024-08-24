"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

interface Props {
  href: string;
  label: string;
}

const NavLink = ({ href, label }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={twMerge(
        classNames(
          "font-medium dark:text-zinc-400 dark:hover:text-zinc-300",
          isActive && "dark:text-zinc-100",
        ),
      )}
    >
      {label}
    </Link>
  );
};

export default NavLink;
