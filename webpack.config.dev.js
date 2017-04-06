import webpack from 'webpack'
import path from 'path'
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});
export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,
  entry: [ //order of entry is critical
    'eventsource-polyfill', //necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    './src/index'
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist', //physical files are only output by the production build task `npm run build`
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    extractSass
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!scss')
      },
      {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
      {test: /\.(jpe?g|png|gif|svg)$/i, loaders: [
        'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]}
    ]
  },
  rules: [{
    test: /\.scss$/,
    use: extractSass.extract({
      use: [{
        loader: "css-loader"
      }, {
        loader: "scss-loader"
      }],
      // use style-loader in development
      fallback: "style-loader"
    })
  }]
}
