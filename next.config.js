/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DATABASE: process.env.DATABASE,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "media.istockphoto.com",
      "wallpapercrafter.com",
      "www.apple.com",
      "s3.amazonaws.com",
      "encrypted-tbn0.gstatic.com",
      "thatsisterimages.s3.amazonaws.com",
      "www.simon-kucher.com",
    ],
  },
};

module.exports = nextConfig;
