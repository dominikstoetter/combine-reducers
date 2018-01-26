const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/combine-reducers.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
            presets: ['env']
        }
      }
    ]
  },
  stats: {
      colors: true
  },
  devtool: 'source-map',
  plugins: [
    new UglifyJsPlugin()
  ]
};
