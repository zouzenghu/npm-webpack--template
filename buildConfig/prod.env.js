const path = require('path');
module.exports = {
  output: {
    filename: './js/[name].[contenthash:6].js',
    path: path.join(process.cwd(), 'dist'),
    chunkFilename: "./class/[name].js"
  },
  css: {
    filename: './css/[name].[contenthash:6].css',
    chunkFilename: '/css/[id].css'
  },
  image: {
    outputPath: './image',
    name: '[name].[contenthash:6].[ext]',
    limit: '2048'
  },
  html: {
    attrs: ["img:src", "img:data-src", "audio:src"],
    minimize: true
  },
  font: {
    outputPath: './font',
    name: "[name].[contenthash:6].[ext]"
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