import { BuildOptions } from "./types/config";
import {Configuration as DevConfig} from "webpack-dev-server"



export const buildDevServer = (options:BuildOptions):DevConfig => {
  return {
    port: options.port,
    open: true,
    historyApiFallback:true,
    static: '../../build/'
  }
} 
