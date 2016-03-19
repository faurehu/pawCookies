var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/scripts/app.js",
  output: {
    path: path.join(__dirname, "./app"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".js", ".jsx", ".js.jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, "./src/scripts"),
        exclude: /(node_modules)/,
        loader: "babel",
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("css-loader")
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      }
    ]
  },
  stats: {
    children: false
  },
  plugins: [
      new ExtractTextPlugin("style.css", { allChunks: true })
  ]
};
