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
        <Link href="/labs">
          <span className="cursor-pointer font-medium text-gray-800 hover:text-sky-500 hover:underline dark:font-normal dark:text-gray-200 dark:hover:text-sky-300">
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
        <div className="hidden">
          <div className="my-4 flex items-baseline justify-between gap-4">
            <div>
              <h3 className="mb-1 text-lg font-medium dark:text-gray-200">
                ProductDock
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Software Developer
              </p>
            </div>
            <span className="text-sm text-gray-400 dark:text-gray-500">
              08/2020 - Present
            </span>
          </div>
          <div className="my-4 flex items-baseline justify-between gap-4">
            <div>
              <h3 className="mb-1 text-lg font-medium dark:text-gray-200">
                codecentric Bosnia
              </h3>
              <p className="text-gray-500 dark:text-gray-400">Intern</p>
            </div>
            <span className="text-sm text-gray-400 dark:text-gray-500">
              02/2020 - 05/2020
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-col">
      <h1 className="mt-8 mb-4 flex-1 text-2xl font-semibold dark:text-gray-200">
        This Site
      </h1>
      <p className="flex-1 text-lg leading-relaxed text-gray-500 dark:text-gray-400">
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
