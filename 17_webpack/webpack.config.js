const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const htmlPlugin = require('html-webpack-plugin');
const babel = require('./wp/babel');
const sass = require('./wp/sass');
const css = require('./wp/css');
const extractCSS = require('./wp/css.extract');
const image = require('./wp/image');
const htmlLoader = require('./wp/htmlLoader');
const devServer = require('./wp/devserver');
const uglifyJS = require('./wp/uglifyjs');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');

const common = merge([{
  entry: {
    index: APP_DIR + '/js/App.jsx',
    form: APP_DIR +'/js/form.js'
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new htmlPlugin({
      filename: 'index.html',
      template: APP_DIR + '/index.html',
      chunks: ['index', 'common'],
      assets: {
        style: "./scss/index.scss"
      }
    }),
    new htmlPlugin({
      filename: 'form.html',
      template: APP_DIR + '/form.html',
      chunks: ['form', 'common'],
      assets: {
        style: "./scss/form.scss",
        img: "./images"
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    })
  ]
},
babel(APP_DIR),
htmlLoader(),
extractCSS(APP_DIR),
image()
]);

module.exports = (env) => {
  if (env === 'production'){
        return merge([
            common,
            uglifyJS()
        ]);
    }
    if (env === 'development'){
        return merge([
            common,
            devServer(),
            {
              devtool: 'inline-source-map'
            }
        ]);
    }
};
