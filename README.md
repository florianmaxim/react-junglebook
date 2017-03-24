# The React Junglebook 🙈 🌴

### (The Absolute Most Simple Boilerplates For The React Jungle)

## 🍊 Plate 3: Tangerine

Now it gets even better:

Handle the view (essential).
Write modern (beautiful).
Pack smart (handy).
Serve directly (skillful).
Develop live (smart).
Structure By Routes (fast). Split Code (faster).

![babel](https://img.shields.io/badge/Transpile-Babel-red.svg)
![react](https://img.shields.io/badge/View-React-green.svg)
![webpack](https://img.shields.io/badge/Pack-Webpack-blue.svg)
![serve](https://img.shields.io/badge/Serve-WebpackDevServer-orange.svg)

```script
git clone https://github.com/cheesyeyes/react-junglebook.git -b 3 . && npm install && npm start
```

![online](https://img.shields.io/badge/Babel-ES6-red.svg)
![online](https://img.shields.io/badge/React-ROUTES-green.svg)
![online](https://img.shields.io/badge/Webpack-HMR-blue.svg)
![online](https://img.shields.io/badge/Webpack-CHUNKS-blue.svg)

## Scripts
The following scripts are served with this plate:

```
"develop:cli": "NODE_ENV=production webpack-dev-server --hot --inline --history-api-fallback --progress --port 8080 --config .webpack.config.js",
"develop:api": "NODE_ENV=production node server.webpack.dev.js",
"develop": "npm run develop:api",

"build": "NODE_ENV=production && webpack --config .webpack.config.js --progress",
"start": "npm run build && NODE_ENV=production node server.js"
```
