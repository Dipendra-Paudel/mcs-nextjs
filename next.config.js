/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASEURL: process.env.BASEURL,
    FRONTEND_TOKEN: process.env.FRONTEND_TOKEN,
  },
};

module.exports = nextConfig;
