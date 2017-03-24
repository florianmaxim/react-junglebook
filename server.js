require('babel-core/register')({ presets: ['latest', 'react'] })

const DEFAULT = {
  _NAME: '[Server]',
  _VERSION: '0.0.1',
  _VERSION_NAME: 'Tangerine 🍊',
  _URL: '0.0.0.0',
  _PORT: 8080
}

const http           = require('http');
const path           = require('path');
const fs             = require('fs');

const express        = require('express');
const fallback       = require('express-history-api-fallback')

const app = express();

const root = __dirname + '/build';

app.server = http.createServer(app);

app.use(express.static(root));
app.use(fallback('index.html', { root: root }));

app.server.listen(DEFAULT._PORT, DEFAULT._URL, () => {
  console.log(`${DEFAULT._NAME} ${DEFAULT._VERSION} ( ${DEFAULT._VERSION_NAME} ): Listening on port ${DEFAULT._PORT}`);
});
