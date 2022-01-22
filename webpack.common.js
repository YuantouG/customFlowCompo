/* global require module __dirname */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugins = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    main: './src/main.js',
  },
  output: {
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[name].chunk.[hash].js',
    path: path.resolve(__dirname, 'dist/'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          // {
          // 	loader: "eslint-loader",
          // 	options: {
          // 		exclude: /node_modules/
          // 	}
          // }
        ],
      },
      {
        test: /\.(le|c)ss$/i,
        use: [
          'style-loader',
          'vue-style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')],
            },
          },
          'less-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            outputPath: 'imgs/',
            limit: 4 * 1024,
          },
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        exclude: [path.resolve(__dirname, '/assets/svg')],
        use: {
          loader: 'url-loader',
          options: {
            outputPath: 'fonts/',
            limit: 10 * 1024,
          },
        },
      },
      {
        test: /\.vue$/i,
        use: 'vue-loader',
      },
      {
        test: /\.svg$/,
        include: [path.resolve(__dirname, '/assets/svg')],
        loader:
          'svg-sprite?' +
          JSON.stringify({
            name: '[name]',
            prefixize: true,
          }),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugins({
      template: path.resolve(__dirname, 'index.html'),
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    // 模块打包
    new webpack.HashedModuleIdsPlugin(),
    // css分离
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[name].chunk.[contenthash].css',
    }),
  ],
  optimization: {
    runtimeChunk: {
      name: 'runtime',
    },
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendors',
        },
      },
    },
  },
  resolve: {
    alias: {
      vue: path.resolve(__dirname, 'node_modules/vue/dist/vue.esm'),
      '@components': path.resolve(__dirname, 'src/component'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@util': path.resolve(__dirname, 'src/util'),
    },
    extensions: ['.js'],
  },
}
