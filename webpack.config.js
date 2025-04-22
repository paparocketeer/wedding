const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]',
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 20000,
      maxSize: 244000,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      assets: path.resolve(__dirname, 'assets'),
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[name].[contenthash].js",
    clean: true,
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.ejs",
    }),
    new MiniCssExtractPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CompressionPlugin({
      algorithm: "gzip",
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new CopyWebpackPlugin({
      patterns: [
        { 
          from: "assets/img", 
          to: "img" 
        }
      ],
    }),
  ],
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, 'dist'),
      publicPath: '/',
    },
  },
};
