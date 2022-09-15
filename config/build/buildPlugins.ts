import HtmlWebpackPlugin from "html-webpack-plugin"
import webpack, { WebpackPluginInstance } from "webpack"
import path from "path"
import { BuildPaths } from "./types/config"




export const buildPlugins = ({paths}:any):WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template:paths.html,
    }),
    new webpack.ProgressPlugin(),
  ]
}
