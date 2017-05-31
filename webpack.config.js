const path = require('path')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const dotenv = require('dotenv').config().parsed

module.exports = [
  {
    /**
     * @see https://webpack.js.org/configuration/entry-context/
     */
    entry: {
      vendor: [
        'babel-polyfill',
        'normalize.css',
        'superagent',
        'vue'
      ],
      main: path.resolve('.', 'src', 'index.js')
    },

    /**
     * @see https://webpack.js.org/configuration/output/
     */
    output: {
      filename: '[name].js',
      path: path.resolve('.', 'docs', 'assets'),
      publicPath: '/assets/'
    },

    /**
     * @see https://webpack.js.org/configuration/module/
     */
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true
              }
            }
          ],
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: 'inline'
              }
            }
          ]
        },
        {
          test: /\.vue$/,
          use: [
            {
              loader: 'vue-loader'
            }
          ]
        }
      ]
    },

    /**
     * @see https://webpack.js.org/configuration/plugins/
     */
    plugins: [
      /**
       * @see https://webpack.js.org/plugins/environment-plugin/
       */
      new webpack.EnvironmentPlugin(dotenv),

      /**
       * @see https://webpack.js.org/guides/code-splitting-libraries/
       */
      new webpack.optimize.CommonsChunkPlugin({
        names: [
          'vendor',
          'manifest'
        ]
      }),

      /**
       * @see https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
       */
      new UglifyJSPlugin({
        sourceMap: true
      })
    ],

    /**
     * @see https://webpack.js.org/configuration/dev-server/
     */
    devServer: {
      compress: true,
      contentBase: path.resolve('.', 'docs'),
      port: 8080,
      historyApiFallback: true,
      https: true
    },

    /**
     * @see https://webpack.js.org/configuration/devtool/
     */
    devtool: 'inline-source-map',

    /**
     * @see https://webpack.js.org/configuration/target/
     */
    target: 'web',

    /**
     * @see https://webpack.js.org/configuration/stats/
     */
    stats: 'errors-only',

    /**
     * @see https://webpack.js.org/configuration/other-options/
     */
    bail: false,
    cache: true
  }
]
