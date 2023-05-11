/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    lastModifiedDate: new Date().toISOString(),
  },
};

module.exports = nextConfig;
