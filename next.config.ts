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
  },
  
  // Environment variables
  env: {
    SITE_URL: process.env.SITE_URL || 'https://www.michaelyanghang.com',
  },
  
  // Enable webpack optimizations
  webpack: (config, { isServer }) => {
    // Add custom webpack configurations if needed
    return config;
  },
};

export default nextConfig;
