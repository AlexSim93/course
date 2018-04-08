const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (path) => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: path,
        use: ExtractTextPlugin.extract({
          use: [
            "css-loader",
            "sass-loader"
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.css$/,
        include: path,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].[hash].css',
      allChunks: true
    })
  ]
});
