const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {

  entry: [
     'webpack-dev-server/client?http://0.0.0.0:8080',
     'webpack/hot/only-dev-server',
     './source/index'
   ],

    output: {
      filename: 'index.js',
      path: path.join(__dirname, './build/'),
    },

    module: {

      loaders: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            cacheDirectory: true,
          },
        },
      ],
    },

    plugins: [

      new webpack.HotModuleReplacementPlugin(),

      new webpack.NamedModulesPlugin()

    ]

};
