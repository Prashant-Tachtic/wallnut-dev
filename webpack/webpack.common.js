const path = require('path')
const AddScriptsToHTML = require('./plugins/add-scripts-to-liquid')
const TerserPlugin = require('terser-webpack-plugin');
const { webpackEntry } = require('./pages-config.js');

module.exports = {
  entry: webpackEntry(),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new AddScriptsToHTML(),
  ],
  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: false,
    })],
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
  output: {
    publicPath: '',
    filename: 'webpack.[name].bundle.js',
    path: path.resolve('assets'),
  },
};
