import path from "path";
import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildPaths, IEnv } from "./config/build/types/config";


export default (env:IEnv) => {

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
};
const mode = env.mode || "development";
const isDev = mode === "development";
const PORT = env.port || 3000

const config: webpack.Configuration = buildWebpackConfig({
  paths,
  mode: "production",
  isDev,
  port: PORT  
});
  return config
};
