const minCssExtractPlugin = require("mini-css-extract-plugin");
const copyWePackPlugin = require('copy-webpack-plugin');
const createHtml = require('../buildConfig/utils/template');
const config = require('../buildConfig/config');
const entry = require('../buildConfig/entry').entry;
module.exports = {
  entry,
  plugins: [
    new minCssExtractPlugin(Object.assign({
      filename: './css/[name].css',
      chunkFilename: '/css/[id].css'
    }, config.css)),
    // new copyWePackPlugin([Object.assign({
    //   from: 'static',
    //   to: 'dist/static',
    //   ignore: ['.*']
    // }, config.static)])
  ].concat(createHtml),
  module: {
    rules: [{
        test: /\.(sc|sa|c)ss$/,
        exclude: /node_modules/,
        use: [{
            loader: minCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          "sass-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: "url-loader",
          options: Object.assign({
            limit: 2048,
            fallback: "file-loader",
            outputPath: './image',
            name: '[name].[ext]'
          }, config.image)
        }]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: Object.assign({
            attrs: ["img:src", "img:data-src", "audio:src"],
            minimize: true
          }, config.html)
        }
      },
      {
        test: /\.(woff|woff2|eot|otf)$/,
        use: {
          loader: 'file-loader',
          options: Object.assign({
            outputPath: './font',
            name: "[name].[ext]"
          }, config.font)
        },
      }
    ]
  },

}