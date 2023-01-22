import ContentBox from "@/components/ContentBox";
import Profile from "@/components/Profile";

const SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "SCSS",
  "React",
  "Angular",
  "Java",
  "Spring Boot",
  "MySQL",
  "MongoDB",
];

const Home = (): JSX.Element => (
  <div className="flex flex-col gap-6">
    <Profile />
    <ContentBox>
      <h3 className="mb-4 font-medium text-gray-400">About Me</h3>
      <p className="text-gray-900">
        Hey, my name is Radivoje Katanić. I am a software developer based in
        Bosnia & Herzegovina.
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
          className="border-b border-gray-300 px-1 hover:border-gray-400 hover:bg-sky-50"
        >
          ProductDock
        </a>
        .
      </p>

      <h3 className="mt-8 mb-4 font-medium text-gray-400">Skills</h3>
      <div className="flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <span
            key={skill}
            className="rounded-lg bg-gray-50 p-2 px-6 font-medium text-gray-600"
          >
            {skill}
          </span>
        ))}
      </div>
    </ContentBox>

    <ContentBox>
      <h3 className="mb-4 font-medium text-gray-400">Experience</h3>
      <div className="flex gap-6">
        <img
          className="mt-1 h-10 w-10 stroke-gray-400"
          src="https://productdock.com/wp-content/themes/productdock/src/images/product-dock-logo.png"
        />
        <div className="w-full">
          <div className="flex items-baseline justify-between">
            <h3 className="font-semibold text-gray-900">Software Developer</h3>
            <p className="text-sm font-medium text-gray-900">
              Aug 2020 - Present
            </p>
          </div>
          <p className="text-gray-600">ProductDock</p>
          <p className="mt-4 max-w-xl text-gray-600">
            After successfull bootcamp I got full time offer, where I&apos;m
            currently building web products for various clients using modern web
            technologies.
          </p>
          <hr className="my-8" />
        </div>
      </div>
      <div className="flex gap-6">
        <img
          className="mt-1 h-10 w-10 stroke-gray-400"
          src="https://productdock.com/wp-content/themes/productdock/src/images/product-dock-logo.png"
        />
        <div className="w-full">
          <div className="flex items-baseline justify-between">
            <h3 className="font-semibold text-gray-900">Intern</h3>
            <p className="text-sm font-medium text-gray-900">
              Feb 2020 - May 2020
            </p>
          </div>
          <p className="text-gray-600">ProductDock</p>
          <p className="mt-4 max-w-xl text-gray-600">
            Attended 3 month rookie bootcamp where I developed with other
            attendees employee managment application using Angular, Spring Boot,
            MySQL.
          </p>
          <hr className="my-6 last:hidden" />
        </div>
      </div>
    </ContentBox>
  </div>
);

export default Home;
