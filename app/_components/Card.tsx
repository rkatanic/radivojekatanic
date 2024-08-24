interface Props {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Card = ({ icon, title, description }: Props) => (
  <div className="not-prose my-2 block w-full rounded-xl border border-zinc-950/10 font-normal ring-2 ring-transparent dark:border-white/10">
    <div className="px-6 py-5">
      <div className="h-6 w-6 fill-zinc-800 text-zinc-800 dark:fill-zinc-100 dark:text-zinc-100">
        {icon}
      </div>
      <div>
        <h4 className="mt-4 text-base font-semibold text-zinc-800 dark:text-zinc-100">
          {title}
        </h4>
        <p className="mb-1 mt-4">{description}</p>
      </div>
    </div>
  </div>
);

export default Card;
