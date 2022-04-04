module.exports = {
  //reactStrictMode: false,
  //distDir: 'build',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],   
    });
    return config;
  }
};