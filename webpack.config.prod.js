import webpack from 'webpack'
import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const GLOBALS = {
	'process.env.NODE_ENV': JSON.stringify('production')
}

const extractSass = new ExtractTextPlugin({
	filename: "[name].[contenthash].css",
	disable: process.env.NODE_ENV === "development"
});

export default {
	debug: true,
	devtool: 'source-map',
	noInfo: false,
	entry: './src/index',
	target: 'web',
	output: {
		path: __dirname + '/dist', //physical files are only output by the production build task `npm run build`
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new webpack.DefinePlugin(GLOBALS),
		new ExtractTextPlugin('styles.css'),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		extractSass
	],
	module: {
		loaders: [
			{test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
			{test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('css?sourceMap')
			},
			{test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"     },
			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" }    ,
			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
			{test: /\.(jpe?g|png|gif|svg)$/i, loaders: [
				'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
				'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
			]}
		]	
	},	
	rules: [{
		test: /\.scss$/,
		use: extractSass.extract({
			use: [{
				loader: "css-loader"
			}, {
				loader: "scss-loader"
			}],
			// use style-loader in development
			fallback: "style-loader"
		})
	}]
}
