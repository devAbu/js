const { dirname } = require("path");
const path = require("path");

module.exports = {
  /* Which files/directories to bundle */
  entry: path.resolve(__dirname, "app"),
  /* Where to save it/them, the name(s) */
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, "build"),
  },
  /* BABEL */
  module: {
    rules: [
      {
        /* Any js file */
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
};
