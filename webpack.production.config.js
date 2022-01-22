/* global require module __dirname */
const commonConfig = require("./webpack.common");
const merge = require("webpack-merge");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const prodConfig = {
	mode: "production",
	devtool: "cheap-module-source-map",
	plugins: [
		// 启用css压缩
		new OptimizeCSSAssetsPlugin(),
	]
};

module.exports = merge(commonConfig, prodConfig);