import { Card, CardItem } from "./_components/Card";
import ExpandableText from "./_components/ExpandableText";
import Footer from "./_components/Footer";

const Home = () => (
  <div className="prose-headings:font-inter prose-zinc mx-auto max-w-5xl space-y-8 dark:prose-invert prose-p:text-zinc-600 dark:prose-p:text-zinc-400">
    <main className="max-w-2xl py-12 pt-12">
      <img
        src="/me.png"
        alt=""
        className="mb-6 h-20 w-20 rounded-full bg-zinc-200 dark:bg-zinc-300"
      />
      <h1 className="max-w-2xl pr-4 text-5xl font-bold leading-[1.15] tracking-tight">
        Building functional and performant web apps.
      </h1>
      <p className="mt-6 text-base leading-8">
        I am Radivoje, a software developer from Doboj, Bosnia & Herzegovina.
        Thats where I build functional and performant digital solutions at
        company called ProductDock. Away from work, I enjoy doing sports or
        spending time outdoors.
      </p>
    </main>

    <section className="mt-16 grid grid-cols-2 pb-16">
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
                  className="size-7 text-indigo-300"
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
                  className="size-6 text-indigo-300"
                >
                  <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
                  <path
                    fillRule="evenodd"
                    d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z"
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
                  className="size-6 text-indigo-300"
                >
                  <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
                  <path
                    fillRule="evenodd"
                    d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z"
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

      <div className="prose-headings:font-inter prose prose-zinc col-span-1 dark:prose-invert prose-p:leading-7 prose-p:text-zinc-600 prose-ul:text-zinc-600 dark:prose-p:text-zinc-400 dark:prose-ul:text-zinc-400">
        <h3>Work history</h3>
        <ExpandableText>
          <p>
            In late February 2020, I joined a three-month rookie boot camp
            program at ProductDock, where I worked alongside other rookies to
            create an internal employee management app. Upon completing the
            program successfully, I was offered a full-time position at the
            company.
          </p>
          <p>
            Thats where I currently work on building software solutions and
            continuing to grow as a web developer.
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
              <b>Languages -</b> HTML, CSS, JavaScript, Java.
            </li>
            <li>
              <b>Frameworks -</b> React, Next.js, Tailwind CSS, Spring Boot.
            </li>
            <li>
              <b>Databases -</b> Mongo, MySQL.
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
