const path = require('path');
const MinCssExtractPlugin = require("mini-css-extract-plugin");
const CreateHtml = require('../buildConfig/utils/template');
const config = require('../buildConfig/config');
const entry = require('../buildConfig/entry').entry;
const webpack = require('webpack');
module.exports = {
  entry,
  plugins: [
    new MinCssExtractPlugin(Object.assign({
      filename: './css/[name].css',
      chunkFilename: '/css/[id].css'
    }, config.css)),


  ].concat(CreateHtml),
  module: {
    rules: [{
        test: /\.(sc|sa|c)ss$/,
        exclude: /node_modules/,
        use: [{
            loader: MinCssExtractPlugin.loader
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
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
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
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
}