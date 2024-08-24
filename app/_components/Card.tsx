import classNames from "classnames";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  icon?: JSX.Element;
  title: string;
  description?: string;
  href?: string;
}

const CardWrapper = ({
  href,
  children,
}: {
  href: string | undefined;
  children?: ReactNode;
}) => {
  const cn = twMerge(
    classNames(
      "not-prose my-2 block w-full rounded-xl border border-zinc-950/10 font-normal dark:border-white/10",
      href && "dark:hover:border-red-500",
    ),
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cn}>
      {children}
    </a>
  ) : (
    <div className={cn}>{children}</div>
  );
};

const Card = ({ icon, title, description, href }: Props) => (
  <CardWrapper href={href}>
    <div className="px-6 py-5">
      {icon && (
        <div className="h-6 w-6 fill-zinc-800 text-zinc-800 dark:fill-zinc-100 dark:text-zinc-100">
          {icon}
        </div>
      )}
      <h4 className="mt-4 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        {title}
      </h4>
      {description && <p className="mb-1 mt-4">{description}</p>}
    </div>
  </CardWrapper>
);

export default Card;
