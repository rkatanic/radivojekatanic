/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: () => {
    return [
      {
        source: "/",
        destination: "/about",
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    lastModifiedDate: new Date().toISOString(),
  },
};

module.exports = nextConfig;
