const path = require('path');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const prod = require('../buildConfig/prod.env');
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = merge(common, {
  mode: 'production',
  output: prod.output,
  plugins: [new OptimizeCssAssetsWebpackPlugin({
    assetNameRegExp: /\.css$/g,
    cssProcessor: require('cssnano'),
    cssProcessorOptions: {
      safe: true,
      discardComments: {
        removeAll: true
      }
    },
    canPrint: true
  })],
  optimization: {
    usedExports: true,
    splitChunks: Object.assign({
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      automaticNameMaxLength: 30,
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }, prod.splitChunks)
  }
})