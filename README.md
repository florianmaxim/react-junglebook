# React Boilerplates (How To Cook In The Jungle)

## 🍊 3: Tangerine

### Scripts

```
"test": "echo \"Error: no test specified\" && exit 1",

"clean": "rm -rf build",
"build": "NODE_ENV=production && webpack --config .webpack.config.js --progress --env.prod",

"start:cli": "NODE_ENV=production webpack-dev-server --hot --inline --history-api-fallback --progress --port 8080 --config .webpack.config.js --env.prod",
"start:api": "NODE_ENV=production node .webpack.dev.server.js  --hot --inline --env.prod",

"start": "start:develop:api"
```

start:cli & start:api should lead to the the same. but they do not so far. hmr does seem to work via api..
