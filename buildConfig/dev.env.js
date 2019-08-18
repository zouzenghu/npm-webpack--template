const path = require('path');
module.exports = {
  output: {
    filename: './js/[name].js',
    path: path.join(process.cwd(), 'dist'),
    chunkFilename: "./class/[name].js"
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