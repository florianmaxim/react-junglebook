# The React Junglebook 🙈 🌴

### (The Absolute Most Simple Boilerplates For The React Jungle)

## 🍋 Plate 4: Lemon

This is where all the good shit comes together.

- React
- Webpack

- (Server(custom/webpack-dev)
- (Hot Module Replacement)
- (Server Side Rendering)
- (Code Splitting)
- (ES6:Babel)

And now you're ready for the jungle!
Good luck. 🙉 🎋

## Scripts
The following scripts are served with this plate:

```
"scripts": {
  "clean": "rm -rf build",

  "develop:cli": "NODE_ENV=development webpack-dev-server --hot --history-api-fallback --port 8080 --config .webpack.config.js",
  "develop:api": "NODE_ENV=development node server.webpack.dev.js",
  "develop": "npm run develop:api",

  "build": "npm run clean && webpack --config .webpack.config.js --progress -p --env production",
  "start": "npm run build && NODE_ENV=production node server.js"
}
```
