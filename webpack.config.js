const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    mode: process.env.NODE_ENV,
    entry: './client/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          use: {
           loader: 'babel-loader',
           options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
           }
          }
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/,
          include: /images/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images/',
                publicPath: 'images/'
              }
            }
          ]
        },
        {
          test: /\.s[ac]ss$/i,
          // exclude: /node_modules/,
          use: [
            'style-loader',
            'css-loader',
            //'postcss-loader',
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Development',
        template: './client/index.html'
      })
    ],
  devServer: {
    host: 'localhost',
    port: 8080,
    static: {
      directory: path.join(__dirname, 'build'),
      publicPath: '/'
    },
    proxy: {
      '/': 'http://localhost:3000'
    },
  },
  resolve: {
    /** "extensions" 
         * If multiple files share the same name but have different extensions, webpack will 
         * resolve the one with the extension listed first in the array and skip the rest. 
         * This is what enables users to leave off the extension when importing
         */
    extensions: ['.js','.jsx','.json'] ,
    fallback: {
      'react/jsx-runtime': 'react/jsx-runtime.js',
      'react/jsx-dev-runtime': 'react/jsx-dev-runtime.js',
    },
  },
}