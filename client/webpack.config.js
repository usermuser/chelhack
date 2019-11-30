const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = (_, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: path.resolve(process.cwd(), 'src', 'index.ts'),
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'main.bundle.js',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            'babel-loader', 
            'ts-loader',
          ],
        },
        {
          test: /\.css$/,
          include: /node_modules/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
          ],
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: !isProduction,
              },
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: isProduction
                  ? '[name]__[local]___[hash:base64:5]'
                  : '[name]__[local]',
              },
            },
            isProduction && 'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: !isProduction,
              },
            },
          ].filter(Boolean),
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'public', 'index.html') }),
      new MiniCssExtractPlugin({
        filename: isProduction
          ? 'main.styles.[hash].css'
          : 'main.styles.css',
        chunkFilename: isProduction
          ? '[name].styles.[hash].css'
          : '[name].styles.css',
      }),
    ],
    devServer: {
      hot: true,
      port: 3000,
    },
  };

}