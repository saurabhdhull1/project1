module.exports = {
  webpackDevServer: (config) => {
    config.hot = true;
    config.watchOptions.poll = 300;
    return config;
  },
};
