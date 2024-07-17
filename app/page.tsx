import dayjs from "dayjs";
import ThemeSwitch from "./_components/ThemeSwitch";
import getConfig from "next/config";
import Image from "next/image";

const Home = () => {
  const config = getConfig();

  return (
    <div className="mx-auto max-w-2xl space-y-16 px-4 py-16 pt-40 dark:text-zinc-400 md:px-0">
      <div className="x">
        <h1 className="mb-6 hidden text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Hello World
        </h1>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Software developer, <br className="hidden sm:inline" />
          sport enthusiast and animal lover.
        </h1>
        <div className="mt-6 space-y-7 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          <p>
            Hi, my name is Radivoje. I live in Doboj, Bosnia & Herzegovina,
            where I build digital solutions for various clients at ProductDock.
            Even though I work as a full-stack developer, I am mostly front-end
            oriented, mainly building web apps with React and Next.js these
            days.
          </p>
          <p>
            Besides computer work, I like doing sports, or spending time in
            nature.
          </p>
        </div>
      </div>

      <section className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
          <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
            Experience
          </h2>
          <div className="md:col-span-3">
            <div className="space-y-16">
              <article className="group relative flex flex-col items-start">
                <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                  <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                  <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                  <span className="relative z-10">
                    Software Developer, ProductDock
                  </span>
                </h3>
                <p className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500">
                  Aug 2020 - Present, Doboj BA
                </p>
                <p className="relative z-10 mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Building digital solutions for various clients using modern
                  technologies. Currently focused on frontend, with my main
                  frameworks being React and Next.js.
                </p>
              </article>
              <article className="group relative flex flex-col items-start">
                <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                  <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                  <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                  <span className="relative z-10">Intern, ProductDock</span>
                </h3>
                <p className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500">
                  Feb 2020 - May 2020, Doboj BA
                </p>
                <p className="relative z-10 mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Attended 3 month rookie boot camp program where I developed
                  with other candidates internal application for employee
                  managment. Main tech stack was Angular, Spring Boot and MySQL.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section
        aria-labelledby=":S1:"
        className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
      >
        <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
          <h2
            id=":S1:"
            className="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
          >
            Education
          </h2>
          <div className="md:col-span-3">
            <div className="space-y-16">
              <article className="group relative flex flex-col items-start">
                <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                  <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                  <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                  <span className="relative z-10">
                    IT Engineer, Slobomir P University
                  </span>
                </h3>
                <p className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500">
                  2015 - 2019, Doboj BA
                </p>
                <p className="relative z-10 mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400"></p>
              </article>
              <article className="group relative flex flex-col items-start">
                <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                  <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                  <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                  <span className="relative z-10">
                    Computer Technician, Electro-Technical High School
                  </span>
                </h3>
                <p className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500">
                  Feb 2020 - May 2020, Doboj BA
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby=":S1:"
        className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
      >
        <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
          <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
            Skills
          </h2>
          <div className="grid grid-cols-3 md:col-span-3">
            <div className="col-span-1">
              <span className="relative z-10 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                Languages
              </span>
              <ul>
                <li className="relative z-10 mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  HTML
                </li>
                <li className="relative z-10 mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  CSS
                </li>
                <li className="relative z-10 mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  JavaScript
                </li>
                <li className="relative z-10 mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Java
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <span className="relative z-10 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                Frameworks
              </span>
              <ul>
                <li className="relative z-10 mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  React
                </li>
                <li className="relative z-10 mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Next.js
                </li>
                <li className="relative z-10 mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Tailwind
                </li>
                <li className="relative z-10 mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Angular
                </li>
                <li className="relative z-10 mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  Spring Boot
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <span className="relative z-10 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                Databases
              </span>
              <ul>
                <li className="relative z-10 mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  MongoDB
                </li>
                <li className="relative z-10 mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  MySQL
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
