const path = require('path');
const webpack = require('webpack');
const entry = require('../buildConfig/entry')
module.exports = {
  mode: "production",
  entry: Object.assign({
    vendors: ['jquery', 'lodash']
  }, entry.DllEntry),
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.resolve(__dirname, '../dll/[name].manifest.json')
    })
  ],
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, '../dll'),
    library: '[name]'
  },
}