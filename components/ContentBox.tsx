interface Props {
  children: React.ReactNode;
}

const ContentBox = ({ children }: Props): JSX.Element => (
  <div className="rounded-xl border p-6">{children}</div>
);

export default ContentBox;
