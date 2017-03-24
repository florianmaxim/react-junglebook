const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Autoprefixer = require('autoprefixer');

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

			new HtmlWebpackPlugin({
	      template: path.join(__dirname, './source/index.html'),
	      filename: './build/index.html',
	      inject: 'body',
	    }),


      new webpack.HotModuleReplacementPlugin(),

      new webpack.NamedModulesPlugin()

    ]

};
