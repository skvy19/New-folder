const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require("path")

module.exports = {
    entry: "./src/assets/js/app.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "./assets/js/bundle.js",
    },
    module: {
        rules: [
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            }
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/images'
                },
              },
            ],
          },
          {
            test: /.s?css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
          },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './assets/styles/[name].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
            filename: "./index.html"
        }),
        new CleanWebpackPlugin()
    ],
}
