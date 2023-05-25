const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      // Generate HTML file with dynamic script injection
      new HtmlWebpackPlugin({
        template: './src/index.html',
        chunks: ['main'],
      }),
      // Generate service worker from a workbox configuration file
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'sw.js',
      }),
      // Generate web app manifest file
      new WebpackPwaManifest({
        name: 'Your Text Editor Web App',
        short_name: 'Text Editor',
        description: 'A text editor web application',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: path.resolve('src/assets/icon.png'),
            sizes: [96, 128, 192, 256, 384, 512],
          },
        ],
        start_url: '/',
        display: 'standalone',
      }),
    ],

    module: {
      rules: [
        // Add CSS loaders to handle CSS files
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        // Add Babel loader for next-gen JavaScript support
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  };
};
