import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from "react";

type Props = {
  title?: string;
  icon?: JSX.Element;
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | PromiseLikeOfReactNode
    | null
    | undefined;
};

export const Card = (props: Props) => (
  <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-700/40">
    {props.title && (
      <h2 className="flex items-center gap-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        {props.icon && props.icon}
        {props.title}
      </h2>
    )}
    {props.children}
  </div>
);

type CardItemProps = {
  title: string;
  description: string;
  from: string;
  to: string;
  icon: JSX.Element;
};

export const CardItem = ({
  title,
  description,
  from,
  to,
  icon,
}: CardItemProps) => {
  return (
    <div className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        {icon}
      </div>
      <div className="flex flex-auto flex-wrap gap-1 gap-x-2">
        <div className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {title}
        </div>
        <div className="text-sm text-zinc-500 dark:text-zinc-400">
          {description}
        </div>
        <div
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label="2019 until Present"
        >
          <time>{from}</time>{" "}
          <span aria-hidden="true" className="mx-1">
            {" "}
            —{" "}
          </span>
          <time>{to}</time>
        </div>
      </div>
    </div>
  );
};
