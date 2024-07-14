import { PropsWithChildren, ReactElement } from "react";

const HeroSection = ({ children }: PropsWithChildren): ReactElement => (
  <section className="mx-auto flex max-w-2xl flex-col gap-4 py-16 sm:items-center sm:gap-6 sm:py-24 sm:text-center">
    {children}
  </section>
);

export default HeroSection;
