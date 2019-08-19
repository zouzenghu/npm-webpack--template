const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const dev = require('../buildConfig/dev.env');
module.exports = merge(common('dev'), {
  mode: 'development',
  devtool: dev.devtool,
  devServer: Object.assign({
    port: '8080',
    hot: true,
    host: '127.0.0.1',
    open: true,
    contentBase: path.join(process.cwd(), 'dist')
  }, dev.devServer),
  output: dev.output
})