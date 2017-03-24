const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Autoprefixer = require('autoprefixer');

module.exports = {

	entry: './source/index.js',

	output: {path: __dirname, filename: './build/index.js'},


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
        {
          test: /\.(scss|css)$/,
          loaders:
            [
              'style-loader',
              'css-loader?minimize&-autoprefixer',
              'postcss-loader',
              'sass-loader'
            ]
        }
      ]
    },

		plugins: [
			new HtmlWebpackPlugin({
	      template: path.join(__dirname, './source/index.html'),
	      filename: 'index.html',
	      inject: 'body',
	    }),
		]
};
