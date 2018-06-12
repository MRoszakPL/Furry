const webpack = require('webpack');
const path = require('path');

module.exports = {
  // set this to your entry point
  entry: "./src/js/app.js",

  // change this to your output path
  output: {
    path: path.resolve(__dirname,'src/js'),
    filename: "out.js",

  },

  // create a map file for debugging
    devtool: "sourcemap",
    // configure the loaders
  module: {
      rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
          use: [
              'babel-loader',
          ],
      }
    ]
  },

  ///////////  uncomment this for production ////////////////
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     compress: {
  //       warnings: false
  //     }
  //   }),
  //   new webpack.DefinePlugin({
  //     'process.env': {'NODE_ENV': JSON.stringify('production')}
  //   })
  // ],////////////////////////////////////////////////////////

  watch: false // change this to true to keep webpack running
};

