const path = require('path');

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	entry: './source/index.js',
	output: {path: __dirname, filename: './build/index.js'},

	module: {
	    loaders: [
	      {
	        test: /.jsx?$/,
	        loader: 'babel-loader',
	        exclude: /node_modules/,
	        query: {
	          presets: ['es2015', 'react']
	        }
	      }
	    ]
  	},
		plugins: [
			new HtmlWebpackPlugin({
	      template: path.join(__dirname, './source/index.html'),
	      filename: './build/index.html',
	      inject: 'body',
	    }),
		]
};
