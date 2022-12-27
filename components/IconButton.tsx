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
    className="group relative flex h-10 w-10 items-center justify-center border border-gray-300 bg-slate-50 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:shadow-md"
  >
    {icon}
    <div className="pointer-events-none absolute left-[3.25rem] whitespace-nowrap border border-gray-300 bg-slate-50 px-2 py-0.5 text-sm text-gray-600 opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:shadow-xl">
      <GoTriangleLeft className="absolute -left-2.5 top-1/2 -translate-y-1/2 fill-gray-300 dark:fill-gray-600" />
      {tooltip}
    </div>
  </button>
);

export default IconButon;
