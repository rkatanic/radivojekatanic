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
const Home = (): JSX.Element => (
  <div className="flex h-full min-h-screen flex-1 flex-col justify-between relative z-10">
    <div className="w-full max-w-2xl px-4 mx-auto my-8 sm:mt-16 sm:mb-8 flex items-center justify-between">
      <div className="flex gap-6 font-medium">
        <div className="text-zinc-200 font-medium">About</div>
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
    <div className="max-w-2xl px-4 mx-auto flex flex-col gap-12 py-8 sm:py-16">
      <div className="grid sm:grid-cols-5 gap-6 sm:gap-12 -mb-6">
        <div className="text-4xl sm:text-5xl text-zinc-200 font-bold tracking-tight col-span-5">
          Building functional and performant digital spaces.
        </div>
      </div>

      <div className="grid sm:grid-cols-5 gap-6 sm:gap-12">
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
            className="gap-2 mt-4 whitespace-nowrap inline-flex items-center text-sm font-medium text-teal-500 hover:text-teal-400 cursor-pointer"
          >
            View full resume
            <IoMdArrowForward />
          </a>
        </div>
      </div>

      <div className="grid sm:grid-cols-5 gap-6 sm:gap-12">
        <div className="font-medium text-zinc-200">Experience</div>
        <div className="col-span-4">
          <div className="text-base text-zinc-200 mb-2 font-semibold">
            Software Developer
            <span className="text-zinc-400 mx-2">•</span>
            ProductDock
            <span className="text-zinc-400 mx-2">•</span>
            Aug 2020 - Now
          </div>
          <div className="leading-relaxed">
            Аfter successful boot camp program, started professional career as a
            full-stack developer. Currently mostly front-end oriented, mainly
            building software with React and Next.js.
          </div>
          <div className="text-base text-zinc-200 mb-2 font-semibold mt-8">
            Intern
            <span className="text-zinc-400 mx-2">•</span>
            ProductDock
            <span className="text-zinc-400 mx-2">•</span>
            Feb 2020 - May 2020
          </div>
          <div className="leading-relaxed">
            Attended 3 month boot camp program at local software development
            company by building an internal employee data management tool based
            on Angular, Spring Boot, MySQL.
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-5 gap-6 sm:gap-12">
        <div className="font-medium text-zinc-200">Education</div>
        <div className="col-span-4">
          <div className="font-medium text-zinc-200 mb-2">
            IT Engineer
            <span className="text-zinc-400 mx-2">•</span>
            Slobomir P University
          </div>
          <div className="leading-relaxed"> 2015 - 2019, Doboj BA</div>
          <div className="font-medium text-zinc-200 mb-2 mt-8">
            Computer Technician
            <span className="text-zinc-400 mx-2">•</span>
            Electro-Technical High School
          </div>
          <div className="leading-relaxed">2011 - 2015, Doboj BA</div>
        </div>
      </div>

      <div className="grid sm:grid-cols-5 gap-6 sm:gap-12">
        <div className="font-medium text-zinc-200">Skills</div>
        <div className="col-span-4">
          <div className="text-lg font-medium text-zinc-300 mb-2 flex flex-wrap gap-2 text-x">
            {SKILLS.map((skill) => (
              <div
                key={skill}
                className="gap-2 bg-zinc-900 text-sm h-9 px-5 flex items-center justify-center rounded-full border border-zinc-700 max-w-min whitespace-nowrap"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-5 gap-6 sm:gap-12">
        <div className="font-medium text-zinc-200">Interests</div>
        <div className="col-span-4">
          <div className="leading-relaxed">
            Sports, Nature, Architecture, Design Systems, Art, Space
            Exploration, Technology
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-5 gap-6 sm:gap-12">
        <div className="font-medium text-zinc-200">Contact</div>
        <div className="col-span-4 gap-4 flex flex-col text-zinc-200">
          <a
            target="blank"
            rel="noopener noreferrer"
            href="https://github.com/rkatanic"
            className="leading-relaxed flex items-center gap-4 hover:text-teal-500 cursor-pointer group text-sm font-medium"
          >
            <IoLogoGithub className="text-zinc-500 group-hover:text-teal-500 text-xl" />
            Follow on GitHub
          </a>
          <a
            target="blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/radivoje-katanic/"
            className="leading-relaxed flex items-center gap-4 hover:text-teal-500 cursor-pointer group text-sm font-medium"
          >
            <IoLogoLinkedin className="text-zinc-500 group-hover:text-teal-500 text-xl" />
            Follow on LinkedIn
          </a>
          <a
            target="blank"
            rel="noopener noreferrer"
            href="mailto:rkatanic@outlook.com"
            className="leading-relaxed flex items-center gap-4 hover:text-teal-500 cursor-pointer group text-sm font-medium"
          >
            <IoMdMail className="text-zinc-500 group-hover:text-teal-500 text-xl" />
            rkatanic@outlook.com
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
