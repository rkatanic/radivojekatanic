import Projects from "./Projects";
import Heading from "./Heading";
import DescriptionText from "./DescriptionText";
import HeroSection from "./HeroSection";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";
import getConfig from "next/config";
import dayjs from "dayjs";

export default function DetailsSection() {
  const config = getConfig();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-5xl">
        <HeroSection>
          <Heading>
            Collection of small personal <br />
            <span className="relative z-10">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute left-0 top-2/3 -z-[1] h-[0.58em] w-full fill-indigo-200/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
              </svg>
              tools & experiments.
            </span>
          </Heading>

          <DescriptionText>
            These are projects I work on in my free time. Most of them are
            result of experimentation with new frameworks and libraries.
          </DescriptionText>
          <div className="relative flex h-8 max-w-min items-center justify-center gap-2 whitespace-nowrap rounded-full px-3 text-sm font-medium leading-6 text-zinc-600 ring-1 ring-zinc-200">
            <GrStatusGood className="text-indigo-700" /> Last modified on{" "}
            {dayjs(config.publicRuntimeConfig.lastModifiedDate).format(
              "D MMM, YYYY",
            )}
          </div>
        </HeroSection>

        <Projects />

        <HeroSection>
          <Heading>
            Have a question, <br /> or just{" "}
            <span className="relative z-10">
              want to say hi?
              <svg
                aria-hidden="true"
                viewBox="0 0 281 40"
                preserveAspectRatio="none"
                className="absolute left-0 top-1/3 -z-[1] h-[1em] w-full fill-indigo-200/70"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
                ></path>
              </svg>
            </span>
          </Heading>

          <DescriptionText>
            Feel free to reach out to me. Best way to contact me would be via
            e-mail, but you can also find me on Github and Linkedin.
          </DescriptionText>

          <div className="flex gap-2">
            <a
              href="mailto:rkatanic@outlook.com"
              target="_blank"
              rel="noopener referrer"
              className="relative flex h-8 max-w-min cursor-pointer items-center justify-center whitespace-nowrap rounded-full px-3 text-sm font-medium leading-6 text-zinc-600 ring-1 ring-zinc-200 hover:text-indigo-600 hover:ring-indigo-200"
            >
              rkatanic@outlook.com
            </a>
            <a
              href="https://github.com/rkatanic"
              target="_blank"
              rel="noopener referrer"
              className="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-sm text-zinc-600 ring-1 ring-zinc-200 hover:text-indigo-600 hover:ring-indigo-200"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/radivoje-katanic/"
              target="_blank"
              rel="noopener referrer"
              className="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-sm text-zinc-600 ring-1 ring-zinc-200 hover:text-indigo-600 hover:ring-indigo-200"
            >
              <FaLinkedin />
            </a>
          </div>
        </HeroSection>
      </div>
    </div>
  );
}
