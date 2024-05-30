/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'asynchronousjavascriptor.github.io',
          },
        ],
      },
};

export default nextConfig;
