const path = require('path');

module.exports = {
  mode: "development",

  entry: path.resolve(__dirname, 'src/index.jsx'),

  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
              ]
            }
          }
        ]
      }
    ]
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 3000,
    open: false,
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },
}
