import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, { WebpackError } from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";


export function buildPlugins({
  paths,
  isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugin = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),

  ];

  if (isDev) {
    plugin.push(new ReactRefreshWebpackPlugin());
    plugin.push(new webpack.HotModuleReplacementPlugin());
    plugin.push(new BundleAnalyzerPlugin({
      openAnalyzer: false
    }))
  }

  return plugin;
}
