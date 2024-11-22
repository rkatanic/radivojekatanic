import { publicRuntimeConfig } from "next.config";
import Image from "next/image";
import InteractiveBackground from "./_components/Background";

const Home = () => (
  <div>
    <div className="mx-auto max-w-5xl gap-8 px-6 pb-16 pt-32 lg:grid lg:grid-cols-3">
      <div className="mx-auto max-w-3xl lg:order-2 lg:col-span-1 lg:mx-0">
        <Image
          width={1000}
          height={1000}
          className="mb-12 w-full max-w-xs rounded-3xl bg-neutral-200 lg:mb-8"
          src="/me.png"
          alt="photo-of-radivoje-katanic"
        />
        <div className="mt-8 hidden flex-col gap-3 font-medium hover:text-neutral-200 lg:flex">
          <a
            href="https://www.linkedin.com/in/radivoje-katanic/"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-3 decoration-1 underline-offset-[6px] hover:underline"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
            </svg>
            Follow on LinkedIn
          </a>
          <a
            href="https://github.com/rkatanic"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-3 decoration-1 underline-offset-[6px] hover:underline"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
              />
            </svg>
            Follow on GitHub
          </a>
          <a
            href="mailto:rkatanic@outlook.com"
            className="flex items-center gap-3 decoration-neutral-400 decoration-1 underline-offset-[6px] hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            rkatanic@outlook.com
          </a>

          <hr className="my-4 border-neutral-800" />
          <button className="flex h-11 w-full items-center justify-center gap-3 rounded-xl bg-neutral-800 px-6 font-medium text-neutral-200">
            Read resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="col-span-2">
        <div className="absolute left-0 top-0 -z-10 h-[32rem] w-full overflow-hidden">
          <div className="absolute z-10 h-full w-full bg-gradient-to-b from-transparent to-neutral-900"></div>
          <Image
            width={1000}
            height={1000}
            className="w-full bg-cover opacity-20"
            src="/abstract-bg.jpg"
            alt=""
          />
        </div>
        <section className="mx-auto max-w-3xl">
          <h1 className="mb-6 font-redHatDisplay text-4xl font-black sm:text-5xl">
            Building digital spaces
          </h1>
        </section>

        <div className="prose prose-neutral prose-invert mx-auto max-w-3xl sm:prose-lg prose-headings:font-redHatDisplay prose-p:text-neutral-400 prose-a:decoration-neutral-400 prose-a:decoration-1 prose-a:underline-offset-[6px] hover:prose-a:decoration-[1.5px]">
          <p className="lead">
            My name is Radivoje Katanic. I am a web developer from Doboj,
            Bosnia. That’s where I live and work building functional and high
            performant digital spaces.
          </p>

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

    <div className="mx-auto mb-12 max-w-5xl px-6 text-sm text-neutral-400">
      <hr className="mb-12 border-neutral-800" />
      Last modified on{" "}
      {new Date(publicRuntimeConfig.lastModifiedDate).toLocaleDateString()}
    </div>
  </div>
);
export default Home;
