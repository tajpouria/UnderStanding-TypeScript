const path = require('path');

module.exports = {
  target: 'web',
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: { extensions: ['.ts', '.tsx', '.js'] },
  devServer: {
    contentBase: './',
    port: 3000
  }
};
