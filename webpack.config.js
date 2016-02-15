module.exports = {
    entry: {
        javascript: "./src/index.js"
    },

    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
        publicPath: '/'
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
