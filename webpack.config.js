const path = require('path');
const janePlugin = require('./jane-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jane$/,
        use: [
          { loader: './jane-webpack-loader' }
        ]
      }
    ]
  },
  plugins: [
      new janePlugin()
  ]
};