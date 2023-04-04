import webpack, {RuleSetRule} from "webpack";
import {BuildPaths} from "../build/types/config";
import path from "path";
import {BuildCssLoader} from "../build/loaders/cssLoader";

export default ({config}: {config: webpack.Configuration}) => {

  const paths : BuildPaths =  {
    html: "",
    src: path.join(__dirname, '..', '..', 'src'),
    build: '',
    entry: ""

  }


  config.resolve.modules.push(paths.src)
  config.resolve.extensions.push('.ts', '.tsx');

  config.module.rules.push(BuildCssLoader(true))

  config.module.rules = config.module.rules.map((rule : RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule
  })

  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  return config
}
