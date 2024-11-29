/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { dev, isServer }) {
    if (!dev && !isServer) {
      // Next.js runs PostCSS automatically, but in some cases, you may need custom settings.
    }
    return config;
  },
};

export default nextConfig;
