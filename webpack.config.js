const path = require('path');
const webpack = require('webpack');

module.exports = (env, options = {}) => {
  const config = {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
      filename: '[name].bundle.js',
      libraryTarget: 'umd',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    }
  };


  if (options.mode === 'development') {
    config.watch = true;
    config.devtool = 'inline-source-map';
  }

  return config;
};

