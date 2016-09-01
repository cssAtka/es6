/**
 * Inspired by https://github.com/topheman/react-es6-redux
 */

const path = require('path');
const webpack = require('webpack');
const plugins = [];

/** environment setup */

const BUILD_DIR = './build';
const DIST_DIR = process.env.DIST_DIR || 'dist';// relative to BUILD_DIR
const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : 'development';
const DEVTOOLS = process.env.DEVTOOLS ? JSON.parse(process.env.DEVTOOLS) : null;// can be useful in case you have web devtools (null by default to differentiate from true or false)


/** webpack config */

const config = {
  entry: {
    'bundle': './class.js',
  },
  output: {
    publicPath: '',
    filename: `[name].js`,
    path: BUILD_DIR + '/' + DIST_DIR
  },
  cache: true,
  debug: NODE_ENV === 'production' ? false : true,
  devtool: 'sourcemap',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};

module.exports = config;
