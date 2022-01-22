/* global require module __dirname */

const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");
const { HotModuleReplacementPlugin } = require("webpack");

const devConfig = {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: "./dist",
    open: true,
    port: 8889,
    hot: true,
    hotOnly: true,
    proxy: {
      //本地环境ip
      // "*": "http://127.0.0.1:9999",
      //测试环境ip
       "*": "http://39.103.176.165:9999",
      //春哥ip
      // "*": "http://172.20.10.213:9999",
      //陈飞ip 新版本
      // "*": "http://172.20.10.245:9999/"
    },
  },
  plugins: [new HotModuleReplacementPlugin()],
  optimization: {
    usedExports: true,
  },
};

module.exports = merge(commonConfig, devConfig);
