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
      className="text-alt relative mb-4 block text-xl font-semibold before:absolute before:-left-6 before:text-neutral-300 before:opacity-0 before:transition-opacity before:duration-300 before:content-['#'] hover:before:opacity-100"
    >
      {children}
    </a>
  );
};

const p = ({ children }: any) => (
  <p className="mb-4 leading-relaxed text-neutral-600">{children}</p>
);

const a = ({ children, node }: any) => (
  <a
    href={node?.properties?.href}
    target="_blank"
    rel="noreferrer"
    className="border-b border-neutral-800 text-neutral-800"
  >
    {children}
  </a>
);

const li = ({ checked, children }: any): JSX.Element => (
  <li className="flex items-center gap-3 leading-8 text-neutral-600">
    {checked ? (
      <div className="flex h-4 w-4 items-center justify-center border-2">
        <FiCheck className="stroke-neutral-600 stroke-[3px]" size="0.75rem" />
      </div>
    ) : (
      <div className="h-4 w-4 border-2"></div>
    )}
    {children[2]}
  </li>
);
