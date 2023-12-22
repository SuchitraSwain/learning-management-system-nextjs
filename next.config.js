/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["utfs.io"],
  },
  resolve: {
    extensions: [".js", ".mjs"],
  },
};

module.exports = nextConfig;
