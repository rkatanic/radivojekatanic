import { FiFileText, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Navigation from "@/components/Navigation";
import IconButon from "@/components/IconButton";

const About = (): JSX.Element => (
  <div className="about bg-gray-950 pb-20 text-gray-100">
    <Navigation />
    <div className="mx-auto mb-16 h-72 max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-r from-yellow-200 via-emerald-300 to-blue-400">
      {/* <img
        src="https://img.freepik.com/free-vector/banner-with-low-poly-wireframe-abstract-design_1048-16123.jpg?w=1380&t=st=1683487219~exp=1683487819~hmac=7803aebd0c72528b98f44e37011796e62d29b8159577f20ec9e4685cfa78c05d"
        className="h-full w-full bg-cover opacity-50"
      /> */}
    </div>
    <div className="mx-auto max-w-4xl px-8">
      <h1 className="mb-4 text-3xl font-medium leading-snug">
        Crafting digital spaces that matter.
        <br />
        Step by step, little by little.
      </h1>
      <p className="text-lg leading-7 text-gray-400">
        Hi there, my name is Radivoje Katanic. I am a software developer from
        Bosnia & Hercegovina. My free time is spent mostly outside doing sports
        or gardening.
      </p>

      <div className="mt-8 flex gap-8">
        <div className="flex-1">
          <h1 className="mb-4 text-2xl font-medium">Career</h1>
          <p className="leading-7 text-gray-400">
            I started my career in February 2020 when I got first internship
            opportunity in local software company. Currently building web
            products at ProductDock.
          </p>

          <h1 className="mb-4 mt-8 text-2xl font-medium">Education</h1>
          <p className="leading-7 text-gray-400">
            Graduateed as an IT Engineer in 2019 at local university in my
            hometown.
          </p>

          <button className="mt-8 flex items-center gap-2 rounded-full border border-gray-100 p-2 px-4 text-sm font-medium tracking-wider hover:bg-gray-100 hover:text-gray-950">
            <FiFileText /> Download CV
          </button>
        </div>

        <div className="flex-1">
          <h1 className="mb-4 text-2xl font-medium">Technologies</h1>
          <p className="leading-7 text-gray-400">
            I'm mostly front-end oriented, with main focus on technologies like
            React, NextJS, TailwindCSS, but not limited to it, because tools are
            something that come and go.
          </p>

          <h1 className="mb-4 mt-8 text-2xl font-medium">Skills</h1>
          <p className="leading-7 text-gray-400">
            Curiosity is probably my main one. It's what keeps me trying out new
            things and moving forward.
          </p>

          <h1 className="mb-4 mt-8 text-2xl font-medium">Interests</h1>
          <p className="leading-7 text-gray-400">
            Learning basic principles of web UX/UI, exploring WebGL, taking care
            of 10 cats and my garden.
          </p>

          <h1 className="mb-4 mt-8 text-2xl font-medium">Location</h1>
          <p className="leading-7 text-gray-400">
            Doboj, Bosnia and Hercegovina
          </p>

          <h1 className="mb-4 mt-8 text-2xl font-medium">Contact</h1>
          <p className="leading-7 text-gray-400">
            Have a question, or just want to say hello?
            <br />
            Reach me out via Github, Linkedin or e-mail.
          </p>
          <div className="mt-8 flex gap-4">
            <IconButon href="https://github.com/rkatanic" icon={<FiGithub />} />
            <IconButon
              href="https://github.com/rkatanic"
              icon={<FiLinkedin />}
            />
            <IconButon href="mailto:rkatanic@outlook.com  " icon={<FiMail />} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
