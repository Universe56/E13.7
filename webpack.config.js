const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
};

devtool: 'inline-source-map',


devServer: {
     static: './dist',
     port: 3001
     hot: true,
     stats: {
 children: false
}
   },

