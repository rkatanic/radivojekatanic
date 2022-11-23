import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import codeTheme from "utils/codeTheme";

interface Props {
  markdown: string;
}

const Markdown = ({ markdown }: Props): JSX.Element => (
  <div className="text-neutral-200 my-8">
    <ReactMarkdown
      children={markdown}
      components={{
        p,
        h1,
        h2,
        h3,
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              style={codeTheme as any}
              language={match[1]}
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    />
  </div>
);

export default Markdown;

const h1 = ({ children }: any): JSX.Element => (
  <h2 className="text-3xl font-semibold dark:text-neutral-200 text-neutral-900 mb-4">
    {children}
  </h2>
);

const h2 = ({ children }: any): JSX.Element => (
  <h2 className="text-2xl font-semibold dark:text-neutral-200 text-neutral-900 mb-4">
    {children}
  </h2>
);

const h3 = ({ children }: any): JSX.Element => (
  <h2 className="text-xl font-semibold dark:text-neutral-200 text-neutral-900 mb-4">
    {children}
  </h2>
);

const p = ({ children }: any) => (
  <p className="dark:text-neutral-400 text-neutral-500 mb-4">{children}</p>
);
