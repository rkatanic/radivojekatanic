import { PropsWithChildren, ReactElement } from "react";

const HeroSection = ({ children }: PropsWithChildren): ReactElement => (
  <section className="mx-auto flex max-w-2xl flex-col gap-6 py-24 sm:items-center sm:text-center">
    {children}
  </section>
);

export default HeroSection;
