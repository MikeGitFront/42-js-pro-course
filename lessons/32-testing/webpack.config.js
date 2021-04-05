const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/browser.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
    ]
  },
  resolve: { extensions: ['*', '.js'] },
  output: {
    path: path.resolve(__dirname, ''),
    filename: './dist/index.js',
  },
}
