/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["icons8.com", "localhost", "res.cloudinary.com", "images.unsplash.com", "codechappie.github.io"],
  },
}

module.exports = nextConfig
