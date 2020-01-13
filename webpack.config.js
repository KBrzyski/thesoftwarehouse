const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  context: path.resolve(__dirname, 'src'),

  entry: {
    app: './index.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './assets/js/[name].bundle.js'
  },

  module: {
    rules: [

      {
        test: /\.js$/,
        include: /src/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './assets/media/'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }

    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({template: 'index.html'})
  ],

  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    compress: true,
    port: 2000,
    stats: 'errors-only',
    open: true
  },

  devtool: 'inline-source-map'

};