const
path = require('path'),
MiniCssExtractPlugin = require('mini-css-extract-plugin'),
CopyPlugin = require('copy-webpack-plugin'),
{GenerateSW} = require('workbox-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/index.js',
    publicPath: '/',
    clean: true
  },
  module:{
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|ttf)$/i,
        type: 'asset/resource',
        generator: {
         filename: 'assets/[hash][ext][query]'
       }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/index.html')},
        { from: path.resolve(__dirname, 'src/manifest.json')},
        { from: path.resolve(__dirname, 'src/assets/icons/favicon.ico'), to: 'assets'},
        { from: path.resolve(__dirname, 'src/assets/icons/icon.png'), to: 'assets'},
      ]
    }),
    new GenerateSW({
      exclude: [/.git/]
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    historyApiFallback: true
  }
}
