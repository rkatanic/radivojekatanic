import { GoTriangleLeft } from "react-icons/go";

interface Props {
  onClick: () => void;
  icon: JSX.Element;
  tooltip: string;
}

const IconButon = ({ onClick, icon, tooltip }: Props): JSX.Element => (
  <button
    type="button"
    onClick={onClick}
    className="group relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-neutral-200 bg-slate-50 shadow-sm hover:border-sky-500 hover:bg-sky-500 dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-md dark:hover:border-sky-500 dark:hover:bg-sky-500"
  >
    {icon}
    <div className="pointer-events-none absolute left-[3.25rem] whitespace-nowrap border-2 border-neutral-300 bg-slate-50 px-2 py-0.5 text-sm font-medium text-neutral-500 opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:shadow-xl">
      <GoTriangleLeft className="absolute -left-2.5 top-1/2 -translate-y-1/2 fill-neutral-300 dark:fill-neutral-600" />
      {tooltip}
    </div>
  </button>
);

export default IconButon;
