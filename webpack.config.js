const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = (env, argv) => {
  const { mode } = argv

  const devPlugins = mode === 'development'
    ? [new webpack.HotModuleReplacementPlugin()]
    : []

  const devEntries = mode === 'development'
  ? ['webpack-hot-middleware/client?http://localhost:8000']
  : []

  return {
    mode,
    entry: [
      './client',
      ...devEntries
    ],
    target: ["web", "es6"],
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    output: {
      clean: true,
      path: path.resolve(__dirname, 'build/dist'),
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', 'postcss-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: 'index.html'
      }),
      ...devPlugins
    ]
  }
}