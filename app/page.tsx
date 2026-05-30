import Image from "next/image";
import { Card, CardItem } from "./_components/Card";
import ExpandableText from "./_components/ExpandableText";
import Footer from "./_components/Footer";

const GITHUB_URL = "https://github.com/rkatanic";
const INSTAGRAM_URL = "https://www.instagram.com/radivojekatanic";
const LINKEDIN_URL = "https://www.linkedin.com/in/radivoje-katanic";

const Home = () => (
  <section className="flex min-h-screen flex-col justify-between space-y-16 p-12 py-16 text-[15px]/[26px] text-foreground">
    <div className="space-y-16">
      <div className="font-medium">R — K</div>
      <div>
        <div>Radivoje Katanic</div>
        <div>Software Developer</div>
        <div>Doboj, BA</div>
      </div>
      <div>
        <div>ProductDock</div>
        <div>Software Developer</div>
        <div>Aug 2020 - Now</div>
      </div>
      <div className="flex flex-col items-start space-y-0.5">
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={LINKEDIN_URL}
          className="underline underline-offset-4"
        >
          LinkedIn
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={GITHUB_URL}
          className="underline underline-offset-4"
        >
          GitHub
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={INSTAGRAM_URL}
          className="underline underline-offset-4"
        >
          Instagram
        </a>
      </div>
    </div>

    <div>This site is work in progress.</div>
  </section>
);

export default Home;
