import React from "react";
import NavLink from "./NavLink";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navigation = (): JSX.Element => (
  <div className="sticky left-0 top-0 flex h-screen w-full max-w-min flex-col p-12 pt-16">
    <div className="text-logo relative text-2xl font-semibold tracking-wide">
      rkatanic
    </div>
    <div className="mt-20 flex h-full flex-1 flex-col justify-between">
      <div className="flex flex-col gap-2">
        <NavLink path="/about" label="About" />
        <NavLink path="/projects" label="Playground" />
      </div>
      <div className="flex gap-3 font-light lowercase tracking-wide text-neutral-400">
        <FiMail className="fill-neutral-400 stroke-white" size="1.175rem" />
        <FaGithub />
        <FaLinkedin />
      </div>
    </div>
  </div>
);

export default Navigation;
