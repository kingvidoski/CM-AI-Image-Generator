/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["links.papareact.com", "newimagegenerator87e39d.blob.core.windows.net"],
  },
}

module.exports = nextConfig
