import React from "react";

import {
  RiLeafFill,
  RiInformationFill,
  RiSendPlaneFill,
  RiSunFill,
} from "react-icons/ri";
import Image from "next/image";
import NavLink from "./NavLink";
import Logo from "./Logo";

const Navigation = (): JSX.Element => (
  <div className="mx-auto mb-4 flex h-28 max-w-4xl items-center justify-between px-8">
    <Logo />
    <div className="flex gap-2">
      <NavLink path="/about" label="About" />
    </div>
  </div>
);

export default Navigation;
