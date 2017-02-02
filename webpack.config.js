const StyleLintPlugin = require('stylelint-webpack-plugin');
const webpack = require('webpack');
const IS_PROD = process.argv.indexOf('-p') > -1;

module.exports = {
    devtool: IS_PROD ? 'source-map' : 'eval',
    entry: IS_PROD ? __dirname + '/src/main.ts' : __dirname + '/src/main.mocked.ts',
    output: {
        filename: 'hello-world.js',
        path: IS_PROD ? __dirname + '/dist/demo' : __dirname + '/demo'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'raw', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style!css?-minimize', exclude: /src/ },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.ts$/, loader: 'ts-loader', query: { compilerOptions: { noEmit: false } } },
            { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"] }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        port: 8000,
        inline: true,
        hot: true,
        historyApiFallback: true,
        contentBase: 'src'
    },
    plugins: [
        new StyleLintPlugin({
            syntax: 'scss',
            context: 'scss',
            failOnError: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            ENV: JSON.stringify(IS_PROD ? 'production' : 'development')
        })
    ]
};