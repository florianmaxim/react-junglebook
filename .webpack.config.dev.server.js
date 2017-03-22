const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./.webpack.config');

const path = require('path');

const WebpackDevServerConfig = {
  contentBase: path.join(__dirname, './source'),
  historyApiFallback: { disableDotRule: false }, // Need historyApiFallback to be able to refresh on dynamic route
  stats: { colors: true },
};

const compiler = webpack(webpackConfig(process.env.NODE_ENV));

const server = new WebpackDevServer(compiler, WebpackDevServerConfig);

server.listen(8080, 'localhost');
