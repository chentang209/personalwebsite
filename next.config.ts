import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React Strict Mode for better development practices
  reactStrictMode: true,
  
  // Enable static exports for static site generation
  output: 'export',
  
  // Base path if your app is hosted in a subdirectory
  // basePath: '',
  
  // Configure images for static export
  images: {
    unoptimized: true, // Required for static export
    domains: ['images.unsplash.com'],
  },
  
  // Environment variables
  env: {
    SITE_URL: process.env.SITE_URL || 'https://www.michaelyanghang.com',
  },
  
  // Enable static HTML export
  trailingSlash: true,
  
  // Disable TypeScript type checking during build for faster builds
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Disable ESLint during build for faster builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Webpack configuration for better bundle optimization
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Don't include certain modules in the client bundle
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  
  // Enable source maps in development
  productionBrowserSourceMaps: process.env.NODE_ENV === 'development',
  
  // Configure page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // Enable SWC minification
  swcMinify: true,
};

export default nextConfig;
