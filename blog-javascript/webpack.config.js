const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: [
    './src/app.js',
    './src/app.scss',
  ],
  output: {
    filename: 'app.js',
    path: `${__dirname}/dist`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
            process.env.NODE_ENV !== "production" ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
        ],
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader',
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "app.css"
    })
  ],
  devServer: {
    contentBase: './',
    https: false,
    host: 'localhost',
    port: 3000,
    historyApiFallback: true
  },
};