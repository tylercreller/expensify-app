const path = require('path');

module.exports = {
	entry: './src/playground/redux-101.js',
	output: {
		path: path.join(__dirname, 'public', 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.s?css$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		historyApiFallback: true,
		publicPath: '/dist/'
	}
};
