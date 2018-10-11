const path = require('path')
const { CheckerPlugin } = require('awesome-typescript-loader')
module.exports = {
  mode: 'development',
  // 入口文件设置
  entry: {
    index: ['./src/index.tsx'], // 入口文件，若不配置将自动查找src目录下的index.js文件
  },
  output: {
    filename: 'js/[name].bundle.js', //打包文件输出文件名，[name]表示入口文件js名，默认为main.js
    path: path.resolve(__dirname, 'build/dist/'), // 打包文件输出路径,默认为项目文件夹/dist
  },
  resolve: {
    extensions: ['.js', 'jsx','ts','tsx'], // 作用:这里配置过后缀名的文件在引入时不需要加后缀名
  },
  devtool: 'cheap-module-eval-source-map', // 
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CheckerPlugin()
]
}