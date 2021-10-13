const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

const config = {
   entry: { index: path.resolve(__dirname, 'src', 'index.js') },
   output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      publicPath: '/',
   },
   devServer: {
      historyApiFallback: true,
      contentBase: '/',
      hot: true,
      // port: 3000;
   },
   devtool: 'source-map',
   plugins: [
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
         hash: true,
         inject: true,
         // title: 'FashionApp',
         filename: 'index.html',
         template: path.resolve(__dirname, 'public', 'index.html'),
         minify: true,
      }),
   ],
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/i,
            exclude: /(node_modules|bower_components)/,
            use: ['babel-loader'],
         },
         {
            test: /\.css$/i,
            use: [stylesHandler, 'css-loader'],
         },
         {
            test: /\.s[ac]ss$/i,
            use: [
               stylesHandler,
               'css-loader',
               {
                  loader: 'sass-loader',
                  options: {
                     additionalData:
                        '@import "static/styles/colors.scss"; @import "static/styles/sizes.scss"; @import "static/styles/scrollbar.scss";',
                  },
               },
            ],
         },
         {
            test: /\.(png|jpg|gif|svg)$/,
            use: [
               {
                  loader: require.resolve('file-loader'),
                  options: {
                     name: './assets/images/[sha512:hash:base64:6].[ext]',
                  },
               },
            ],
         },
         {
            test: /\.(eot|ttf|woff|woff2)$/,
            use: [
               {
                  loader: require.resolve('file-loader'),
                  options: {
                     name: './assets/fonts[sha512:hash:base64:6].[ext]',
                  },
               },
            ],
         },
      ],
   },
   resolve: {
      extensions: ['.js', '.jsx'],
      modules: ['node_modules'],
      alias: {
         components: path.resolve(__dirname, 'src/components/'),
         layouts: path.resolve(__dirname, 'src/layouts/'),
         images: path.resolve(__dirname, 'src/assets/images/'),
         icons: path.resolve(__dirname, 'src/assets/images/icons/'),
         api: path.resolve(__dirname, 'src/api/'),
         common: path.resolve(__dirname, 'src/common/'),
         translations: path.resolve(__dirname, 'src/translations/'),
         store: path.resolve(__dirname, 'src/store/'),
      },
   },
};

module.exports = () => {
   if (isProduction) {
      config.mode = 'production';

      config.plugins.push(
         new MiniCssExtractPlugin({
            ignoreOrder: true,
            filename: './assets/styles/[name].[contenthash].css',
            chunkFilename: './assets/styles/[id].css',
         })
      );
   } else {
      config.mode = 'development';
   }
   return config;
};
