import Link from "next/link";
import ChartPieDonutText from "./PieChart";

const ServicesSection = () => (
  <section className="mx-auto divide-y border border-t-0">
    <div className="px-6 py-16 sm:px-16 sm:py-20">
      <div className="lg:flex lg:justify-between lg:gap-x-16">
        <h2 className="max-w-md flex-auto text-center text-3xl font-semibold tracking-tight text-balance sm:text-start">
          Helping you build{" "}
          <span className="text-secondary bg-primary mt-1 mr-1 inline-block rounded-lg px-2.5 py-0.5 font-mono tracking-tight">
            functional
          </span>{" "}
          web apps.
        </h2>
        <div className="mt-4 max-w-[31rem] flex-auto lg:mt-0">
          <div className="text-muted-foreground space-y-4 text-center text-base/relaxed sm:text-start">
            Whether you're starting from scratch or improving an existing
            product, I focus on performance, scalability, and usability — so
            your app works beautifully, everywhere.
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 items-center md:grid-cols-2">
      <div className="relative col-span-1 flex h-full items-end justify-center overflow-hidden border-b px-6 pt-16 md:border-r md:border-b-0">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: "var(--background)",
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)",
            backgroundSize: "16px 16px",
          }}
        />

        <div className="bg-background ring-border absolute top-52 right-6 z-10 flex gap-3 rounded-full p-2 text-sm font-medium shadow-md ring-1">
          <div className="flex items-center gap-2">
            <svg
              width={24}
              height={24}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              className="text-muted-foreground size-5 shrink-0"
            >
              <path d="M12.003 21a9.003 9.003 0 0 0 8.996-8.658c.006-.153-.16-.25-.298-.181-2.476 1.247-4.006-.077-3.757-1.854a.23.23 0 0 0-.252-.257c-2.171.303-3.086-1.014-2.744-2.804a.225.225 0 0 0-.201-.261c-2.043-.182-2.212-2.54-1.861-3.69.043-.142-.059-.3-.207-.295a9.003 9.003 0 0 0 .324 18M15 16.354l.354-.354M10 17.354l.354-.354M8 8.354 8.353 8M7 13.354 7.353 13M12 12.354l.354-.354" />
            </svg>
            <span className="text-muted-foreground">We use cookies.</span>
          </div>
          <div className="bg-primary-foreground flex size-5 items-center justify-center rounded-full">
            <svg
              width={24}
              height={24}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              className="size-3 shrink-0 stroke-2"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </div>
        </div>

        <main className="absolute bottom-12 z-10 flex flex-col justify-center gap-10 overflow-x-auto px-2 py-10 md:items-center">
          <div
            className="bg-background ring-border flex w-full items-center justify-between rounded-xl font-medium shadow-md ring-1 sm:max-w-96"
            aria-live="assertive"
          >
            <div className="flex flex-1 gap-4 px-4 py-3">
              <span
                data-slot="avatar"
                className="relative flex size-10 shrink-0 overflow-hidden rounded-full"
              >
                <img
                  data-slot="avatar-image"
                  className="bg-muted dark:bg-primary aspect-square size-full"
                  src="/me.png"
                />
              </span>
              <div className="flex flex-col text-sm">
                <span className="truncate">Radivoje Katanic</span>
                <span className="text-muted-foreground truncate font-normal">
                  UI/UX changes have been published.
                </span>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="text-muted-foreground mr-2 size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
              />
            </svg>
          </div>
        </main>

        <div className="bg-background absolute top-6 left-14 z-10 space-y-3 rounded-xl border p-3 px-3 shadow-md sm:top-14">
          <div className="flex gap-1">
            <div className="bg-input size-2 rounded-full"></div>
            <div className="bg-input size-2 rounded-full"></div>
            <div className="bg-input size-2 rounded-full"></div>
          </div>
          <div className="text-muted-foreground pr-8 font-mono text-sm">
            ~ git add .
          </div>
        </div>

        <div className="relative mx-auto h-[360px] w-[300px] rounded-t-[2.5rem] border-[14px] border-neutral-800 bg-neutral-800 dark:border-neutral-800">
          <div className="absolute -start-[17px] top-[72px] h-[32px] w-[3px] rounded-s-lg bg-neutral-800 dark:bg-neutral-800" />
          <div className="absolute -start-[17px] top-[124px] h-[46px] w-[3px] rounded-s-lg bg-neutral-800 dark:bg-neutral-800" />
          <div className="absolute -start-[17px] top-[178px] h-[46px] w-[3px] rounded-s-lg bg-neutral-800 dark:bg-neutral-800" />
          <div className="absolute -end-[17px] top-[142px] h-[64px] w-[3px] rounded-e-lg bg-neutral-800 dark:bg-neutral-800" />
          <div className="bg-background h-[360px] w-[272px] overflow-hidden rounded-t-[2rem]">
            <ChartPieDonutText />
          </div>
        </div>
      </div>

      <div className="col-span-1 px-6 py-16 sm:p-20 sm:px-16">
        <h3 className="mb-2 text-xl font-semibold">Web Development</h3>
        <p className="text-muted-foreground">
          I can help you build modern, reliable web applications tailored to
          your needs.
        </p>
        <ul className="text-muted-foreground my-6 space-y-3">
          <li>
            <svg
              width={24}
              height={24}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 inline-block size-4 text-emerald-500"
            >
              <path d="M20.5 15.8V8.2a1.91 1.91 0 0 0-.944-1.645l-6.612-3.8a1.88 1.88 0 0 0-1.888 0l-6.612 3.8A1.9 1.9 0 0 0 3.5 8.2v7.602a1.91 1.91 0 0 0 .944 1.644l6.612 3.8a1.88 1.88 0 0 0 1.888 0l6.612-3.8A1.9 1.9 0 0 0 20.5 15.8" />
              <path d="m8.667 12.633 1.505 1.721a1 1 0 0 0 1.564-.073L15.333 9.3" />
            </svg>

            <span>Web app and website development</span>
          </li>
          <li>
            <svg
              width={24}
              height={24}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 inline-block size-4 text-emerald-500"
            >
              <path d="M20.5 15.8V8.2a1.91 1.91 0 0 0-.944-1.645l-6.612-3.8a1.88 1.88 0 0 0-1.888 0l-6.612 3.8A1.9 1.9 0 0 0 3.5 8.2v7.602a1.91 1.91 0 0 0 .944 1.644l6.612 3.8a1.88 1.88 0 0 0 1.888 0l6.612-3.8A1.9 1.9 0 0 0 20.5 15.8" />
              <path d="m8.667 12.633 1.505 1.721a1 1 0 0 0 1.564-.073L15.333 9.3" />
            </svg>

            <span>Bug fixes, performance optimizations</span>
          </li>
          <li>
            <svg
              width={24}
              height={24}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 inline-block size-4 text-emerald-500"
            >
              <path d="M20.5 15.8V8.2a1.91 1.91 0 0 0-.944-1.645l-6.612-3.8a1.88 1.88 0 0 0-1.888 0l-6.612 3.8A1.9 1.9 0 0 0 3.5 8.2v7.602a1.91 1.91 0 0 0 .944 1.644l6.612 3.8a1.88 1.88 0 0 0 1.888 0l6.612-3.8A1.9 1.9 0 0 0 20.5 15.8" />
              <path d="m8.667 12.633 1.505 1.721a1 1 0 0 0 1.564-.073L15.333 9.3" />
            </svg>

            <span>Feature enhancements and custom integrations</span>
          </li>
        </ul>
        <Link
          href="mailto:rkatanic@outlook.com"
          className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
        >
          <span>Lets connect</span>
          <svg
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
          >
            <path d="M4.5 12h15m0 0-5.625-6m5.625 6-5.625 6" />
          </svg>
        </Link>
      </div>
    </div>

    <div className="grid grid-cols-1 items-center md:grid-cols-2">
      <div className="relative flex h-full items-end justify-center border-b px-6 pt-16 md:order-last md:border-b-0 md:border-l">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: "var(--background)",
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)",
            backgroundSize: "16px 16px",
          }}
        />

        <div
          data-slot="card"
          className="bg-card text-card-foreground relative flex flex-col gap-6 rounded-t-3xl border border-b-0 py-6"
        >
          <div className="absolute top-36 -left-2 z-10 flex flex-col items-end sm:-left-10">
            <svg fill="none" height={18} viewBox="0 0 17 18" width={17}>
              <path
                d="M15.5036 3.11002L12.5357 15.4055C12.2666 16.5204 10.7637 16.7146 10.22 15.7049L7.4763 10.6094L2.00376 8.65488C0.915938 8.26638 0.891983 6.73663 1.96711 6.31426L13.8314 1.65328C14.7729 1.28341 15.741 2.12672 15.5036 3.11002ZM7.56678 10.6417L7.56645 10.6416C7.56656 10.6416 7.56667 10.6416 7.56678 10.6417L7.65087 10.4062L7.56678 10.6417Z"
                fill="currentColor"
                className="dark:text-chart-2 text-chart-2"
                strokeWidth="1.5"
              />
            </svg>

            <div className="bg-chart-2 dark:bg-chart-2 mr-4 ml-auto rounded-lg p-1 px-2 text-sm font-medium text-black">
              Radivoje
            </div>
          </div>
          <div className="absolute -right-2 bottom-32 z-10 sm:-right-10">
            <svg fill="none" height={18} viewBox="0 0 17 18" width={17}>
              <path
                d="M1.4964 3.11002L4.46428 15.4055C4.73338 16.5204 6.23625 16.7146 6.77997 15.7049L9.5237 10.6094L14.9962 8.65488C16.0841 8.26638 16.108 6.73663 15.0329 6.31426L3.16856 1.65328C2.22708 1.28341 1.25905 2.12672 1.4964 3.11002ZM9.43322 10.6417L9.43355 10.6416C9.43344 10.6416 9.43333 10.6416 9.43322 10.6417L9.34913 10.4062L9.43322 10.6417Z"
                fill="currentColor"
                strokeWidth="1.5"
                className="text-chart-4 dark:text-chart-3"
              />
            </svg>
            <div className="bg-chart-4 dark:bg-chart-3 ml-4 rounded-lg p-1 px-2 text-sm font-medium text-black">
              You
            </div>
          </div>

          <div
            data-slot="card-header"
            className="@container/card-header flex auto-rows-min grid-rows-[auto_auto] flex-row items-center gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
          >
            <div className="flex items-center gap-4">
              <span
                data-slot="avatar"
                className="relative flex size-8 shrink-0 overflow-hidden rounded-full border"
              >
                <img
                  data-slot="avatar-image"
                  className="bg-muted dark:bg-primary aspect-square size-full"
                  alt="Photo of Radivoje Katanic"
                  src="/me.png"
                />
              </span>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm leading-none font-medium">
                  Radivoje Katanic
                </p>
                <p className="text-muted-foreground text-xs">
                  rkatanic@outlook.com
                </p>
              </div>
            </div>
            <button
              data-slot="tooltip-trigger"
              className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-secondary text-secondary-foreground hover:bg-secondary/80 ml-auto inline-flex size-8 shrink-0 items-center justify-center gap-2 rounded-full text-sm font-medium whitespace-nowrap shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
              data-state="closed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-plus"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              <span className="sr-only">New message</span>
            </button>
          </div>
          <div data-slot="card-content" className="px-6">
            <div className="flex flex-col gap-4">
              <div className="bg-muted flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm">
                Hi, how can I help you today?
              </div>
              <div className="bg-primary text-primary-foreground ml-auto flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm">
                Hey, I'd like to improve my website.
              </div>
              <div className="bg-muted flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm">
                Let's make a call and see what we can do!
              </div>
            </div>
          </div>
          <div
            data-slot="card-footer"
            className="flex items-center px-6 [.border-t]:pt-6"
          >
            <form className="relative w-full">
              <input
                data-slot="input"
                className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex h-9 w-full min-w-0 flex-1 rounded-md border bg-transparent px-3 py-1 pr-10 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                id="message"
                placeholder="Type your message..."
                autoComplete="off"
                defaultValue=""
              />
              <button
                data-slot="button"
                className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 absolute top-1/2 right-2 inline-flex size-6 shrink-0 -translate-y-1/2 items-center justify-center gap-2 rounded-full text-sm font-medium whitespace-nowrap shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-up size-3.5"
                >
                  <path d="m5 12 7-7 7 7" />
                  <path d="M12 19V5" />
                </svg>
                <span className="sr-only">Send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="px-6 py-16 sm:px-16 sm:py-20">
        <h3 className="mb-2 text-xl font-semibold">IT Consulting</h3>
        <p className="text-muted-foreground">
          I provide guidance to help you make the best decisions aligned with
          your business goals.
        </p>
        <ul className="text-muted-foreground my-6 space-y-3">
          <li>
            <svg
              width={24}
              height={24}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 inline-block size-4 text-emerald-500"
            >
              <path d="M20.5 15.8V8.2a1.91 1.91 0 0 0-.944-1.645l-6.612-3.8a1.88 1.88 0 0 0-1.888 0l-6.612 3.8A1.9 1.9 0 0 0 3.5 8.2v7.602a1.91 1.91 0 0 0 .944 1.644l6.612 3.8a1.88 1.88 0 0 0 1.888 0l6.612-3.8A1.9 1.9 0 0 0 20.5 15.8" />
              <path d="m8.667 12.633 1.505 1.721a1 1 0 0 0 1.564-.073L15.333 9.3" />
            </svg>

            <span>Technology strategy and planning</span>
          </li>
          <li>
            <svg
              width={24}
              height={24}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 inline-block size-4 text-emerald-500"
            >
              <path d="M20.5 15.8V8.2a1.91 1.91 0 0 0-.944-1.645l-6.612-3.8a1.88 1.88 0 0 0-1.888 0l-6.612 3.8A1.9 1.9 0 0 0 3.5 8.2v7.602a1.91 1.91 0 0 0 .944 1.644l6.612 3.8a1.88 1.88 0 0 0 1.888 0l6.612-3.8A1.9 1.9 0 0 0 20.5 15.8" />
              <path d="m8.667 12.633 1.505 1.721a1 1 0 0 0 1.564-.073L15.333 9.3" />
            </svg>

            <span>Process improvement and automation</span>
          </li>
          <li>
            <svg
              width={24}
              height={24}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 inline-block size-4 text-emerald-500"
            >
              <path d="M20.5 15.8V8.2a1.91 1.91 0 0 0-.944-1.645l-6.612-3.8a1.88 1.88 0 0 0-1.888 0l-6.612 3.8A1.9 1.9 0 0 0 3.5 8.2v7.602a1.91 1.91 0 0 0 .944 1.644l6.612 3.8a1.88 1.88 0 0 0 1.888 0l6.612-3.8A1.9 1.9 0 0 0 20.5 15.8" />
              <path d="m8.667 12.633 1.505 1.721a1 1 0 0 0 1.564-.073L15.333 9.3" />
            </svg>

            <span>System evaluation</span>
          </li>
        </ul>
        <Link
          href="mailto:rkatanic@outlook.com"
          className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
        >
          <span>Lets connect</span>
          <svg
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
          >
            <path d="M4.5 12h15m0 0-5.625-6m5.625 6-5.625 6" />
          </svg>
        </Link>
      </div>
    </div>
  </section>
);

export default ServicesSection;
