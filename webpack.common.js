const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		app: './js/main.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Production',
			template: 'index.html',
		}),
		new MiniCssExtractPlugin(),
	],
	module: {
    rules: [
      {
				test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
			{
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
			{
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
			{
        test: /\.html$/i,
        loader: HtmlWebpackPlugin.loader,
      },
    ],
  },
	output: {
		filename: 'Travel.bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
};