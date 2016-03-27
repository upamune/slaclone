var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './components/Chat.js',
  output: { 
    path: __dirname,
    filename: 'app.js' 
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: [
    '',
    'js',
    'jsx'
  ]
};
