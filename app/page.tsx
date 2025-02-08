import Image from "next/image";
import { Card, CardItem } from "./_components/Card";
import ExpandableText from "./_components/ExpandableText";
import Footer from "./_components/Footer";

const Home = () => (
  <div className="prose-zinc mx-auto flex max-w-5xl flex-col gap-16 pt-32 dark:prose-invert prose-headings:font-inter prose-p:text-zinc-600 dark:prose-p:text-zinc-400">
    <main className="max-w-2xl">
      <img
        src="/me.png"
        alt=""
        className="mb-6 h-20 w-20 rounded-full bg-zinc-200 dark:bg-zinc-300"
      />
      <h1 className="max-w-2xl pr-4 text-5xl font-bold leading-[1.15] tracking-tight">
        Building functional and performant web apps.
      </h1>
      <p className="mt-6 text-base leading-7">
        I am Radivoje, a software developer from Doboj, Bosnia & Herzegovina.
        Thats where I build functional and performant digital solutions at
        company called ProductDock. Away from work, I enjoy doing sports or
        spending time outdoors.
      </p>
      <div className="mt-6 flex gap-6">
        <a
          className="group -m-1 p-1"
          aria-label="Follow on GitHub"
          href="https://github.com/rkatanic"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
            />
          </svg>
        </a>
        <a
          className="group -m-1 p-1"
          aria-label="Follow on LinkedIn"
          href="https://www.linkedin.com/in/radivoje-katanic/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
          >
            <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
          </svg>
        </a>
        <a
          href="mailto:rkatanic@outlook.com"
          className="group -m-1 p-1"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 fill-zinc-500 transition hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-300"
          >
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
          </svg>
        </a>
      </div>
    </main>

    <section className="flex gap-4">
      <div className="relative h-48 w-full">
        <Image
          width={330}
          height={197}
          src="/abstract-bg.jpg"
          alt="abstract-background"
          className="absolute h-full w-full opacity-50 grayscale"
        />
        <div className="h-full w-full bg-teal-600 opacity-50"></div>
        <div className="absolute bottom-0 z-10 flex flex-col gap-2 p-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mb-4 size-6 text-zinc-200"
          >
            <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
            <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
          </svg>

          <h2 className="text-lg font-medium">IT Consulting</h2>
          <p className="dark:!text-zinc-200">
            I can help you decide best technical practices for your product.
          </p>
        </div>
      </div>
      <div className="relative h-48 w-full">
        <Image
          width={330}
          height={197}
          src="/abstract-bg.jpg"
          alt="abstract-background"
          className="absolute h-full w-full rotate-180 opacity-50 grayscale"
        />
        <div className="h-full w-full bg-purple-700 opacity-50"></div>

        <div className="absolute bottom-0 z-10 flex flex-col gap-2 p-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mb-4 size-6 text-zinc-200"
          >
            <path
              fillRule="evenodd"
              d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
              clipRule="evenodd"
            />
            <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
          </svg>

          <h2 className="text-lg font-medium">Web Development</h2>
          <p className="!text-zinc-200 dark:!text-zinc-200">
            I can help you implement and build your new product.
          </p>
        </div>
      </div>
      <div className="relative h-48 w-full">
        <Image
          width={330}
          height={197}
          src="/abstract-bg.jpg"
          alt="abstract-background"
          className="absolute h-full w-full opacity-50 grayscale"
        />
        <div className="h-full w-full bg-indigo-600 opacity-50"></div>
        <div className="absolute bottom-0 z-10 flex flex-col gap-2 p-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mb-4 size-6 text-zinc-200"
          >
            <path
              fillRule="evenodd"
              d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
              clipRule="evenodd"
            />
          </svg>

          <h2 className="text-lg font-medium">Technical Support</h2>
          <p className="!text-zinc-200">
            I can help you improve or maintain your existing product.
          </p>
        </div>
      </div>
    </section>

    <section className="grid grid-cols-2">
      <section className="order-2 col-span-1 flex flex-col gap-4 pl-24">
        <Card
          title="Experience"
          icon={
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-6 w-6 flex-none"
            >
              <path
                d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
              />
              <path
                d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                className="stroke-zinc-400 dark:stroke-zinc-500"
              />
            </svg>
          }
        >
          <div className="mt-6 space-y-4">
            <CardItem
              title="Software Developer"
              description="ProductDock"
              from="2020"
              to="Present"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-zinc-400 dark:text-zinc-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            />
          </div>
        </Card>
        <Card
          title="Education"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
          }
        >
          <div className="mt-6 space-y-4">
            <CardItem
              title="IT Engineer"
              description="Slobomir P University"
              from="2015"
              to="2019"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-zinc-400 dark:text-zinc-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            />
            <CardItem
              title="Computer Technician"
              description="Electro-technical High School"
              from="2011"
              to="2015"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-zinc-400 dark:text-zinc-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            />
          </div>
        </Card>

        <Card
          title="Want to know more?"
          icon={
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-6 w-6 flex-none"
            >
              <path
                d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
              />
              <path
                d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
                className="stroke-zinc-400 dark:stroke-zinc-500"
              />
            </svg>
          }
        >
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Have a question, or just want to say hello? Feel free to reach me
            out via email.
          </p>
          <a
            className="active:text-zinc-white/60 group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-800 px-3 py-2 text-sm font-medium text-white outline-offset-2 transition hover:bg-zinc-900 active:bg-zinc-900 active:transition-none dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70"
            href="mailto:rkatanic@outlook.com"
          >
            Contact me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </Card>
      </section>

      <div className="prose prose-zinc col-span-1 dark:prose-invert prose-headings:font-inter prose-p:leading-7 prose-p:text-zinc-600 prose-ul:text-zinc-600 dark:prose-p:text-zinc-400 dark:prose-ul:text-zinc-400">
        <h3>Work history</h3>
        <ExpandableText>
          <p>
            In late February 2020, I joined a three-month rookie boot camp
            program at ProductDock, where I worked alongside other rookies to
            create an internal employee management app. Upon completing the
            program successfully, I got full-time job offer.
          </p>
          <p>
            Since then, I have been working at ProductDock, where I am building
            software solutions for various clients worldwide.
          </p>
          <p>
            This role has allowed me to grow my expertise as a web developer.
          </p>
        </ExpandableText>

        <h3>Technologies</h3>
        <ExpandableText>
          <p>
            Mainly focused on frontend technologies, but I do work on backend
            stuff too. Current tech stack I use is:
          </p>
          <ul>
            <li>
              <b>Languages -</b> HTML, CSS, JavaScript, Java
            </li>
            <li>
              <b>Frameworks -</b> React, Next.js, Tailwind CSS, Spring Boot
            </li>
            <li>
              <b>Databases -</b> Mongo, MySQL
            </li>
          </ul>
          <p>
            Lately I am mostly working with Next.js on frontend along with
            Spring Boot on backend services, but I like trying out new
            technologies, because tools come and go.
          </p>
        </ExpandableText>

        <h3>Interests</h3>
        <p className="">
          Away from work, I enjoy doing sports or spending time outdoors. Also
          interested in movies, technology, literature, architecture, and more.
        </p>
      </div>
    </section>
    <Footer />
  </div>
);

export default Home;
