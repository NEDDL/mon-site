/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  compiler: {
    styledComponents: true,
  },
  turbopack: {
    root: __dirname,
  },
}

module.exports = nextConfig
