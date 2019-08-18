const HtmlwebpackPlugin = require('html-webpack-plugin');
const entry = require('../entry')
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
module.exports = templatePluginsList