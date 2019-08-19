const path = require('path');
module.exports = {
  output: {
    filename: './js/[name].js',
    path: path.join(process.cwd(), 'dist'),
    chunkFilename: "./class/[name].js"
  },
  css: {
    filename: './css/[name].css',
    chunkFilename: '/css/[id].css'
  },
  image: {
    outputPath: './image',
    name: '[name].[ext]',
    limit: '2048'
  },
  html: {
    attrs: ["img:src", "img:data-src", "audio:src"],
    minimize: true
  },
  font: {
    outputPath: './font',
    name: "[name].[ext]"
  },
  devServer: {
    port: '8080',
    hot: true,
    host: '127.0.0.1',
    open: true,
    contentBase: path.join(process.cwd(), 'dist')
  },
  devtool: 'cheap-module-eval-source-map'
}