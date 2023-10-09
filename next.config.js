/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
      domains: ['storegg-api-admin.herokuapp.com']
  }
}

module.exports = nextConfig
