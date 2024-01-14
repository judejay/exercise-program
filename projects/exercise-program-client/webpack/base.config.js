const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = {
	entry: './src/index.tsx',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				options: {
					configFile: resolve(__dirname, '..', 'tsconfig.client.json')
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			}
		]
	},
	output: {
		path: resolve(__dirname, '..', 'dist'),
		publicPath: '/'
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: './index.html',
			template: './src/index.html'
		})
	],
	resolve: {
		extensions: ['.js', '.ts', '.tsx']
	}
};
