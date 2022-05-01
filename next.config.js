const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins = config.plugins || [];

    config.optimization.providedExports = true;

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './src')
    };

    return config;
  }
};

module.exports = nextConfig;
