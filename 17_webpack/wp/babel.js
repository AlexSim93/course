module.exports = (paths) => ({module: {
  rules: [
    {
      test: /\.jsx?$/,
        include: paths,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["es2015", "react"],
          }
        }
    }
  ]
}
});
