import { HiBookmark } from "react-icons/hi2";

interface Props {
  icon: JSX.Element;
  title: string;
  description: JSX.Element;
}

const ListItem = ({ icon, title, description }: Props) => (
  <div className="relative flex items-start pb-2">
    <div className="absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px dark:bg-zinc-800" />
    <div className="absolute ml-[-14px] py-2">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-sm font-semibold text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100">
        {icon}
      </div>
    </div>
    <div className="w-full overflow-hidden pl-12 pr-px">
      <p className="prose mt-2 font-semibold text-zinc-900 dark:prose-invert dark:text-zinc-100">
        {title}
      </p>
      {description}
    </div>
  </div>
);

export default ListItem;
