const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = env => {

  const ifProd = plugin =>  env.prod ? plugin : undefined;
  const removeEmpty = array => array.filter(p => !!p);

  return {

    entry: {
      app: path.join(__dirname, './source'),
      vendor: ['react', 'react-dom', 'react-router'],
    },

    output: {
      filename: '[name].[hash].js',
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
        {
          test: /\.(scss|css)$/,
          loaders:
            [
              'style-loader',
              'css-loader?minimize&-autoprefixer',
              'postcss-loader',
              'sass-loader'
            ]
        },
      ],
    },

    plugins: removeEmpty([
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
        filename: '[name].[hash].js',
      }),

      new HtmlWebpackPlugin({
        template: path.join(__dirname, './source/index.html'),
        filename: 'index.html',
        inject: 'body',
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: env.prod,
        debug: env.dev,
        options: {
          context: __dirname,
          postcss: [Autoprefixer({ browsers: ['last 3 versions'] })],
        },
      }),

      ifProd(new ExtractTextPlugin({
        filename: '[name].[hash].css',
      })),

      ifProd(new webpack.optimize.UglifyJsPlugin({
        compress: {
          'screw_ie8': true,
          'warnings': false,
          'unused': true,
          'dead_code': true,
        },
        output: {
          comments: false,
        },
        sourceMap: false,
      })),
    ]),
  };
};
