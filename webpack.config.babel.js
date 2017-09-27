import path from 'path'
import webpack from 'webpack'
import nodeExternals from 'webpack-node-externals'
import NodemonPlugin from 'nodemon-webpack-plugin'

export default {
  entry: ['./src/server'],
  target: 'node',
  externals: [nodeExternals()],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.join(__dirname, 'src')]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  plugins: [
    new NodemonPlugin({ ignore: ['./dist'] }),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js'
  }
}
