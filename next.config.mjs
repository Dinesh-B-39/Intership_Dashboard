/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    'ais-dev-r6am7q2ineukw22cm4dntg-946795076953.asia-southeast1.run.app',
    'ais-pre-r6am7q2ineukw22cm4dntg-946795076953.asia-southeast1.run.app',
    '*.run.app',
    '*.asia-southeast1.run.app',
    'localhost:3000',
    '127.0.0.1:3000',
  ],
};

export default nextConfig;
