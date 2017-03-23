const path = require('path');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./.webpack.config.dev.server');

const WebpackDevServerConfig = {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
};

const server = new WebpackDevServer(webpack(webpackConfig), WebpackDevServerConfig);

server.listen(8080, 'localhost', () => {
  console.log(`Listening on Port 8080`);
});
