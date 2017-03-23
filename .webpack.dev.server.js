const path = require('path');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./.webpack.config');

const WebpackDevServerConfig = {
  hot:true,
  inline:true,
  contentBase: path.join(__dirname, './built'),
  historyApiFallback: { disableDotRule: true }, // Need historyApiFallback to be able to refresh on dynamic route
  stats: { colors: true }
};

const server = new WebpackDevServer(webpack(webpackConfig), WebpackDevServerConfig);

server.listen(8080, 'localhost');
