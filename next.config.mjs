/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
    ],
  },
};

export default nextConfig;
