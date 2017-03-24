# The React Junglebook 🙈 🌴

### (The Absolute Most Simple Boilerplates For The React Jungle)

## 🍎 Plate 1: Apple

Baby steps:

Handle the view (essential). Write modern (beautiful). Pack smart (handy). Serve directly (skillful).

![babel](https://img.shields.io/badge/Transpile-Babel-red.svg)
![react](https://img.shields.io/badge/View-React-green.svg)
![webpack](https://img.shields.io/badge/Pack-Webpack-blue.svg)
![serve](https://img.shields.io/badge/Serve-WebpackDevServer-orange.svg)

```script
git clone https://github.com/cheesyeyes/react-junglebook.git -b 1 . && npm install && npm start
```

## Scripts
The following scripts are served with this plate:

```
"build": "webpack --config .webpack.config.js",
"start": "npm run build && open http://0.0.0.0:8080 && webpack-dev-server --content-base build/ --history-api-fallback --port 8080 --config .webpack.config.js"
```
