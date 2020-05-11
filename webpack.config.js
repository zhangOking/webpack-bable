const path = require('path');

module.exports = {
  entry: ["@babel/polyfill", "./src/7j.js"],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader'
      },
      exclude: '/node_modules/'
    }]
  }
};