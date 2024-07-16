import dayjs from "dayjs";
import ThemeSwitch from "./_components/ThemeSwitch";
import getConfig from "next/config";
import Image from "next/image";

const Home = () => {
  const config = getConfig();

  return (
    <div className="mx-auto min-h-screen max-w-2xl space-y-10 px-6 py-10 text-slate-600 dark:text-slate-400">
      <div className="flex items-center">
        <div className="flex-1 text-xl font-semibold text-slate-700 dark:text-slate-300">
          rkatanic
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal">
            <li>
              <ThemeSwitch />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Image
          alt="my-photo"
          width={512}
          height={512}
          className="h-20 w-20  rounded-full bg-slate-200 dark:bg-slate-300"
          src="/me.png"
        />
        <div className="">
          <h2 className="text-2xl font-bold tracking-tight text-slate-700 dark:text-slate-300">
            Radivoje Katanic
          </h2>
          <p className="mt-0.5 text-slate-600 dark:text-slate-400">
            Software Developer at ProductDock
          </p>
          <div className="hidden space-x-1">
            <button className="btn btn-ghost btn-active btn-xs">E-mail</button>
            <button className="btn btn-ghost btn-active btn-xs">GitHub</button>
            <button className="btn btn-ghost btn-active btn-xs">
              LinkedIn
            </button>
          </div>
        </div>
      </div>

      <div className="prose prose-slate">
        <h3 className="max-w-mdx mb-4 tracking-tight text-slate-700 dark:text-slate-300">
          Hello world
        </h3>
        <p className="text-slate-600 dark:text-slate-400">
          Hi, my name is Radivoje. I live in Doboj, Bosnia & Herzegovina, where
          I build digital solutions for various clients at ProductDock.
        </p>
        <p className="text-slate-600 dark:text-slate-400">
          Even though I work as a full-stack developer, I am mostly front-end
          oriented, mainly building web apps with React and Next.js these days.
        </p>
        <p className="text-slate-600 dark:text-slate-400">
          Away from work, I spend my free time by doing sports.
        </p>
      </div>
      <div
        role="alert"
        className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4 text-slate-700 dark:bg-slate-900 dark:text-slate-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-6 w-6 stroke-slate-700 dark:stroke-slate-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>
          Interested in more? You can view my full resume{" "}
          <a
            href="#"
            className="underline hover:text-slate-800 dark:hover:text-slate-300"
          >
            here
          </a>
          .
        </span>
      </div>

      <div className="overflow-x-auto">
        <div className="prose">
          <h3 className="mb-4 tracking-tight text-slate-700 dark:text-slate-300">
            Work history
          </h3>
        </div>
        <table className="w-full table-auto">
          <thead className="rounded-xl bg-slate-50 text-sm dark:bg-slate-900">
            <tr>
              <th className="h-12 rounded-s-2xl pl-4 text-start  font-medium text-slate-500 dark:text-slate-400">
                Company
              </th>
              <th className="text-start font-medium text-slate-500 dark:text-slate-400">
                Role
              </th>
              <th className="text-start font-medium text-slate-500 dark:text-slate-400">
                Date
              </th>
              <th className="rounded-e-2xl pr-4 text-end font-medium text-slate-500 dark:text-slate-400 ">
                Location
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-b-slate-200 dark:border-b-slate-700">
              <td className="h-16 pl-4 font-semibold">ProductDock</td>
              <td>
                <span className="badge badge-ghost">Software Developer</span>
              </td>
              <td className="text-sm">08 / 2020 - Now</td>
              <td className="pr-4 text-end text-sm">Doboj, BA</td>
            </tr>
            <tr>
              <td className="h-16 pl-4 font-semibold">ProductDock</td>
              <td>
                <span className="badge badge-ghost">Intern</span>
              </td>
              <td className="text-sm">02 /2020 - 05 / 2020</td>
              <td className="pr-4 text-end text-sm">Doboj, BA</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-neutral-content flex flex-col items-center gap-4 rounded-3xl bg-slate-700 p-8 text-center text-slate-300">
        <h2 className="card-title text-2xl font-semibold tracking-tight text-slate-300">
          Get In Touch
        </h2>
        <p>
          Have a question, or just want to say hello?
          <br />
          Feel free to reach me out.
        </p>
        <button className="h-12 w-40 rounded-xl bg-blue-400 font-medium text-slate-800">
          Let{"'"}s talk!
        </button>
      </div>

      <footer className="flex items-center justify-center gap-3 p-4 text-sm">
        <div>© {new Date().getFullYear()} Radivoje Katanic</div>
        <div className="h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-600"></div>
        <div>Made with Next.js</div>
        <div className="h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-600"></div>
        <div>
          Latest build:{" "}
          {dayjs(config.publicRuntimeConfig.lastModifiedDate).format(
            "D MMM, YYYY",
          )}
        </div>
      </footer>
    </div>
  );
};
export default Home;
