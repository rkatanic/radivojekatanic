import Link from "next/link";

const Home = (): JSX.Element => (
  <div className="flex flex-col gap-20">
    <div className="flex flex-col">
      <h1 className="flex-1 font-semibold text-2xl dark:text-neutral-200 mb-4">
        Hello World
      </h1>
      <p className="flex-1 dark:text-neutral-400 text-neutral-500 leading-8 text-lg">
        Hey, my name is Radivoje Katanic. I am a software developer based in
        Bosnia & Herzegovina. In a free time I like experimenting with different
        technologies and building small{" "}
        <Link href="/labs">
          <span className="underline text-neutral-800 font-medium dark:font-normal dark:text-neutral-200 dark:hover:text-teal-300 hover:text-teal-500 cursor-pointer">
            tools
          </span>
        </Link>{" "}
        for my personal needs.
      </p>
    </div>

    <div className="flex flex-col">
      <h1 className="flex-1 font-semibold text-2xl dark:text-neutral-200 mt-8 mb-4">
        Career
      </h1>

      <div className="flex-1">
        <p className="flex-1 dark:text-neutral-400 text-neutral-500 leading-8 text-lg">
          In 2019 I graduated as an IT Engineer and few months later started my
          professional software development journey by attending 3 month coding
          bootcamp at Codecentric Bosnia (now ProductDock), after which I got
          fully time employeed.
        </p>
        <div className="flex items-baseline justify-between gap-4 my-4">
          <div>
            <h3 className="dark:text-neutral-200 mb-1 text-lg font-medium">
              ProductDock
            </h3>
            <p className="dark:text-neutral-400 text-neutral-500">
              Software Developer
            </p>
          </div>
          <span className="dark:text-neutral-500 text-sm text-neutral-400">
            08/2020 - Present
          </span>
        </div>
        <div className="flex items-baseline justify-between gap-4 my-4">
          <div>
            <h3 className="dark:text-neutral-200 mb-1 text-lg font-medium">
              codecentric Bosnia
            </h3>
            <p className="dark:text-neutral-400 text-neutral-500">Intern</p>
          </div>
          <span className="dark:text-neutral-500 text-sm text-neutral-400">
            02/2020 - 05/2020
          </span>
        </div>
      </div>
    </div>

    <div className="flex flex-col">
      <h1 className="flex-1 font-semibold text-2xl dark:text-neutral-200 mt-8 mb-4">
        This Site
      </h1>
      <p className="flex-1 dark:text-neutral-400 text-neutral-500 leading-8 text-lg">
        This site is established in November 2022. Main purpose of the website
        is to share thoughts and projects I'm currently working on. It&apos;s
        built with Next.js, Tailwind CSS and deployed on Vercel.
        <br />
        <br /> Last time modified on November 2022.
      </p>
    </div>
  </div>
);

export default Home;
