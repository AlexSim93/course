module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|svg)$/i,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[hash].[ext]'
        }
      }
    ]
  }
});
