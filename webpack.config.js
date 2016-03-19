const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/scripts/app.js',
  output: {
    path: path.join(__dirname, './app'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.js.jsx']
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/ }
    ],
    loaders: [
      {
        test: /\.js?$/,
        include: path.join(__dirname, './src/scripts'),
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
      }
    ]
  },
  eslint: {
    emitWarning: true,
    emitError: true,
    failOnWarning: true,
    failOnError: true
  },
  stats: {
    children: false
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ]
};
