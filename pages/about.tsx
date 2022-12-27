import Link from "next/link";

const Home = (): JSX.Element => (
  <div className="flex flex-col">
    <div className="flex flex-col">
      <h1 className="mb-4 flex-1 text-2xl font-semibold dark:text-gray-200">
        Hello World
      </h1>
      <p className="flex-1 text-lg leading-relaxed text-gray-500 dark:text-gray-400">
        Hey, my name is Radivoje Katanic. I am a software developer based in
        Bosnia & Herzegovina. In a free time I like experimenting with different
        technologies and building small{" "}
        <Link href="/projects">
          <span className="cursor-pointer border-b border-gray-900 text-gray-800 hover:border-sky-500 hover:text-sky-500 dark:border-gray-200 dark:font-normal dark:text-gray-200 dark:hover:border-sky-300 dark:hover:text-sky-300">
            tools
          </span>
        </Link>{" "}
        for my personal needs.
      </p>
    </div>

    <div className="flex flex-col">
      <h1 className="mt-8 mb-4 flex-1 text-2xl font-semibold dark:text-gray-200">
        Career
      </h1>
      <div className="flex-1">
        <p className="flex-1 text-lg leading-relaxed text-gray-500 dark:text-gray-400">
          In 2019 I graduated as an IT Engineer and few months later started my
          professional software development journey by attending 3 month coding
          bootcamp at Codecentric Bosnia (now ProductDock), after which I got
          fully time employeed.
        </p>
      </div>
    </div>

    <div className="flex flex-col">
      <h1 className="mt-8 mb-4 flex-1 text-2xl font-semibold dark:text-gray-200">
        This Site
      </h1>
      <p className="flex-1 text-lg leading-relaxed text-gray-500 dark:text-gray-400">
        This site is established in November 2022. Main purpose of the website
        is to share thoughts and projects I&apos;m currently working on.
        It&apos;s built with Next.js, Tailwind CSS and deployed on Vercel.
        <br />
        <br /> Last time modified on December 2022.
      </p>
    </div>
  </div>
);

export default Home;
