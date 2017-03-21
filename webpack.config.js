const path = require('path');

module.exports = {

	entry: './src/App.js',
	output: {path: __dirname, filename: './bui/bundle.js'},

	module: {
    	rules: [
				{
        		 test: /\.jsx?$/,
        		 use: ['babel-loader'],
        		 exclude: /node_modules/
      			}
    		   ]
  	},
};
	
			
