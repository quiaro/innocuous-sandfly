const webpack = require('webpack');

const DEV = process.env.NODE_ENV !== 'production';

module.exports = {
  bail: !DEV,
  devtool: DEV ? 'cheap-module-source-map' : 'source-map',
  entry: './index.js',
  output: {
    path: __dirname + '/static',
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [{
      test: /\.css/,
      loader: 'style-loader!css-loader',
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /(node_modules)/,
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(DEV ? 'development' : 'production'),
      },
    }),
  ].filter(Boolean),
};
