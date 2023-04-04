import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";
import {BuildCssLoader} from "./loaders/cssLoader";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const cssLoader = BuildCssLoader(isDev)

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };
  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };
  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }

  return [
    fileLoader, 
    svgLoader, 
    babelLoader,
    typescriptLoader,
    cssLoader];
}

