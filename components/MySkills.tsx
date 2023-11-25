import {
  TbBrandAngular,
  TbBrandReactNative,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandTailwind,
  TbLeaf,
  TbDatabase,
} from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { ReactElement } from "react";

const SKILLS = [
  { name: "HTML", icon: <TbBrandHtml5 className="h-5 w-5" /> },
  { name: "React", icon: <TbBrandReactNative className="h-5 w-5" /> },
  { name: "CSS", icon: <TbBrandCss3 className="h-5 w-5" /> },
  { name: "Angular", icon: <TbBrandAngular className="h-5 w-5" /> },
  { name: "JavaScript", icon: <TbBrandJavascript className="h-5 w-5" /> },
  { name: "Next.js", icon: <TbBrandNextjs className="h-5 w-5" /> },
  { name: "Java", icon: <FaJava className="h-5 w-5" /> },
  { name: "Tailwind CSS", icon: <TbBrandTailwind className="h-5 w-5" /> },
  { name: "MongoDB", icon: <TbDatabase className="h-5 w-5" /> },
  { name: "Spring Boot", icon: <TbLeaf className="h-5 w-5" /> },
  { name: "MySQL", icon: <TbDatabase className="h-5 w-5" /> },
];

const MySkills = (): ReactElement => (
  <div className="grid grid-cols-2 gap-4">
    {SKILLS.map(({ name, icon }) => (
      <div key={name} className="flex items-center gap-4">
        {icon} {name}
      </div>
    ))}
  </div>
);

export default MySkills;
