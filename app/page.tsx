import { publicRuntimeConfig } from "next.config";
import Image from "next/image";

const Home = () => (
  <div>
    <div className="mx-auto max-w-2xl gap-12 px-4 pb-16 pt-32 lg:grid lg:max-w-4xl lg:grid-cols-3 lg:px-0">
      <div className="w-full max-w-3xl lg:order-2 lg:col-span-1 lg:mx-0">
        <Image
          width={1000}
          height={1000}
          className="mb-12 w-full max-w-xs rounded-2xl bg-zinc-200 lg:mb-8"
          src="/me.png"
          alt="photo-of-radivoje-katanic"
        />
        <ul role="list" className="hidden lg:block">
          <li className="mt-4 flex">
            <a
              className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-600 dark:text-zinc-200 dark:hover:text-teal-500"
              href="https://www.linkedin.com/in/radivoje-katanic/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
              >
                <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
              </svg>
              <span className="ml-4">Follow on LinkedIn</span>
            </a>
          </li>
          <li className="mt-4 flex">
            <a
              className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-600 dark:text-zinc-200 dark:hover:text-teal-500"
              href="https://github.com/rkatanic"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                />
              </svg>
              <span className="ml-4">Follow on GitHub</span>
            </a>
          </li>
          <li className="mb-8 mt-4 flex border-b border-zinc-100 pb-8 dark:border-zinc-700/40">
            <a
              className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-600 dark:text-zinc-200 dark:hover:text-teal-500"
              href="mailto:rkatanic@outlook.com"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
              >
                <path
                  fillRule="evenodd"
                  d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
                />
              </svg>
              <span className="ml-4">rkatanic@outlook.com</span>
            </a>
          </li>
          <a
            className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-50 px-3 py-2 text-sm font-semibold text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70"
            href="#"
          >
            Download CV
            <svg
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
            >
              <path
                d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </ul>
      </div>
      <div className="col-span-2">
        <section className="max-w-3xl">
          <h1 className="mb-6 font-redHatDisplay text-4xl font-black text-zinc-800 dark:text-zinc-200 sm:text-5xl">
            Building digital spaces
          </h1>
        </section>

        <div className="3x-auto prose prose-teal max-w-3xl dark:prose-invert prose-headings:font-redHatDisplay prose-a:font-medium prose-a:decoration-1 prose-a:underline-offset-2 prose-a:transition hover:prose-a:decoration-[1.5px] prose-blockquote:border-zinc-700 dark:prose-p:text-zinc-400 dark:prose-a:text-zinc-200  dark:prose-a:decoration-teal-500">
          <blockquote className="lead relative not-italic">
            My name is Radivoje Katanic. I am a web developer from Doboj,
            Bosnia. That’s where I live and work building functional and high
            performant digital spaces.
          </blockquote>

          <h3 className="font-bold">Work and Education</h3>
          <p>
            In February 2020, I had the opportunity to participate in a
            three-month rookie boot camp program at <a href="">ProductDock</a>.
            During this time, I collaborated with other rookies to develop an
            internal employee management app.
          </p>
          <p>
            After successful completion of the boot camp, I was offered a
            full-time position at the company. That
            {"'"}s where I am working now - building software solutions, and
            growing as a web developer.
          </p>
          <p>
            In 2019 I graduated as an IT Engineer in my local town, and I also
            come from Electro-Technical High School.
          </p>
          <h3 className="font-bold">Technologies</h3>
          <p>
            Focused mainly on frontend technologies, with my main frameworks
            being React, Next.js and Tailwind CSS. When I get a chance on
            project, I also work with Java, Spring Boot on backend.
          </p>
          <h3 className="font-bold">Interests</h3>
          <p>
            Besides computer work, I like doing sports, or spending time in
            nature.
          </p>
        </div>
      </div>
    </div>

    <div className="mx-auto mb-12 max-w-4xl px-4 text-sm lg:px-0">
      <hr className="mb-12 dark:border-zinc-800" />
      <div>
        Last modified on{" "}
        {new Date(publicRuntimeConfig.lastModifiedDate).toLocaleDateString()}
      </div>
    </div>
  </div>
);
export default Home;
