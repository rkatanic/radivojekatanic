const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    lastModifiedDate: new Date().toISOString(),
  },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
};

module.exports = nextConfig;
