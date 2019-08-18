const path = require('path');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const prod = require('../buildConfig/prod.env');
module.exports = merge(common, {
  mode: "production",
  output: prod.output,
  optimization: {
    usedExports: true
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
})