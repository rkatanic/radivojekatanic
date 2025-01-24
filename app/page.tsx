const experience = [
  {
    id: 0,
    role: "Software Developer at ProductDock",
    description:
      "In February 2020, I joined a three-month rookie boot camp program at ProductDock, where I worked alongside other rookies to create an internal employee management app. Upon completing the program successfully, I was offered a full-time position at the company, where I currently work on building software solutions and continue to grow as a web developer.",
    date: "2020 - Now",
    location: "Doboj, BA",
  },
];

const education = [
  {
    id: 0,
    role: "Bachelor of Information Technology",
    description: "Slobomir P University",
    date: "2015 -2019",
    location: "Doboj, BA",
  },
  {
    id: 1,
    role: "Computer Technician",
    description: "Electro-Technical High School",
    date: "2015 -2019",
    location: "Doboj, BA",
  },
];

const Home = () => (
  <div className="min-h-screen bg-white py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto flex max-w-2xl flex-col justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
        <div className="top-32 flex h-full w-full flex-col justify-between lg:sticky lg:max-w-lg">
          <div className="flex-1">
            <img
              alt=""
              src="/me.png"
              className="aspect-6/5 mb-6 h-28 w-28 w-full rounded-full bg-gray-100 object-cover lg:aspect-auto"
            />
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Radivoje Katanic
            </h2>
            <p className="mt-6 text-xl/8 text-gray-600">
              I am a web developer from Doboj, BA. Building digital solutions at
              ProductDock. Away from work, I enjoy doing sports or spending time
              outdoors.
            </p>

            <div className="border-tx xpt-8 mt-8 flex gap-6 border-gray-100">
              <div className="flex items-center gap-6">
                <a
                  href="mailto:rkatanic@outlook.com"
                  className="rounded-full bg-gray-800 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-900"
                >
                  Say hello
                </a>

                <a
                  href=""
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Download CV
                  <span aria-hidden="true" className="pl-1.5">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-full mt-auto flex hidden gap-x-6">
            <a
              href="https://github.com/rkatanic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">GitHub</span>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/radivoje-katanic/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="size-6"
              >
                <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
              </svg>
            </a>

            <a
              href="mailto:rkatanic@outlook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">E-mail</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="w-full space-y-12 lg:max-w-xl lg:flex-auto">
          <section>
            <h3 className="mb-6 text-sm/6 font-semibold text-indigo-600">
              Experience
            </h3>
            <ul className="-my-8 divide-y divide-gray-100">
              {experience.map((item) => (
                <li key={item.id} className="py-8">
                  <dl className="relative flex flex-wrap gap-x-3">
                    <div className="sr-only">Role</div>
                    <div className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                      {item.role}
                    </div>
                    <div className="sr-only">Description</div>
                    <div className="mt-2 w-full flex-none text-base/7 text-gray-600">
                      {item.description}
                    </div>
                    <div className="sr-only">Salary</div>
                    <div className="mt-4 text-base/7 font-medium text-gray-900">
                      {item.date}
                    </div>
                    <div className="sr-only">Location</div>
                    <div className="mt-4 flex items-center gap-x-3 text-base/7 text-gray-500">
                      <svg
                        viewBox="0 0 2 2"
                        aria-hidden="true"
                        className="size-0.5 flex-none fill-gray-300"
                      >
                        <circle r={1} cx={1} cy={1} />
                      </svg>
                      {item.location}
                    </div>
                  </dl>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h3 className="mb-6 text-sm/6 font-semibold text-indigo-600">
              Education
            </h3>
            <ul className="-my-8 divide-y divide-gray-100">
              {education.map((item) => (
                <li key={item.id} className="py-8">
                  <dl className="relative flex flex-wrap gap-x-3">
                    <div className="sr-only">Role</div>
                    <div className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                      {item.role}
                    </div>
                    <div className="mt-2 w-full flex-none text-base/7 text-gray-600">
                      {item.description}
                    </div>
                    <div className="sr-only">Date</div>
                    <div className="mt-4 text-base/7 font-medium text-gray-900">
                      {item.date}
                    </div>
                    <div className="sr-only">Location</div>
                    <div className="mt-4 flex items-center gap-x-3 text-base/7 text-gray-500">
                      <svg
                        viewBox="0 0 2 2"
                        aria-hidden="true"
                        className="size-0.5 flex-none fill-gray-300"
                      >
                        <circle r={1} cx={1} cy={1} />
                      </svg>
                      {item.location}
                    </div>
                  </dl>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h3 className="mb-6 text-sm/6 font-semibold text-indigo-600">
              Technical Skills
            </h3>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Next.js",
                "Tailwind CSS",
                "Angular",
                "Java",
                "Spring Boot",
              ].map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
          <section>
            <h3 className="mb-6 text-sm/6 font-semibold text-indigo-600">
              Contact
            </h3>
            <div className="flex flex-col space-y-4">
              <a
                href="https://github.com/rkatanic"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer underline-offset-2 hover:underline"
              >
                Follow on Github
              </a>
              <a
                href="https://www.linkedin.com/in/radivoje-katanic/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer underline-offset-2 hover:underline"
              >
                Follow on LinkedIn
              </a>
              <a
                href="mailto:rkatanic@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer underline-offset-2 hover:underline"
              >
                E-mail to rkatanic@outlook.com
              </a>
            </div>
          </section>
          <section>
            <h3 className="mb-6 text-sm/6 font-semibold text-indigo-600">
              Location
            </h3>
            <p>Doboj, Bosnia & Herzegovina</p>
          </section>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
