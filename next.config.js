/** @type {import('next').NextConfig} */
const nextConfig = {
  locales: ['en-US'],
  defaultLocale: 'en-US',
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['js']
}
env: {
  REPLICATE_API_TOKEN: "r8_GEHXOK7RKHL0bEcqFeYu7vZVJyxXzhX36JODw"
}
module.exports = nextConfig
