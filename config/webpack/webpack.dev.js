﻿const webpack = require('webpack');
const path = require('path');
const OUT_PATH = path.resolve('./publish');
const MDC_DIR = path.resolve(__dirname, 'node_modules', '@material');

const CSS_LOADER_CONFIG = [{
  loader: 'css-loader',
  options: {
    sourceMap: true
  }
}, {
  loader: 'postcss-loader',
  options: {
    plugins: () => [require('autoprefixer')({ grid: false })]
  }
}, {
  loader: 'sass-loader',
  options: {
    sourceMap: true,
    includePaths: path.join(__dirname, "sass")
  }
}];

module.exports = [{
  devtool: 'source-map',
  cache: true,
  output: {
    path: OUT_PATH,
    filename: '[name].bundle.js'
  },
  entry: {
    'polyfills': './src/demo-app/polyfills.ts',
    'vendor': './src/demo-app/vendor.ts',
    'app': './src/demo-app/root.module.ts'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: [{
        loader: 'babel-loader'
      }, {
        loader: 'awesome-typescript-loader',
        options: {
          configFileName: './src/demo-app/tsconfig.json'
        }
      }, {
        loader: 'angular2-template-loader'
      }],
      exclude: [/\.(spec|e2e)\.ts$/]
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [
        MDC_DIR
      ]
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      test: /\.(sass|scss)$/,
      use: [
        'style-loader',
        'css-loader', {
          loader: 'sass-loader',
          options: {
            includePaths: [
              'node_modules'
            ]
          },
        },
      ]
    }]
  },
  plugins: [
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve(__dirname, './ts')
    ),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills'],
      minChunks: Infinity
    })
  ]
}];