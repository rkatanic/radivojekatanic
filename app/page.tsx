import { UserCircleIcon } from "@heroicons/react/24/outline";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

const jobOpenings = [
  {
    id: 1,
    role: "Full-time designer",
    href: "#",
    description:
      "Quos sunt ad dolore ullam qui. Enim et quisquam dicta molestias. Corrupti quo voluptatum eligendi autem labore.",
    salary: "$75,000 USD",
    location: "San Francisco, CA",
  },
  {
    id: 2,
    role: "Laravel developer",
    href: "#",
    description:
      "Et veniam et officia dolorum rerum. Et voluptas consequatur magni sapiente amet voluptates dolorum. Ut porro aut eveniet.",
    salary: "$125,000 USD",
    location: "San Francisco, CA",
  },
  {
    id: 3,
    role: "React Native developer",
    href: "#",
    description:
      "Veniam ipsam nisi quas architecto eos non voluptatem in nemo. Est occaecati nihil omnis delectus illum est.",
    salary: "$105,000 USD",
    location: "San Francisco, CA",
  },
];

const Home = () => (
  <div>
    <nav className="bg-whitex fxixed top-0 z-50 mx-auto h-16 w-full max-w-5xl text-zinc-400">
      <div className="container flex h-full items-center">
        <nav className="hidden w-full items-center justify-between lg:flex">
          <div className="flex w-full items-center justify-between gap-6">
            <a
              href="/"
              className="group flex items-center gap-1.5 font-semibold"
            >
              <span className="flex items-center gap-1 text-[16px] tracking-[-1px] text-neutral-200 transition-opacity duration-300 group-hover:opacity-65">
                radivojekatanic.com
              </span>
            </a>
            <div className="flex items-center">
              <nav
                aria-label="Main"
                data-orientation="horizontal"
                dir="ltr"
                className="relative z-10 flex max-w-max flex-1 items-center justify-center"
              >
                <a
                  href="/blocks"
                  className="bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group inline-flex h-10 w-max items-center justify-center rounded-md px-3 py-1.5 text-xs font-medium text-neutral-200 transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  data-radix-collection-item=""
                >
                  Blocks
                </a>
                <div className="absolute left-0 top-full flex justify-center" />
              </nav>
              <nav
                aria-label="Main"
                data-orientation="horizontal"
                dir="ltr"
                className="relative z-10 flex max-w-max flex-1 items-center justify-center"
              >
                <div style={{ position: "relative" }}>
                  <ul
                    data-orientation="horizontal"
                    className="group flex flex-1 list-none items-center justify-center space-x-1"
                    dir="ltr"
                  >
                    <li className="text-muted-foreground">
                      <button
                        id="radix-:r1R19:-trigger-radix-:r1Rd9:"
                        data-state="closed"
                        aria-expanded="false"
                        aria-controls="radix-:r1R19:-content-radix-:r1Rd9:"
                        className="bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group group inline-flex h-10 w-max items-center justify-center rounded-md px-3 py-1.5 text-xs font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                        data-radix-collection-item=""
                      >
                        <span>Categories</span>{" "}
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
                          className="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                          aria-hidden="true"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="absolute left-0 top-full flex justify-center" />
              </nav>
              <nav
                aria-label="Main"
                data-orientation="horizontal"
                dir="ltr"
                className="relative z-10 flex max-w-max flex-1 items-center justify-center"
              >
                <a
                  href="/templates"
                  className="bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group inline-flex h-10 w-max items-center justify-center rounded-md px-3 py-1.5 text-xs font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  data-radix-collection-item=""
                >
                  Templates
                </a>
              </nav>
              <nav
                aria-label="Main"
                data-orientation="horizontal"
                dir="ltr"
                className="relative z-10 flex max-w-max flex-1 items-center justify-center"
              >
                <div style={{ position: "relative" }}>
                  <ul
                    data-orientation="horizontal"
                    className="group flex flex-1 list-none items-center justify-center space-x-1"
                    dir="ltr"
                  >
                    <li className="text-muted-foreground">
                      <button
                        id="radix-:r1R29:-trigger-radix-:r1Re9:"
                        data-state="closed"
                        aria-expanded="false"
                        aria-controls="radix-:r1R29:-content-radix-:r1Re9:"
                        className="bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group group inline-flex h-10 w-max items-center justify-center rounded-md px-3 py-1.5 text-xs font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                        data-radix-collection-item=""
                      >
                        <span>Addons</span>{" "}
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
                          className="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                          aria-hidden="true"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="absolute left-0 top-full flex justify-center" />
              </nav>
            </div>
            <div className="flex gap-2">
              <a
                href="/auth/login"
                className="ring-offset-background focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-3 text-sm text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                Login
              </a>
              <a
                href="/pricing"
                className="ring-offset-background focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-3 text-sm text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                All Access
              </a>
            </div>
          </div>
        </nav>
        <div className="flex w-full items-center justify-between lg:hidden">
          <a href="/" className="group flex items-center gap-1.5 font-semibold">
            <img
              src="/images/block/block-1.svg"
              className="w-6 transition-opacity duration-300 group-hover:opacity-65"
              alt="Shadcnblocks Logo"
            />
            <span className="flex items-center gap-1 text-[16px] tracking-[-1px] transition-opacity duration-300 group-hover:opacity-65">
              Shadcnblocks.com
            </span>
          </a>
          <button
            className="ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md border text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:r1Ra:"
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
              className="lucide lucide-menu size-4"
            >
              <line x1={4} x2={20} y1={12} y2={12} />
              <line x1={4} x2={20} y1={6} y2={6} />
              <line x1={4} x2={20} y1={18} y2={18} />
            </svg>
          </button>
        </div>
      </div>
    </nav>
    <div className="bg-whitex py-32">
      <div className="px-6x mx-auto max-w-5xl">
        <div className="flex items-start gap-24">
          <img
            src="/me.png"
            className="order-2 col-span-1 max-w-sm rounded-2xl bg-zinc-200"
            alt=""
          />
          <div className="xmax-w-xl prose prose-zinc prose-invert col-span-1 w-full prose-headings:text-zinc-200 prose-p:text-zinc-400">
            <div className="mb-8x max-w-2xl">
              <h2 className="mt-0 text-pretty text-3xl font-semibold tracking-tight text-zinc-200 sm:text-4xl">
                Software designer, founder and amateur astronaut.
              </h2>
              <p className="mt-6 text-xl/8 text-zinc-400">
                I’m the founder and CEO of Planetaria, where we develop
                technologies that empower regular people to explore space on
                their own terms.
              </p>
              <div className="mt-8 flex hidden gap-4">
                <button
                  type="button"
                  className="shadow-xs rounded-full bg-zinc-200 px-6 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Contact me
                </button>
                <button
                  type="button"
                  className="shadow-xs rounded-full px-6 py-2.5 text-sm font-semibold text-zinc-200 ring-1 ring-inset ring-zinc-700 hover:bg-zinc-800/30"
                >
                  Read resume
                </button>
              </div>
            </div>
            <h3>Work history</h3>
            <p>
              In late February 2020, I joined a three-month rookie boot camp
              program at ProductDock, where I worked alongside other rookies to
              create an internal employee management app. Upon completing the
              program successfully, I got full-time job offer.
            </p>
            <p>
              Since then, I have been working at ProductDock, where I am
              building software solutions for various clients worldwide.
            </p>

            <h3>Technologies</h3>
            <p>
              Mainly focused on frontend technologies, but I do work on backend
              stuff too. Current tech stack I use is:
            </p>
            <ul>
              <li>Languages - HTML, CSS, JavaScript, Java</li>
              <li>Frameworks - React, Next.js, Tailwind CSS, Spring Boot</li>
            </ul>
            <p>
              Lately I am mostly working with Next.js on frontend along with
              Spring Boot on backend services, but I like trying out new
              technologies, because tools come and go.
            </p>
            <h3>Interests</h3>
            <p>
              Away from work, I enjoy doing sports or spending time outdoors.
              Also interested in movies, technology, literature, architecture,
              and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
