# The React Junglebook 🙈 🌴

### (The Absolute Most Simple Boilerplates For The React Jungle)

## 🍋 Plate 4: Lemon

This is where all the good shit comes together:

Write modern (beautiful). Develop live (fast). Render On The Server (faster). Split Code By Routes (smart).

```script
git clone https://github.com/cheesyeyes/react-junglebook.git -b 4 . && npm install && npm start
```
![online](https://img.shields.io/badge/Babel-ES6-red.svg)
![online](https://img.shields.io/badge/React-SSR-blue.svg)
![online](https://img.shields.io/badge/React-ROUTES-blue.svg)
![online](https://img.shields.io/badge/Webpack-HMR-green.svg)
![online](https://img.shields.io/badge/Webpack-CHUNKS-green.svg)

And now you're ready for the jungle!
Good luck. 🙉 🎋

## Scripts
The following scripts are served with this plate:

```

"clean": "rm -rf build",

"develop:cli": "NODE_ENV=development webpack-dev-server --hot --history-api-fallback --port 8080 --config .webpack.config.js",
"develop:api": "NODE_ENV=development node server.webpack.dev.js",
"develop": "npm run develop:api",

"build": "npm run clean && webpack --config .webpack.config.js --progress -p --env production",
"start": "npm run build && NODE_ENV=production node server.js"

```
