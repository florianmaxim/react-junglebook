# React Boilerplates (How To Cook In The Jungle)

## Plate 4: React, Webpack, Server(custom/webpack-dev): (Hot Module Replacement) - (Server Side Rendering) - (Code Splitting) - (ES6:Babel)

## Scripts
The following scripts are served with this plate:

```
"scripts": {
  "clean": "rm -rf build",

  "develop:api": "NODE_ENV=development node .webpack.dev.server.js",
  "develop:cli": "NODE_ENV=development webpack-dev-server --hot --history-api-fallback --port 8080 --config .webpack.config.js",
  "develop": "npm run develop:api",

  "build": "npm run clean && webpack --config .webpack.config.js --progress -p --env production",
  "start": "npm run build && NODE_ENV=production node server.js"
}
```

This is where all the good shit comes together:

Production:
- Server Side Rendering
- Code Splitting (By Routes)

Development:
- (Hot Modules Replacement)
- (React Hot Loading)

And now you're ready for the jungle!
Good luck.
