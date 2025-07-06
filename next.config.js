/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  env: {
    SITE_URL: process.env.SITE_URL || 'https://www.michaelyanghang.com',
  },
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  productionBrowserSourceMaps: process.env.NODE_ENV === 'development',
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  swcMinify: true,
};

module.exports = nextConfig;
