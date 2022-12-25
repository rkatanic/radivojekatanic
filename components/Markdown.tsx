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
      children={markdown}
      components={{
        p,
        h3,
        li,
      }}
    />
  </div>
);

export default Markdown;

const h3 = ({ children }: any): JSX.Element => {
  const hrefId = toKebabLowerCase(children[0] as string);
  return (
    <a
      href={`#${hrefId}`}
      id={hrefId}
      className="relative mb-4 block text-2xl font-semibold before:absolute before:-left-6 before:text-gray-700 before:opacity-0 before:transition-opacity before:duration-300 before:content-['#'] hover:before:opacity-100 dark:text-gray-200"
    >
      {children}
    </a>
  );
};

const p = ({ children }: any) => (
  <p className="mb-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
    {children}
  </p>
);

const li = ({ checked, children }: any): JSX.Element => (
  <li className="flex items-center gap-3 text-lg leading-8 text-gray-500 dark:text-gray-400">
    {checked ? (
      <div className="flex h-4 w-4 items-center justify-center bg-sky-500 shadow-md">
        <FiCheck className="stroke-white stroke-[3px]" size="0.75rem" />
      </div>
    ) : (
      <div className="flex h-4 w-4 items-center justify-center border shadow-md dark:border-gray-600"></div>
    )}
    {children[2]}
  </li>
);
