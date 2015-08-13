var webpack = require("webpack");

module.exports = {
  // entry: "./src/app.js",
  entry: {
    app: "./src/app.js",
    vendors: ["jquery","bootstrap"]
  },

  // live reload
  // entry: {
  //   app: ['webpack/hot/dev-server','./src/app.js']
  // },
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin()
  // ]

  output: {
    path: "./build",
    filename: "build.js"
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "root.jQuery": "jquery"
    }),
    new webpack.optimize.CommonsChunkPlugin("vendors", "vendor.bundle.js")
  ],
  // externals: {
  //       // require("jquery") is external and available
  //       //  on the global var jQuery
  //       "jquery": "jQuery"
  // },

  module: {
    loaders: [
      { test: /\.vue$/, loader: "vue-loader" },
      { test: /\.css$/, loader: "style-loader!css-loader" }, // use ! to chain loaders
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }, // inline base64 URLs for <=8k images, direct URLs for the rest
      { test: /\.ttf$/,    loader: "file" },
      { test: /\.eot$/,    loader: "file" },
      { test: /\.svg$/,    loader: "file" },
      { test: /\.(woff|woff2)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  devtool: "source-map"
}
