const HtmlwebpackPlugin = require('html-webpack-plugin')
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin")
const webpack = require("webpack")
const entry = require('../entry')
const path = require('path')
let templatePluginsList = []
entry.template.forEach(({
  filename,
  template,
  chunks
} = obj) => {
  templatePluginsList.push(new HtmlwebpackPlugin({
    filename,
    template,
    chunks
  }))
})
if (entry.DllEntry.vendors.join('') !== '') {
  templatePluginsList.push(
    new AddAssetHtmlPlugin([{
      filepath: require.resolve('../../dll/vendors.dll.js')
    }]),
    new webpack.DllReferencePlugin({
      manifest: path.join(process.cwd(), 'dll/vendors.manifest.json')
    })
  )
}
module.exports = templatePluginsList