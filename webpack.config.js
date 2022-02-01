const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    publicPath: '',
    path: path.resolve(__dirname, 'public'),
    filename: 'build/bundle.js',
  },
  mode: 'development'
};
