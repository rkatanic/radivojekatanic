import getConfig from "next/config";

const Home = () => {
  const config = getConfig();

  return (
    <div className="relative mx-auto max-w-2xl px-4 py-16">
      <div className="mb-20 flex gap-6">
        <div className="font-medium text-zinc-100">About</div>
      </div>

      <div className="relative mx-auto grow overflow-hidden" id="content-area">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6 xl:hidden [&:not(:empty)]:mt-8" />
        </div>
        <div className="prose prose-zinc relative mt-8 dark:prose-invert prose-headings:text-zinc-100 prose-a:border-b prose-a:border-b-red-500 prose-a:no-underline prose-a:dark:text-zinc-100">
          <h2 className="group flex whitespace-pre-wrap" id="preference-center">
            <div className="absolute">
              <a
                href="#preference-center"
                className="-ml-10 flex items-center border-0 opacity-0 group-hover:opacity-100"
                aria-label="Navigate to header"
              >
                ​
                <div className="zinc-box flex h-6 w-6 items-center justify-center rounded-md  text-zinc-400 ring-1 ring-zinc-400/30 hover:ring-zinc-400/60 dark:ring-zinc-700/25 dark:hover:ring-white/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="zinc"
                    height="12px"
                    viewBox="0 0 576 512"
                  >
                    <path d="M0 256C0 167.6 71.6 96 160 96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C98.1 144 48 194.1 48 256s50.1 112 112 112h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c61.9 0 112-50.1 112-112s-50.1-112-112-112H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c88.4 0 160 71.6 160 160zM184 232H392c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
                  </svg>
                </div>
              </a>
            </div>
            <span className="">Hello World</span>
          </h2>

          <p>
            Hi, I{"'"}m Radivoje Katanic, a Software Developer from Doboj,
            Bosnia & Herzegovina. <br className="hidden md:block" /> I currently
            work at{" "}
            <a
              href="https://productdock.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ProductDock
            </a>
            , where I{"'"}m building digital products for various clients.
            Besides computer work, I like doing sports, or spending time in
            nature.
          </p>

          <h3 className="group flex whitespace-pre-wrap" id="utilizing-lists">
            <div className="absolute">
              <a
                href="#utilizing-lists"
                className="-ml-10 flex items-center border-0 opacity-0 group-hover:opacity-100"
                aria-label="Navigate to header"
              >
                ​
                <div className="zinc-box flex h-6 w-6 items-center justify-center rounded-md  text-zinc-400 ring-1 ring-zinc-400/30 hover:ring-zinc-400/60 dark:ring-zinc-700/25 dark:hover:ring-white/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="zinc"
                    height="12px"
                    viewBox="0 0 576 512"
                  >
                    <path d="M0 256C0 167.6 71.6 96 160 96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C98.1 144 48 194.1 48 256s50.1 112 112 112h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c61.9 0 112-50.1 112-112s-50.1-112-112-112H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c88.4 0 160 71.6 160 160zM184 232H392c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
                  </svg>
                </div>
              </a>
            </div>
            <span className="">What I Do</span>
          </h3>
          <div className="not-prose grid gap-x-4 sm:grid-cols-2">
            <div className="card not-prose dark:bg-background-dark hover:!border-primary dark:hover:!border-primary-light group relative my-2 block w-full  overflow-hidden rounded-xl border border-gray-950/10 font-normal ring-2 ring-transparent dark:border-white/10">
              <div className="px-6 py-5">
                <div className="h-6 w-6 fill-gray-800 text-gray-800 dark:fill-gray-100 dark:text-gray-100">
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
                </div>
                <div>
                  <h4 className="mt-4 text-base font-semibold text-gray-800 dark:text-zinc-100">
                    IT Consulting
                  </h4>
                  <p className="mt-4">
                    I can help you decide how to build and improve your product.
                  </p>
                  <div className="mt-1 text-sm font-normal leading-6 text-gray-600 dark:text-gray-400" />
                </div>
              </div>
            </div>

            <div className="card not-prose dark:bg-background-dark hover:!border-primary dark:hover:!border-primary-light group relative my-2 block w-full  overflow-hidden rounded-xl border border-gray-950/10  font-normal ring-2 ring-transparent dark:border-white/10">
              <div className="px-6 py-5">
                <div className="h-6 w-6 fill-gray-800 text-gray-800 dark:fill-gray-100 dark:text-gray-100">
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
                </div>
                <div>
                  <h4 className="mt-4 text-base font-semibold text-gray-800 dark:text-zinc-100">
                    Web Development
                  </h4>

                  <p className="mt-4">
                    I can build the whole solution for you meeting your specific
                    needs.
                  </p>
                  <div className="mt-1 text-sm font-normal leading-6 text-gray-600 dark:text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          <h3
            className="group flex whitespace-pre-wrap"
            id="trigger-a-loop-when-a-contact-is-added-to-a-list"
          >
            <div className="absolute">
              <a
                href="#trigger-a-loop-when-a-contact-is-added-to-a-list"
                className="-ml-10 flex items-center border-0 opacity-0 group-hover:opacity-100"
                aria-label="Navigate to header"
              >
                ​
                <div className="zinc-box flex h-6 w-6 items-center justify-center rounded-md  text-zinc-400 ring-1 ring-zinc-400/30 hover:ring-zinc-400/60 dark:ring-zinc-700/25 dark:hover:ring-white/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="zinc"
                    height="12px"
                    viewBox="0 0 576 512"
                  >
                    <path d="M0 256C0 167.6 71.6 96 160 96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C98.1 144 48 194.1 48 256s50.1 112 112 112h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c61.9 0 112-50.1 112-112s-50.1-112-112-112H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c88.4 0 160 71.6 160 160zM184 232H392c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
                  </svg>
                </div>
              </a>
            </div>
            <span className="">Short Bio</span>
          </h3>
          <p>Few main time periods in my career and life.</p>
          <div role="list" className="mb-6 ml-3.5 mt-10">
            <div role="listitem" className="relative flex items-start pb-2">
              <div className="absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px dark:bg-zinc-800" />
              <div className="absolute ml-[-14px] py-2">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-sm font-semibold text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-3 dark:fill-zinc-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-full overflow-hidden pl-12 pr-px">
                <p className="prose mt-2 font-semibold text-zinc-900 dark:prose-invert dark:text-zinc-100">
                  2020 - Present
                </p>
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
                    In February 2020, I attended 3 month rookie boot camp
                    program where I developed with other candidates internal
                    application for employee managment. Main tech stack was
                    Angular, Spring Boot and MySQL.
                  </p>
                  <p>
                    After sucessful bootcamp, I got full time job offer.
                    Currently focused on frontend, with my main frameworks being
                    React and Next.js.
                  </p>
                </div>
              </div>
            </div>

            <div role="listitem" className="relative flex items-start pb-2">
              <div className="absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px dark:bg-zinc-800" />
              <div className="absolute ml-[-14px] py-2">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-sm font-semibold text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-3 dark:fill-zinc-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-full overflow-hidden pl-12 pr-px">
                <p className="prose mt-2 font-semibold text-zinc-900 dark:prose-invert dark:text-zinc-100">
                  2015 -2019
                </p>
                <div>
                  <p>
                    Graduated as an IT Engineer at Slobomir P University in
                    <br className="hidden sm:block" /> Doboj, Bosnia and
                    Herzegovina.
                  </p>
                </div>
              </div>
            </div>

            <div role="listitem" className="relative flex items-start pb-2">
              <div className="absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px dark:bg-zinc-800" />
              <div className="absolute ml-[-14px] py-2">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-sm font-semibold text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-3 dark:fill-zinc-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-full overflow-hidden pl-12 pr-px">
                <p className="prose mt-2 font-semibold text-zinc-900 dark:prose-invert dark:text-zinc-100">
                  2011 - 2015
                </p>
                <p>
                  Graduated as an Computer Technician at Electro-Technical High
                  School in Doboj, Bosnia and Herzegovina.
                </p>
              </div>
            </div>

            <div role="listitem" className="relative flex items-start pb-2">
              <div className="absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px dark:bg-zinc-800" />
              <div className="absolute ml-[-14px] py-2">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-sm font-semibold text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-3 dark:fill-zinc-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-full overflow-hidden pl-12 pr-px">
                <p className="prose mt-2 font-semibold text-zinc-900 dark:prose-invert dark:text-zinc-100">
                  1996
                </p>
                <p>Born in Doboj, Bosnia and Herzegovina.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
