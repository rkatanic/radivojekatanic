interface Props {
  onClick: () => void;
  icon: JSX.Element;
}

const IconButon = ({ onClick, icon }: Props): JSX.Element => (
  <button
    type="button"
    onClick={onClick}
    className="group relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-neutral-200 bg-slate-50 shadow-sm hover:border-sky-500 hover:bg-sky-500 dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-md dark:hover:border-sky-500 dark:hover:bg-sky-500"
  >
    {icon}
  </button>
);

export default IconButon;
