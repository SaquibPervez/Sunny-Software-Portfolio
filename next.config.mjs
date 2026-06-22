/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  
  reactCompiler: true,
};

export default nextConfig;