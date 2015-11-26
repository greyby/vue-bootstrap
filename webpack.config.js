var vue = require('vue-loader')
var webpack = require("webpack")
var ExtractTextPlugin = require("extract-text-webpack-plugin")

var autoprefixer = require('autoprefixer')
var cssLoader = ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!postcss-loader")

module.exports = {
  entry: {
    app: "./src/app.js",
    vendors: ["jquery","bootstrap"]
  },

  output: {
    path: "./build",
    publicPath: "/build/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new webpack.optimize.CommonsChunkPlugin("vendors", "vendor.bundle.js"),
    new ExtractTextPlugin("build.css")
  ],
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        // excluding some local linked packages.
        // for normal use cases only node_modules is needed.
        exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel'
      },
      { test: /\.css$/, loader: cssLoader },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }, // inline base64 URLs for <=8k images, direct URLs for the rest
      { test: /\.ttf$/,    loader: "file?mimetype=application/octet-stream" },
      { test: /\.eot$/,    loader: "file" },
      { test: /\.svg$/,    loader: "file?mimetype=image/svg+xml" },
      { test: /\.woff$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2$/, loader: "url-loader?limit=10000&mimetype=application/font-woff2" }
    ]
  },
  postcss: [
    require('autoprefixer')
  ],
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  devtool: "#source-map"
}
