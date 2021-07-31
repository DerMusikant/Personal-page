const
path = require('path'),
MiniCssExtractPlugin = require('mini-css-extract-plugin'),
CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
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
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/index.html')},
        { from: path.resolve(__dirname, 'src/assets/sub/.git')}
      ]
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    historyApiFallback: true
  }
}
