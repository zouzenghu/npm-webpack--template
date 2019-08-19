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
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: path.join(process.cwd(), "src"),
      use: [{
        loader: "babel-loader"
      }]
    }]
  },
  splitChunks: {
    chunks: 'all',
    minSize: 30000,
    maxSize: 0,
    minChunks: 2,
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
  }
}