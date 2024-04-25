/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "api.ts", "api.tsx", ".tsx"],

  basePath: "/istoEpousada",
  reactStrictMode: false,

  images: {
    domains: [""],
  },

  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
