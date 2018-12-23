const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
   entry: './index.js',
   output: {
      path: __dirname,
      filename: './lib/ngOidc.min.js'
    },
  
   optimization: {
      minimizer: [
         new UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
               compress: {
                  // inline: false,
                  warnings: false, // Suppress uglification warnings
                  pure_getters: true,
                  //unsafe: true,
                  unsafe_comps: true,
                  sequences: true,
                  dead_code: true,
                  conditionals: true,
                  booleans: true,
                  unused: true,
                  if_return: true,
                  join_vars: true,
                  drop_console: true
               },
               output: {
                  comments: false,
               },
               ie8: true,
               safari10: true,
               exclude: [/\.min\.js$/gi] // skip pre-minified libs
            },
         })
      ],
   },
   resolve: {
      modules: [
         path.resolve('./node_modules'),
      ],
   },
   plugins: [
      new webpack.SourceMapDevToolPlugin({
         filename: 'lib/ngOidc.min.js.map',
      }),
      new CleanWebpackPlugin(['lib'], {
         root: __dirname,
         verbose: true,
         dry: false,
      }),
      new BundleAnalyzerPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.LoaderOptionsPlugin({
         minimize: true,
      }),
   ]
}