const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = (env, argv) => {
  const { mode } = argv
  return {
    mode,
    entry: [
      './client'
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    output: {
      clean: true,
      path: path.resolve(__dirname, 'build/dist')
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: 'index.html'
      })
    ]
  }
}