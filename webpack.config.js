module.exports = {
  entry: {
    javascript: "./src/index.js"
  },

  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
    publicPath: '/'
  },

  devServer: {
    lazy: true,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["react", "es2015", "stage-0"],
          cacheDirectory: true
        }
      }
    ]
  }
};
