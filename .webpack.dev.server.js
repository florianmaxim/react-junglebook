const path = require('path');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./.webpack.config');

const WebpackDevServerConfig = {
  contentBase: '/built/',

  hotOnly: true,

  stats: {
    colors: true
  }
};

const server = new WebpackDevServer(webpack(webpackConfig), WebpackDevServerConfig);

server.listen(8080, 'localhost');
