const webpack = require('webpack')
// const BundleAnalyzerPlugin =
//   require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify(process.env.REACT_APP_NODE_ENV_PROD),
    }),
    // new BundleAnalyzerPlugin(),
  ],
}
