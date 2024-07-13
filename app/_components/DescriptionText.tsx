import { PropsWithChildren, ReactElement } from "react";

const DescriptionText = ({ children }: PropsWithChildren): ReactElement => (
  <p className="text-lg leading-8 text-zinc-600">{children}</p>
);

export default DescriptionText;
