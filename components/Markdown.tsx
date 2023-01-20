import { FiCheck } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { toKebabLowerCase } from "utils/stringUtils";

interface Props {
  markdown: string;
}

const Markdown = ({ markdown }: Props): JSX.Element => (
  <div className="my-8">
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p,
        h3,
        li,
        a,
      }}
    >
      {markdown}
    </ReactMarkdown>
  </div>
);

export default Markdown;

const h3 = ({ children }: any): JSX.Element => {
  const hrefId = toKebabLowerCase(children[0] as string);
  return (
    <a
      href={`#${hrefId}`}
      id={hrefId}
      className="relative mb-4 block text-2xl font-semibold before:absolute before:-left-6  before:text-neutral-300 before:opacity-0 before:transition-opacity before:duration-300 before:content-['#'] hover:before:opacity-100 dark:text-neutral-200 dark:before:text-neutral-700"
    >
      {children}
    </a>
  );
};

const p = ({ children }: any) => (
  <p className="mb-4 text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
    {children}
  </p>
);

const a = ({ children, node }: any) => (
  <a
    href={node?.properties?.href}
    target="_blank"
    rel="noreferrer"
    className="mb-4 cursor-pointer border-b border-neutral-900 text-lg leading-relaxed text-neutral-900 hover:border-sky-500 hover:text-sky-500 dark:border-neutral-200 dark:text-neutral-200 dark:hover:border-sky-300 dark:hover:text-sky-300"
  >
    {children}
  </a>
);

const li = ({ checked, children }: any): JSX.Element => (
  <li className="flex items-center gap-3 text-lg leading-8 text-neutral-500 dark:text-neutral-400">
    {checked ? (
      <div className="flex h-4 w-4 items-center justify-center bg-sky-500 shadow-sm dark:shadow-md">
        <FiCheck className="stroke-white stroke-[3px]" size="0.75rem" />
      </div>
    ) : (
      <div className="flex h-4 w-4 items-center justify-center border border-neutral-300 bg-slate-50 shadow-sm dark:border-neutral-600 dark:bg-neutral-900 dark:shadow-md"></div>
    )}
    {children[2]}
  </li>
);
