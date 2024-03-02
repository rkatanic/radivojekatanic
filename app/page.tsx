import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoMdArrowForward,
  IoMdMail,
} from "react-icons/io";

const SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Angular",
  "Spring Boot",
  "Mongo",
  "MySQL",
];
const Home = () => (
  <div className="relative z-10 flex h-full min-h-screen flex-1 flex-col justify-between">
    <div className="mx-auto my-8 flex w-full max-w-2xl items-center justify-between px-4 sm:mb-8 sm:mt-16">
      <div className="flex gap-6 font-medium">
        <div className="font-medium text-zinc-200">About</div>
      </div>
      {/* <a
        href="mailto:"
        target="blank"
        rel="noopener noreferrer"
        className="flex gap-6 items-center"
      >
        <IoMdSunny className="text-xl" />
        Let{"'"}s talk
      </a> */}
    </div>
    <div className="mx-auto flex max-w-2xl flex-col gap-12 px-4 py-8 sm:py-16">
      <div className="-mb-6 grid gap-6 sm:grid-cols-5 sm:gap-12">
        <div className="col-span-5 text-4xl font-bold tracking-tight text-zinc-200 sm:text-5xl">
          Building functional and performant digital spaces.
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-5 sm:gap-12">
        <div className="col-span-5">
          <div className="leading-relaxed">
            Born in 1996, Radivoje Katanic is Software Developer based in Doboj,
            Bosnia & Herzegovina, where he builds digital solutions for various
            clients at ProductDock. Away from work, he spends free time doing
            sports activities and cultivating his garden.
          </div>
          <a
            href="https://drive.google.com/file/d/1SYQCLxy7JCt7TJfHK5h1G7VqL4mhM8NM/view"
            target="blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex cursor-pointer items-center gap-2 whitespace-nowrap text-sm font-medium text-teal-500 hover:text-teal-400"
          >
            View full resume
            <IoMdArrowForward />
          </a>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-5 sm:gap-12">
        <div className="font-medium text-zinc-200">Experience</div>
        <div className="col-span-4">
          <div className="mb-2 text-base font-semibold text-zinc-200">
            Software Developer
            <span className="mx-2 text-zinc-400">•</span>
            ProductDock
            <span className="mx-2 text-zinc-400">•</span>
            Aug 2020 - Now
          </div>
          <div className="leading-relaxed">
            Аfter successful boot camp program, started professional career as a
            full-stack developer. Currently mostly front-end oriented, mainly
            building software with React and Next.js.
          </div>
          <div className="mb-2 mt-8 text-base font-semibold text-zinc-200">
            Intern
            <span className="mx-2 text-zinc-400">•</span>
            ProductDock
            <span className="mx-2 text-zinc-400">•</span>
            Feb 2020 - May 2020
          </div>
          <div className="leading-relaxed">
            Attended 3 month boot camp program at local software development
            company by building an internal employee data management tool based
            on Angular, Spring Boot, MySQL.
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-5 sm:gap-12">
        <div className="font-medium text-zinc-200">Education</div>
        <div className="col-span-4">
          <div className="mb-2 font-medium text-zinc-200">
            IT Engineer
            <span className="mx-2 text-zinc-400">•</span>
            Slobomir P University
          </div>
          <div className="leading-relaxed"> 2015 - 2019, Doboj BA</div>
          <div className="mb-2 mt-8 font-medium text-zinc-200">
            Computer Technician
            <span className="mx-2 text-zinc-400">•</span>
            Electro-Technical High School
          </div>
          <div className="leading-relaxed">2011 - 2015, Doboj BA</div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-5 sm:gap-12">
        <div className="font-medium text-zinc-200">Skills</div>
        <div className="col-span-4">
          <div className="text-x mb-2 flex flex-wrap gap-2 text-lg font-medium text-zinc-300">
            {SKILLS.map((skill) => (
              <div
                key={skill}
                className="flex h-9 max-w-min items-center justify-center gap-2 whitespace-nowrap rounded-full border border-zinc-700 bg-zinc-900 px-5 text-sm"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-5 sm:gap-12">
        <div className="font-medium text-zinc-200">Interests</div>
        <div className="col-span-4">
          <div className="leading-relaxed">
            Sports, Nature, Architecture, Design Systems, Art, Space
            Exploration, Technology
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-5 sm:gap-12">
        <div className="font-medium text-zinc-200">Contact</div>
        <div className="col-span-4 flex flex-col gap-4 text-zinc-200">
          <a
            target="blank"
            rel="noopener noreferrer"
            href="https://github.com/rkatanic"
            className="group flex cursor-pointer items-center gap-4 text-sm font-medium leading-relaxed hover:text-teal-500"
          >
            <IoLogoGithub className="text-xl text-zinc-500 group-hover:text-teal-500" />
            Follow on GitHub
          </a>
          <a
            target="blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/radivoje-katanic/"
            className="group flex cursor-pointer items-center gap-4 text-sm font-medium leading-relaxed hover:text-teal-500"
          >
            <IoLogoLinkedin className="text-xl text-zinc-500 group-hover:text-teal-500" />
            Follow on LinkedIn
          </a>
          <a
            target="blank"
            rel="noopener noreferrer"
            href="mailto:rkatanic@outlook.com"
            className="group flex cursor-pointer items-center gap-4 text-sm font-medium leading-relaxed hover:text-teal-500"
          >
            <IoMdMail className="text-xl text-zinc-500 group-hover:text-teal-500" />
            rkatanic@outlook.com
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
