import Image from "next/image";
import { FiCalendar, FiDownloadCloud } from "react-icons/fi";

const Home = (): JSX.Element => (
  <div>
    <div className="-mt-8 flex items-center gap-4">
      <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-slate-200 shadow-md">
        <Image alt="me" src="/me.png" width={240} height={240} />
      </div>
      <div className="mt-8 flex-1">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-3xl font-semibold leading-10">
            Radivoje Katanić
          </h1>
          <div className="flex items-start gap-2">
            <a
              href="https://drive.google.com/file/d/1SYQCLxy7JCt7TJfHK5h1G7VqL4mhM8NM/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="flex h-9 items-center gap-2 rounded-lg  border bg-gray-800 px-3 text-sm font-medium text-white shadow-sm hover:bg-gray-900 hover:shadow-md"
              >
                <FiDownloadCloud /> Download CV
              </button>
            </a>
          </div>
        </div>
        <h3 className="leading-6 text-gray-600">Software Developer</h3>
      </div>
    </div>

    {/* <form className="my-12 mt-8 flex flex-col gap-6">
          <div className="flex items-baseline">
            <div className="flex-1 text-sm text-gray-900">Name*</div>
            <input
              required
              type="text"
              className="w-full flex-[3] rounded-lg border border-gray-300 p-2 text-sm shadow-sm"
            />
          </div>
          <div className="flex items-baseline">
            <div className="flex-1 text-sm text-gray-900">E-mail*</div>
            <input
              required
              type="text"
              className="w-full flex-[3] rounded-lg border border-gray-300 p-2 text-sm shadow-sm"
            />
          </div>
          <div className="flex items-baseline">
            <div className="flex-1 text-sm text-gray-900">Message*</div>
            <textarea
              rows={10}
              required
              className="w-full flex-[3] rounded-lg border border-gray-300 p-2 text-sm shadow-sm"
            />
          </div>
          <button className="max-w-min self-end rounded-lg bg-gray-800 p-2 px-6 text-sm font-medium text-white hover:bg-gray-900 hover:shadow-md">
            Send
          </button>
        </form> */}

    <div className="my-12 flex">
      <div className="flex-1">
        <h3 className="mb-2 whitespace-nowrap font-medium leading-6 text-gray-900">
          About me
        </h3>
      </div>
      <p className="flex-[3] leading-6 text-gray-600">
        Hey, my name is Radivoje Katanić.
        <br />
        I am a software developer based in Bosnia & Herzegovina.
        <br />
        In a free time I like experimenting with different technologies and
        building small tools for my personal neeeds.
        <br />
        <br />
        Currently working at{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://productdock.com/"
          className="border-b border-gray-300 bg-sky-50 px-1 hover:border-gray-400 hover:bg-sky-100"
        >
          ProductDock
        </a>
        .
      </p>
    </div>
    <hr />

    <div className="my-12 flex">
      <div className="flex-1">
        <h3 className="mb-2 whitespace-nowrap font-medium leading-6 text-gray-900">
          Experience
        </h3>
      </div>
      <div className="flex flex-[3] flex-col gap-12">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Software Developer</h3>
            <p className="flex items-center gap-2 text-sm text-gray-500">
              <FiCalendar /> Aug 2020 - Present
            </p>
          </div>
          <p className="my-2 font-medium text-gray-600">ProductDock</p>
          <p className="leading-6 text-gray-600">
            After successfull bootcamp I got full time offer, where I&apos;m
            currently building web products for various clients using modern web
            technologies.
          </p>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Intern</h3>
            <p className="flex items-center gap-2 text-sm text-gray-500">
              <FiCalendar /> Feb 2020 - May 2020
            </p>
          </div>
          <p className="my-2 font-medium text-gray-600">ProductDock</p>
          <p className="leading-6 text-gray-600">
            Attended 3 month rookie bootcamp where I developed with other
            attendees employee managment application using Angular, Spring Boot,
            MySQL.
          </p>
        </div>
      </div>
    </div>
    <hr />

    <div className="my-12 flex">
      <div className="flex-1">
        <h3 className="mb-2 whitespace-nowrap font-medium leading-6 text-gray-900">
          Skills & Languages
        </h3>
      </div>
      <div className="grid flex-[3] grid-cols-3">
        <div>
          <p className="leading-8 text-gray-600">HTML</p>
          <p className="leading-8 text-gray-600">CSS</p>
          <p className="leading-8 text-gray-600">SCSS</p>
          <p className="leading-8 text-gray-600">JavaScript</p>
          <p className="leading-8 text-gray-600">React</p>
          <p className="leading-8 text-gray-600">Angular</p>
        </div>
        <div>
          <p className="leading-8 text-gray-600">Java</p>
          <p className="leading-8 text-gray-600">Spring Boot</p>
        </div>
        <div>
          <p className="leading-8 text-gray-600">MySQL</p>
          <p className="leading-8 text-gray-600">MongoDB</p>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
