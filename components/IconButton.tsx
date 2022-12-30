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
    className="group relative flex h-10 w-10 items-center justify-center border-2 border-gray-200 bg-slate-50 shadow-sm hover:border-sky-500 hover:bg-sky-500 dark:border-gray-800 dark:bg-gray-900 dark:shadow-md dark:hover:border-sky-500 dark:hover:bg-sky-500"
  >
    {icon}
    <div className="pointer-events-none absolute left-[3.25rem] whitespace-nowrap border-2 border-gray-300 bg-slate-50 px-2 py-0.5 text-sm font-medium text-gray-500 opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:shadow-xl">
      <GoTriangleLeft className="absolute -left-2.5 top-1/2 -translate-y-1/2 fill-gray-300 dark:fill-gray-600" />
      {tooltip}
    </div>
  </button>
);

export default IconButon;
