const path = require("path");
// `CheckerPlugin` is optional. Use it if you want async error reporting.
// We need this plugin to detect a `--watch` mode. It may be removed later
// after https://github.com/webpack/webpack/issues/3460 will be resolved.
const { CheckerPlugin } = require('awesome-typescript-loader')
module.exports = {
  mode: 'development',
  entry: {
    index: ["./src/index.tsx"], //入口文件，若不配置webpack4将自动查找src目录下的index.js文件
  },
  output: {
    filename: "js/[name].bundle.js", //输出文件名，[name]表示入口文件js名
    path: path.resolve(__dirname, 'build/dist/'), // 输出路径
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", "jsx"],
  },
  devtool:  'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  plugins: [
    new CheckerPlugin()
]
}
