import Link from "next/link";
import { useRouter } from "next/router";
import { FiCircle, FiSquare, FiTriangle } from "react-icons/fi";

interface Props {
  path: string;
  label: string;
}

const NavLink = ({ path, label }: Props): JSX.Element => {
  const { asPath } = useRouter();
  const isActiveLink = asPath.includes(path);

  return (
    <Link
      href={path}
      className={`
      text-alt relative max-w-min text-lg font-semibold tracking-wide
       ${
         isActiveLink
           ? "text-neutral-800"
           : "text-neutral-500 hover:text-neutral-800"
       }
      `}
    >
      {isActiveLink && (
        <FiCircle className="absolute -left-4 top-1/2 -translate-y-1/2 fill-neutral-400 stroke-neutral-800 stroke-[5] text-[0.5rem]" />
      )}
      {label}
    </Link>
  );
};

export default NavLink;
