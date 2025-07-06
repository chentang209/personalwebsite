/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静态导出配置
  output: 'export',
  
  // 基本路径配置，如果您的网站不是在根目录下，请设置此项
  // 例如：如果部署在 example.com/mysite，则设置为 '/mysite'
  basePath: '',
  
  // 资源路径前缀，用于处理静态资源引用
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  
  // 图片配置
  images: {
    // 禁用图片优化，因为静态导出不支持 next/image 优化
    unoptimized: true,
    // 允许加载的图片域名
    domains: ['images.unsplash.com'],
  },
  
  // 环境变量
  env: {
    // 网站基础URL，根据实际部署地址修改
    SITE_URL: process.env.SITE_URL || 'http://your-server-ip',
    // 是否为生产环境
    IS_PRODUCTION: process.env.NODE_ENV === 'production',
  },
  
  // 生成目录末尾添加斜杠
  trailingSlash: true,
  
  // TypeScript 配置
  typescript: {
    // 构建时忽略类型错误
    ignoreBuildErrors: true,
  },
  
  // ESLint 配置
  eslint: {
    // 构建时忽略ESLint错误
    ignoreDuringBuilds: true,
  },
  
  // 生产环境不生成source map以减小体积
  productionBrowserSourceMaps: false,
  
  // 启用的页面扩展名
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // 使用SWC压缩
  swcMinify: true,
};

module.exports = nextConfig;
