const
  webpack = require('webpack'),
  path = require('path')
;

module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./main.max.js",

  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(process.env.npm_package_version)
    })
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [["@babel/env", { "modules": "commonjs" }], '@babel/preset-react'],
            plugins: ['add-module-exports','react-html-attrs', ['@babel/plugin-proposal-decorators', { 'legacy': true }], '@babel/plugin-proposal-function-bind'],
          }
        }
      }
    ]
  },
  output: {
    path: __dirname + "/dist/",
    filename: "main.js"
  },
  performance: {
    maxAssetSize: 512000,
    maxEntrypointSize: 512000
  }
};
