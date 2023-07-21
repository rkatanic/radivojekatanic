import { FiExternalLink, FiFileText } from "react-icons/fi";
import Link from "../components/Link";
import Image from "next/image";

const About = (): JSX.Element => (
  <div>
    <h3 className="text-alt text-4xl font-bold leading-tight">
      Crafting digital spaces and <br /> exploring web interfaces.
    </h3>
    <br />
    <Image
      width={1024}
      height={1024}
      src="/fuji.jpg"
      className="h-full w-full"
      alt="me"
    />
    <br />
    <h3 className="text-alt mb-3 text-xl font-semibold tracking-wide">
      Hello World
    </h3>
    <p className="leading-relaxed text-neutral-600">
      Hi there, my name is Radivoje Katanic. I am a software developer from
      Bosnia & Hercegovina. My free time is spent mostly outside doing sports or
      gardening.
    </p>
    <br />
    <div className="flex gap-8">
      <div className="flex-1">
        <h3 className="text-alt mb-3 text-xl font-semibold tracking-wide">
          Career
        </h3>
        <p className="leading-relaxed text-neutral-600">
          I started my career in February 2020 when I got first internship
          opportunity in local software company. Currently building web products
          at <Link href="https://productdock.com/" label="ProductDock" />.
        </p>
        <br />
        <h3 className="text-alt mb-3 text-xl font-semibold tracking-wide">
          Education
        </h3>
        <p className="leading-relaxed text-neutral-600">
          Graduateed as an IT Engineer in 2019 at university. Also graduated
          from high school as Computer Technician.
        </p>
        <br />

        <div className="group flex cursor-pointer justify-between rounded border-2 border-neutral-100 px-4 py-2 transition-[border] hover:border-neutral-800">
          <div className="flex items-center gap-4">
            <FiFileText size="1.25rem" className="stroke-neutral-600" />
            <div>
              <p className="text-alt font-semibold">Resume.pdf</p>
              <p className="text-sm text-neutral-500">4.3 kB</p>
            </div>
          </div>
          <div className="invisible flex items-center gap-2 text-sm text-neutral-400 transition-all group-hover:visible">
            <FiExternalLink size="1.125rem" />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-alt mb-3 text-xl font-semibold tracking-wide">
          Skills
        </h3>
        <p className="leading-relaxed text-neutral-600">
          I`&apos;m mostly front-end oriented, with main focus on technologies
          like React, NextJS, TailwindCSS, but not limited to it, because tools
          are something that come and go.
        </p>
        <br />
        <h3 className="text-alt mb-3 text-xl font-semibold tracking-wide">
          Interests
        </h3>
        <p className="leading-relaxed text-neutral-600">
          Besides of exploring web technologies, I like to do some sports,
          gardening and taking care of my cats.
        </p>
        <br />
        <h3 className="text-alt mb-3 text-xl font-semibold tracking-wide">
          Location
        </h3>
        <p className="leading-relaxed text-neutral-600">
          Doboj, Bosnia & Herzegovina
        </p>
        <br />
        <h3 className="text-alt mb-3 text-xl font-semibold tracking-wide">
          Contact
        </h3>
        <p className="leading-relaxed leading-relaxed text-neutral-600">
          Write me via{" "}
          <Link href="mailto:rkatanic@outlook.com" label="E-mail" /> or reach me
          out on{" "}
          <Link
            href="https://www.linkedin.com/in/radivoje-katanic/"
            label="LinkedIn"
          />{" "}
          or <Link href="https://github.com/rkatanic" label="GitHub" />.
        </p>
      </div>
    </div>
    <br />
  </div>
);

export default About;
