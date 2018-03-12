const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        polyfills: './src/polyfill.ts',
        main: './src/app.ts',
        vendor: ['jquery']
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                loader: ["style-loader", "css-loader"]
            },
            {
                test: /\.ts$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.ts$/,
                enforce: "pre",
                loader: 'tslint-loader'
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.scss$/,
                loader: ["style-loader","css-loader?sourceMap","sass-loader?sourceMap"]
            },
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject : "body"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ],
        devtool: "source-map",
        devServer: {
        historyApiFallback: true
    }
};