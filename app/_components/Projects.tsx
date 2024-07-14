import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import { Carousel, CarouselContent, CarouselItem } from "./Carousel";
import { FiImage } from "react-icons/fi";
const posts = [
  {
    title: "Way To Fly",
    href: "https://www.waytofly.com/en",
    description:
      "Way To Fly is online booking platform specialized in booking flights and providing travel arrangements.",
    date: "Sep 2020",
    category: "Client",
  },
  {
    title: "Color Scale",
    href: "https://color-scale.vercel.app/",
    description:
      "Tool made for generating color shade palettes. Based on HSL color standard, also supporting HEX color values.",
    date: "Mar 16, 2020",
    category: "Personal",
  },
  {
    title: "Markdown Editor",
    href: "https://rkatanic.github.io/markdown-editor",
    description:
      "Online text editor for quick notes. Based on markdown syntax, built for personal needs.",
    date: "Mar 16, 2020",
    category: "Personal",
  },
];

export default function Projects() {
  return (
    <Carousel className="mx-auto max-w-5xl ">
      <CarouselContent>
        {posts.map((post, i) => (
          <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
            <a
              target="_blank"
              rel="noopener referrer"
              href={post.href}
              className="flex cursor-pointer flex-col items-start justify-between gap-3 rounded-3xl border p-6 hover:border-indigo-600"
            >
              <div className="mb-3 flex h-40 w-full items-center justify-center rounded-3xl bg-zinc-50">
                <FiImage className="text-3xl text-zinc-300" />
              </div>
              <div className="flex items-center gap-3 text-xs">
                <time className="text-zinc-500">{post.date}</time>
                <div
                  className={twMerge(
                    classNames(
                      "inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700",
                      {
                        "bg-indigo-50 text-indigo-700":
                          post.category === "Client",
                      },
                    ),
                  )}
                >
                  {post.category}
                </div>
              </div>
              <h3 className="mt-1 text-lg font-semibold leading-6 text-zinc-900 group-hover:text-zinc-600">
                {post.title}
              </h3>
              <p className="line-clamp-3 text-sm leading-6 text-zinc-600">
                {post.description}
              </p>
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
