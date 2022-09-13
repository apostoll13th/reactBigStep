import HtmlWebpackPlugin from "html-webpack-plugin"
import webpack, { WebpackPluginInstance } from "webpack"
import path from "path"




export const buildPlugins = (path:string):WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template:path,
    }),
    new webpack.ProgressPlugin(),
  ]
}
