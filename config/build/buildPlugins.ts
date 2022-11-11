import HtmlWebpackPlugin from "html-webpack-plugin"
import webpack, { WebpackPluginInstance } from "webpack"
import path from "path"
import { BuildPaths } from "./types/config"

import MiniCssExtractPlugin from "mini-css-extract-plugin"



export const buildPlugins = ({paths}):WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template:paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:5].css",
      chunkFilename: 'css/[name].[contenthash:5].css'
    })
  ]
}
