import { serialize } from "next-mdx-remote/serialize";
import fs from "fs/promises";
import path from "path";

const IMAGE_URL =
  "https://clerk.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage.f3104741.png&w=1200&q=75";

const Home = ({ mdxSource }: any): JSX.Element => (
  <div className="flex h-full min-h-screen flex-1 flex-col justify-between p-16">
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-1">
        <div>R — K</div>
      </div>
      <div className="flex flex-col gap-1">
        <div>Radivoje Katanic</div>
        <div>Software Developer</div>
        <div>Doboj, Bosnia & Herzegovina</div>
      </div>
      <div className="flex flex-col gap-1">
        <div>Aug 2020 - Now</div>
        <div>Software Developer</div>
        <div>ProductDock</div>
      </div>
      <div className="flex flex-col gap-1.5">
        <a
          className="max-w-min cursor-pointer whitespace-nowrap underline-offset-4 hover:text-neutral-100 hover:underline"
          href="https://github.com/rkatanic"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
        <a
          className="max-w-min cursor-pointer whitespace-nowrap underline-offset-4 hover:text-neutral-100 hover:underline"
          href="https://linkedin.com/in/radivoje-katanic"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
        <a
          className="max-w-min cursor-pointer whitespace-nowrap underline-offset-4 hover:text-neutral-100 hover:underline"
          href="mailto:rkatanic@outlook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          e-mail
        </a>
      </div>
    </div>
    <div>This site is work in progress. So is the author of it.</div>
  </div>
);

export default Home;
