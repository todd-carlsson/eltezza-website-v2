/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res-console.cloudinary.com",
        port: '',
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: '',
      },
      {
        protocol: "https",
        hostname: "d5st4psppqx3d.cloudfront.net",
        port: '',
      },
    ],
  },
};

export default nextConfig;
