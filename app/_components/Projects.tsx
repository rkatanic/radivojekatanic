import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import { Carousel, CarouselContent, CarouselItem } from "./Carousel";

const posts = [
  {
    title: "Way To Fly",
    href: "https://www.waytofly.com/en",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Sep 2020",
    category: "Client",
  },
  {
    title: "Color Scale",
    href: "https://color-scale.vercel.app/",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    category: "Personal",
  },
  {
    title: "Markdown Editor",
    href: "https://rkatanic.github.io/markdown-editor",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
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
              className="flex cursor-pointer flex-col items-start justify-between rounded-2xl border p-6 hover:border-indigo-600"
            >
              <img
                className="mb-4 h-40 rounded-xl"
                src="https://tailwindui.com/img/category-thumbnails/marketing/content-sections.png"
                alt="image"
              />
              <div className="flex items-center gap-x-4 text-xs">
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
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-zinc-900 group-hover:text-zinc-600">
                  <div>
                    <span className="absolute inset-0" />
                    {post.title}
                  </div>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-zinc-600">
                  {post.description}
                </p>
              </div>
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
