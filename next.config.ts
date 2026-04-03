/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/Portfolio_Hriday" : "",
  assetPrefix: isProd ? "/Portfolio_Hriday/" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
