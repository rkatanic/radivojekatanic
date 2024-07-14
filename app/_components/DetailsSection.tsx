import Projects from "./Projects";
import Heading from "./Heading";
import DescriptionText from "./DescriptionText";
import HeroSection from "./HeroSection";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";

export default function DetailsSection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-5xl">
        <HeroSection>
          <Heading>Small personal tools & experiments</Heading>

          <DescriptionText>
            This space is a collection of projects I worked on in my free time.
            Most of them are result of experimentation with new frameworks and
            libraries.
          </DescriptionText>
          <div className="relative flex h-8 max-w-min items-center justify-center gap-2 whitespace-nowrap rounded-full px-3 text-sm font-medium leading-6 text-zinc-600 ring-1 ring-zinc-200">
            <GrStatusGood className="text-indigo-700" /> Last modified on 10
            Jul, 2020
          </div>
        </HeroSection>

        <Projects />

        <HeroSection>
          <Heading>Have a question, or just want to say hi?</Heading>

          <DescriptionText>
            Feel free to reach out to me. Best way to contact me would be via
            e-mail, but you can also find me on Github and Linkedin.
          </DescriptionText>

          <div className="flex gap-2">
            <a
              href="mailto:rkatanic@outlook.com"
              target="_blank"
              rel="noopener referrer"
              className="relative flex h-8 max-w-min cursor-pointer items-center justify-center whitespace-nowrap rounded-full px-3 text-sm font-medium leading-6 text-zinc-600 ring-1 ring-zinc-200 hover:text-indigo-600 hover:ring-indigo-200"
            >
              rkatanic@outlook.com
            </a>
            <a
              href="https://github.com/rkatanic"
              target="_blank"
              rel="noopener referrer"
              className="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-sm text-zinc-600 ring-1 ring-zinc-200 hover:text-indigo-600 hover:ring-indigo-200"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/radivoje-katanic/"
              target="_blank"
              rel="noopener referrer"
              className="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-sm text-zinc-600 ring-1 ring-zinc-200 hover:text-indigo-600 hover:ring-indigo-200"
            >
              <FaLinkedin />
            </a>
          </div>
        </HeroSection>
      </div>
    </div>
  );
}
