const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

const htmlPlugin = new HtmlWebPackPlugin({
    filename: './index.html',
    template: './src/index.html',
})

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader?sourceMap',
                    'css-loader?modules&importLoaders=1&localIdentName=[name]___[hash:base64:5]',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [ htmlPlugin ],
    devServer: {
        historyApiFallback: true,
    },
    resolve: {
        alias: {
            common: path.resolve('src/components/common'),
            components: path.resolve('src/components'),
            constants: path.resolve('src/constants'),
            containers: path.resolve('src/containers'),
            queries: path.resolve('src/queries'),
            routes: path.resolve('src/routes'),
            types: path.resolve('src/types'),
            utils: path.resolve('src/utils'),
        },
        extensions: [ '.js', '.jsx' ],
    },
}
