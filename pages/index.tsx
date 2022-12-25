import Link from "next/link";
import { FiFile, FiFolder, FiImage, FiZap } from "react-icons/fi";

const Home = (): JSX.Element => (
  <div className="flex flex-col">
    <div className="border border-gray-600 bg-gray-900 shadow-md">
      <div className="flex items-center justify-between gap-3 border-b border-gray-700 px-4 py-4">
        <div className="flex items-center gap-3 tracking-wide">
          {/* <div className="border border-gray-600 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                <FiUser className="stroke-gray-400" />
              </div> */}
          <h3 className="text-lg font-medium">rkatanic</h3>
          <p className="text-gray-200">Update README</p>
        </div>
        <p className="float-right text-sm text-gray-300">Aug 17, 2021</p>
      </div>
      <div className="flex items-center gap-3 border-b border-gray-800 py-2.5 px-4 hover:bg-gray-800/30">
        <FiFolder className="stroke-gray-300" />
        <p className="1racking-wide pointer-events-none text-gray-100">src</p>
      </div>
      <div className="flex items-center gap-3 border-b border-gray-800 py-2.5 px-4 hover:bg-gray-800/30">
        <FiZap className="stroke-gray-300" />
        <p className="cursor-pointer tracking-wide text-gray-100 hover:text-sky-300 hover:underline">
          index.html
        </p>
      </div>
      <div className="flex items-center gap-3 border-b border-gray-800 py-2.5 px-4 hover:bg-gray-800/30">
        <FiImage className="stroke-gray-300" />
        <p className="cursor-pointer tracking-wide text-gray-100 hover:underline">
          mockup-01.png
        </p>
      </div>
      <div className="flex items-center gap-3 border-b border-gray-800 py-2.5 px-4 hover:bg-gray-800/30">
        <FiImage className="stroke-gray-300" />
        <p className="cursor-pointer tracking-wide text-gray-100 hover:underline">
          mockup-02.png
        </p>
      </div>
      <div className="flex items-center gap-3 border-b border-gray-800 py-2.5 px-4 hover:bg-gray-800/30">
        <FiImage className="stroke-gray-300" />
        <p className="1racking-wide text-gray-300">mockup-03.png</p>
      </div>
      <div className="flex items-center gap-3 border-b border-gray-800 py-2.5 px-4 hover:bg-gray-800/30">
        <FiFile className="stroke-gray-300" />
        <p className="cursor-pointer tracking-wide text-gray-200 hover:underline">
          Todos.json
        </p>
      </div>
      <div className="flex items-center gap-3 border-gray-800 py-2.5 px-4 hover:bg-gray-800/30">
        <FiFile className="stroke-gray-300" />
        <a
          href="#color-scale"
          className="cursor-pointer tracking-wide text-gray-200 hover:underline"
        >
          README.md
        </a>
      </div>
    </div>
    {/* 
    <div className="mb-8">
      <h1 className="mb-4 text-5xl font-semibold dark:text-neutral-200">
        Radivoje Katanic
      </h1>
      <h3 className="text-2xl dark:text-neutral-500">
        Software Developer at ProductDock
      </h3>
    </div>
    <div className="flex flex-col">
      <h1 className="mb-4 flex-1 text-2xl font-semibold dark:text-neutral-200">
        Hello World
      </h1>
      <hr className="mb-4 dark:border-neutral-800" />
      <p className="flex-1 text-lg leading-8 text-neutral-500 dark:text-neutral-400">
        Hey, my name is Radivoje Katanic. I am a software developer based in
        Bosnia & Herzegovina. In a free time I like experimenting with different
        technologies and building small{" "}
        <Link href="/labs">
          <span className="cursor-pointer font-medium text-neutral-800 underline hover:text-teal-500 dark:font-normal dark:text-neutral-200 dark:hover:text-teal-300">
            tools
          </span>
        </Link>{" "}
        for my personal needs.
      </p>
    </div>

    <div className="flex flex-col">
      <h1 className="mt-8 mb-4 flex-1 text-2xl font-semibold dark:text-neutral-200">
        Career
      </h1>
      <hr className="mb-4 dark:border-neutral-800" />
      <div className="flex-1">
        <p className="flex-1 text-lg leading-8 text-neutral-500 dark:text-neutral-400">
          In 2019 I graduated as an IT Engineer and few months later started my
          professional software development journey by attending 3 month coding
          bootcamp at Codecentric Bosnia (now ProductDock), after which I got
          fully time employeed.
        </p>
        <div className="my-4 flex items-baseline justify-between gap-4">
          <div>
            <h3 className="mb-1 text-lg font-medium dark:text-neutral-200">
              ProductDock
            </h3>
            <p className="text-neutral-500 dark:text-neutral-400">
              Software Developer
            </p>
          </div>
          <span className="text-sm text-neutral-400 dark:text-neutral-500">
            08/2020 - Present
          </span>
        </div>
        <div className="my-4 flex items-baseline justify-between gap-4">
          <div>
            <h3 className="mb-1 text-lg font-medium dark:text-neutral-200">
              codecentric Bosnia
            </h3>
            <p className="text-neutral-500 dark:text-neutral-400">Intern</p>
          </div>
          <span className="text-sm text-neutral-400 dark:text-neutral-500">
            02/2020 - 05/2020
          </span>
        </div>
      </div>
    </div>

    <div className="flex flex-col">
      <h1 className="mt-8 mb-4 flex-1 text-2xl font-semibold dark:text-neutral-200">
        This Site
      </h1>
      <hr className="mb-4 dark:border-neutral-800" />
      <p className="flex-1 text-lg leading-8 text-neutral-500 dark:text-neutral-400">
        This site is established in November 2022. Main purpose of the website
        is to share thoughts and projects I'm currently working on. It&apos;s
        built with Next.js, Tailwind CSS and deployed on Vercel.
        <br />
        <br /> Last time modified on November 2022.
      </p>
    </div> */}
  </div>
);

export default Home;
