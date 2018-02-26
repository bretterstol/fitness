const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');


module.exports = {
    entry: "./js/main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options:{
                        presets:["react", "env"]
                    }
                }
            }
        ]
    },
    resolve: {
        modules:[ path.join(__dirname, "js"), "node_modules"],
        extensions: ['.js', 'jsx']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            test: /\.jsx?$/,
            sourceMap: true,
            uglifyOptions: {
                compress: true
            }
        }),
        new LiveReloadPlugin()
    ]
};
