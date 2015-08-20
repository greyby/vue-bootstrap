var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: {
    app: ["webpack/hot/dev-server", "./src/app.js"],
    vendors: ["jquery","bootstrap"]
  },

  // live reload
  // entry: {
  //   app: ['webpack/hot/dev-server','./src/app.js'],
  //   vendors: ["jquery","bootstrap"]
  // },
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin()
  // ]

  output: {
    path: "./build",
    publicPath: "/build/",
    filename: "bundle.js"

  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new webpack.optimize.CommonsChunkPlugin("vendors", "vendor.bundle.js"),
    new ExtractTextPlugin("[name].css")
  ],
  // externals: {
  //       // require("jquery") is external and available
  //       //  on the global var jQuery
  //       "jquery": "jQuery"
  // },

  module: {
    loaders: [
      { test: /\.vue$/, loader: "vue-loader" },
      // { test: /\.css$/, loader: "style-loader!css-loader" }, // use ! to chain loaders
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style!css")},
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }, // inline base64 URLs for <=8k images, direct URLs for the rest
      { test: /\.ttf$/,    loader: "file?mimetype=application/octet-stream" },
      { test: /\.eot$/,    loader: "file" },
      { test: /\.svg$/,    loader: "file?mimetype=image/svg+xml" },
      { test: /\.woff$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2$/, loader: "url-loader?limit=10000&mimetype=application/font-woff2" }
    ]
  },
  devtool: "#source-map"
}
