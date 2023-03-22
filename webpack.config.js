const path = require("path");
const { merge } = require("webpack-merge");
const parts = require("./webpack.parts");

const commonConfig = merge([
  {
    entry: "./src/index.js",
  },
  {
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "bundle.js",
    },
  },
  parts.page(),
]);

const configs = {
  development: merge([]),
  production: {},
};

module.exports = (_, argv) => merge(commonConfig, configs[argv.mode], { mode: argv.mode });