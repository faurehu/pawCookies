var path = require("path");

module.exports = {
  entry: "./src/scripts/app.js",
  output: {
    path: path.join(__dirname, "./app/assets/scripts"),
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
      }
    ]
  }
};
