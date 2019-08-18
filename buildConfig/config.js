module.exports = {
  css: {
    filename: './css/[name].css',
    chunkFilename: '/css/[id].css'
  },
  static: {
    from: 'static',
    to: 'dist/static',
    ignore: ['.*']
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
}