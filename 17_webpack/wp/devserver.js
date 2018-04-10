module.exports = () => ({
  devServer: {
    stats: 'errors-only',
    port: 9000,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
});
