const path = require('path');

module.exports = {

	entry: './source/App.js',
	output: {path: __dirname, filename: './built/bundle.js'},

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
	
			
