const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
module.exports = merge(common, {
  devServer: {
    port: '8080',
    hot: true,
    host: '127.0.0.1',
    open: true,
    contentBase: path.join(process.cwd(), 'dist')
  }
})