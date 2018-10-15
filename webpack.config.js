var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var MinifyPlugin = require("babel-minify-webpack-plugin");

var pluginOpts = {};
var minifyOpts = {};

module.exports = {
	entry: {
		custom: [
			'./js/custom.js',
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].min.js',
		publicPath: './'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [
					'node_modules',
					'bower_components'
				],
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['es2015']
						} 
					}
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new MinifyPlugin(minifyOpts, pluginOpts)
	]
}