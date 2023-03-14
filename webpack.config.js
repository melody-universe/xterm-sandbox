const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

/** @type {import("webpack-dev-server").WebpackConfiguration} */
const config = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    filename: "main.js",
    path: resolve(__dirname, "dist"),
  },
  plugins: [new HtmlWebpackPlugin({ title: "Wheat Hoarder" })],
};
module.exports = config;
