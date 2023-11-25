import { serialize } from "next-mdx-remote/serialize";
import fs from "fs/promises";
import path from "path";
import Markdown from "@/components/Markdown";

const Home = ({ mdxSource }: any): JSX.Element => (
  <div>
    <h2 className="mb-6 text-4xl font-bold">Hey, I{"'"}m Radivoje Katanic.</h2>
    <div>
      <div className="grid gap-4">
        <div className="relative flex justify-center rounded-2xl bg-neutral-200">
          <img className="h-autox h-96 rounded-2xl" src="/me.png" alt="" />
          <div className="absolute bottom-4 right-4 rounded-full bg-white p-1 px-3 text-xs font-medium shadow-sm">
            2022, Doboj BA
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <div className="h-20 overflow-hidden rounded-xl border-2 border-blue-300 bg-neutral-200">
            <img className="h-20 max-w-full" src="/me.png" alt="" />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-xl"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-20 max-w-full rounded-xl"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-20 max-w-full rounded-xl"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-20 max-w-full rounded-xl"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <Markdown mdxSource={mdxSource} />
  </div>
);

export default Home;

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "__projects/notes-vault.mdx");

  try {
    const mdxText = await fs.readFile(filePath, "utf-8");
    const mdxSource = await serialize(mdxText);

    return {
      props: {
        mdxSource,
      },
    };
  } catch (error) {
    console.error("Error reading MDX file:", error);
    return {
      notFound: true,
    };
  }
}
