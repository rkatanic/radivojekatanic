import { toKebabLowerCase } from "utils/stringUtils";
import MySkills from "./MySkills";
import LinkButton from "./LinkButton";
import Note from "./Note";
import { MDXRemote } from "next-mdx-remote";
import HistoryItem from "./HistoryItem";
import ContactButtons from "./ContactButtonts";
import classNames from "classnames";

interface Props {
  mdxSource: any;
}

const Markdown = ({ mdxSource }: Props): JSX.Element => (
  <div className="my-8">
    <MDXRemote
      {...mdxSource}
      components={{
        ...{
          MySkills,
          LinkButton,
          Note,
          HistoryItem,
          ContactButtons,
          h1,
          h2,
          h3,
          h4,
          li,
          p,
          a: Link,
          blockquote,
          hr,
          strong,
        },
      }}
    />
  </div>
);

export default Markdown;

const h1 = ({ children }: any): JSX.Element => {
  const hrefId = toKebabLowerCase(children as string);
  return (
    <a
      href={`#${hrefId}`}
      id={hrefId}
      className={classNames(
        "relative mb-4 block text-4xl font-bold",
        "hover:before:visible",
        "before:invisible before:absolute before:right-full before:pr-1.5 before:text-neutral-200 before:content-['#']"
      )}
    >
      {children}
    </a>
  );
};

const h2 = ({ children }: any): JSX.Element => {
  const hrefId = toKebabLowerCase(children as string);
  return (
    <a
      href={`#${hrefId}`}
      id={hrefId}
      className={classNames(
        "relative mb-4 block text-2xl font-bold",
        "hover:before:visible",
        "before:invisible before:absolute before:right-full before:pr-1.5 before:text-neutral-200 before:content-['#']"
      )}
    >
      {children}
    </a>
  );
};

const h3 = ({ children }: any): JSX.Element => {
  const hrefId = toKebabLowerCase(children as string);
  return (
    <a
      href={`#${hrefId}`}
      id={hrefId}
      className={classNames(
        "relative mb-4 block text-xl font-bold",
        "hover:before:visible",
        "before:invisible before:absolute before:right-full before:pr-1.5 before:text-neutral-200 before:content-['#']"
      )}
    >
      {children}
    </a>
  );
};

const h4 = ({ children }: any): JSX.Element => {
  const hrefId = toKebabLowerCase(children as string);
  return (
    <a href={`#${hrefId}`} id={hrefId} className="mb-2 block font-bold">
      {children}
    </a>
  );
};

const p = ({ children }: any) => (
  <p className="mb-6 block leading-7">{children}</p>
);

const strong = ({ children }: any) => (
  <strong className="font-bolt text-gray-900">{children}</strong>
);

const blockquote = ({ children }: any) => (
  <blockquote className="mb-12 mt-12 block border-l-2 border-amber-400 bg-amber-50/50 px-6 py-6 pb-px">
    {children}
  </blockquote>
);

const hr = () => <hr className="my-10" />;

const li = ({ children }: any): JSX.Element => (
  <li className="mb-0.5 ml-8 list-disc pl-1.5 leading-7 text-gray-600 marker:text-gray-600">
    {children}
  </li>
);

export const Link = ({ children, href }: any) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="cursor-pointer font-medium underline"
  >
    {children}
  </a>
);
