# The React Junglebook 🙈 🌴

### (The Absolute Most Simple Boilerplates For The React Jungle)

## 🍈 Plate 2: Melon

Next level:

Handle the view (essential). Write modern (beautiful). Pack smart (handy). Serve directly (skillful). Develop live (smart).

![babel](https://img.shields.io/badge/Transpile-Babel-red.svg)
![react](https://img.shields.io/badge/View-React-green.svg)
![webpack](https://img.shields.io/badge/Pack-Webpack-blue.svg)
![serve](https://img.shields.io/badge/Serve-WebpackDevServer-orange.svg)

```script
git clone https://github.com/cheesyeyes/react-junglebook.git -b 2 . && npm install && npm start
```

![online](https://img.shields.io/badge/Babel-ES6-red.svg)
![online](https://img.shields.io/badge/Webpack-HMR-blue.svg)


## Scripts
The following scripts are served with this plate:

```
"build": "webpack --config .webpack.config.js",
"develop": "NODE_ENV=development webpack-dev-server --content-base ./build --history-api-fallback --port 8080 --config .webpack.config.dev.server.js",
"start": "npm run build && NODE_ENV=production webpack-dev-server --content-base build/ --history-api-fallback --port 8080 --config .webpack.config.js"
```
