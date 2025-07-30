import createMDX from "@next/mdx";

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
