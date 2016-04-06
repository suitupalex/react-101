'use strict'

const webpack = require('webpack')

const uglifyPlugin = new webpack.optimize.UglifyJsPlugin()
const processEnvPlugin = new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }
})

module.exports = {
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/
      , exclude: /node_modules/
      , loaders: [
          'babel-loader?presets[]=es2015,presets[]=react'
        ]
      }
    , {test: /\.json$/, loader: 'json'}
    , {
        test: /\.css$/
      , loaders: [
          'style'
        , 'css'
        ]
      }
    , {
        test: /\.sass$/
      , loaders: [
          'style'
        , 'css'
        , 'sass'
        ]
      }
    , {test: /\.(ttf|svg|png|jpg)$/, loader: 'url'}
    ]
  }
, entry: {
    base: './react-101.jsx'
  }
, output: {
    path: './dist'
  , filename: '[name].bundle.js'
  }
, plugins: [
    processEnvPlugin
  , uglifyPlugin
  ]
}
