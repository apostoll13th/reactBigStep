import { buildPlugins } from "./buildPlugins";
import { buildResolve } from "./buildResolve";
import { BuildOptions } from "./types/config";
import webpack from "webpack"
import { buildLoaders } from "./buildLoaders";


export const buildWebpackConfig = (options:BuildOptions):webpack.Configuration => {
    const { paths, mode } = options

  return {
  mode: mode,
  entry: paths.entry,
  module: {
    rules: buildLoaders() 
    },
  resolve: buildResolve() ,
  output: {
    filename: "bundle.js",
    path: paths.build,
    clean: true
  },
  plugins: buildPlugins(paths.html) 
};

}
