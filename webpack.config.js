const path = require('path');
const webpack = require('webpack');
const getPackageJson = require('./scripts/getPackageJson');
const TerserPlugin = require('terser-webpack-plugin');

const {
  version,
  name,
  description,
  license,
  repository,
  author
} = getPackageJson('version', 'name', 'description', 'license', 'repository', 'author');

const banner = `
  ${name} v${version} - ${description}
  ${repository.url}

  Copyright (c) ${author.replace(/ *\<[^)]*\> */g, ' ')}

  This source code is licensed under the ${license} license found in the
  LICENSE file in the root directory of this source tree.
`;

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
    library: 'PRSS',
    libraryTarget: 'umd',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: /^!/i,
          },
        },
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
        use: ['url-loader']
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin(banner)
  ]
};