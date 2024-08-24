import { HiBookmark } from "react-icons/hi2";
import ListItem from "./_components/ListItem";
import Card from "./_components/Card";
import Footer from "./_components/Footer";

const Home = () => (
  <div className="relative mx-auto max-w-2xl px-4 py-16">
    <div className="mb-20 flex gap-6">
      <div className="font-medium text-zinc-100">About</div>
    </div>

    <div className="relative mx-auto grow overflow-hidden">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6 xl:hidden [&:not(:empty)]:mt-8" />
      </div>
      <div className="prose prose-zinc relative mt-8 dark:prose-invert prose-headings:text-zinc-100 prose-a:border-b prose-a:border-b-red-500 prose-a:no-underline prose-a:dark:text-zinc-100">
        <h2 className="group flex whitespace-pre-wrap">Hello World</h2>
        <p>
          Hi, I{"'"}m Radivoje Katanic, a Software Developer from Doboj, Bosnia
          & Herzegovina. <br className="hidden md:block" /> I currently work at{" "}
          <a
            href="https://productdock.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ProductDock
          </a>
          , where I{"'"}m building digital products for various clients. Besides
          computer work, I like doing sports, or spending time in nature.
        </p>

        <h3 className="group flex whitespace-pre-wrap">What I Do</h3>
        <div className="not-prose grid gap-x-4 sm:grid-cols-2">
          <Card
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 stroke-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
            }
            title="IT Consulting"
            description="I can help you decide how to build and improve your product."
          />
          <Card
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 stroke-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            }
            title="Web Development"
            description="I can build the whole solution for you meeting your specific needs."
          />
        </div>

        <h3 className="group flex whitespace-pre-wrap">Short Bio</h3>
        <p>Few main time periods in my career and life.</p>
        <div className="mb-6 ml-3.5 mt-10">
          <ListItem
            icon={<HiBookmark className="size-3 dark:fill-zinc-400" />}
            title="2020 - Present"
            description={
              <div>
                <p>
                  {" "}
                  Started career as a full time software developer at{" "}
                  <a
                    href="https://productdock.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ProductDock
                  </a>
                  .
                </p>
                <p>
                  In February 2020, I attended 3 month rookie boot camp program
                  where I developed with other candidates internal application
                  for employee managment. Main tech stack was Angular, Spring
                  Boot and MySQL.
                </p>
                <p>
                  After sucessful bootcamp, I got full time job offer. Currently
                  focused on frontend, with my main frameworks being React and
                  Next.js.
                </p>
              </div>
            }
          />

          <ListItem
            icon={<HiBookmark className="size-3 dark:fill-zinc-400" />}
            title="2015 -2019"
            description={
              <p>
                Graduated as an IT Engineer at Slobomir P University in
                <br className="hidden sm:block" /> Doboj, Bosnia and
                Herzegovina.
              </p>
            }
          />
          <ListItem
            icon={<HiBookmark className="size-3 dark:fill-zinc-400" />}
            title="2011 - 2015"
            description={
              <p>
                Graduated as an Computer Technician at Electro-Technical High
                School in Doboj, Bosnia and Herzegovina.
              </p>
            }
          />

          <ListItem
            icon={<HiBookmark className="size-3 dark:fill-zinc-400" />}
            title="1996"
            description={<p>Born in Doboj, Bosnia and Herzegovina.</p>}
          />
        </div>
      </div>
    </div>

    <Footer />
  </div>
);
export default Home;
