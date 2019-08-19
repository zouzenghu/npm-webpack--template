const path = require('path')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const common = require('./webpack.common')
const merge = require('webpack-merge')
const prod = require('../buildConfig/prod.env')
module.exports = merge(common, {
  mode: 'production',
  output: prod.output,
  plugins: [new CleanWebpackPlugin()],
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