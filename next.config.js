/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
      },
    ],
  },
  swcMinify: true,
  webpack: (config) => {
    config.cache = false;
    config.optimization.minimize = true;
    config.optimization.splitChunks = {
      chunks: 'all',
      minSize: 20000,
      maxSize: 70000,
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    };
    return config;
  },
};

module.exports = nextConfig;