import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';

import commonWebpackConfig from './webpack.base.config';


const devConfig: webpack.Configuration = merge(commonWebpackConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        compress: true,
        port: 3000,
        noInfo: false,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: [
                    path.resolve(__dirname, '../node_modules')
                ],
                loader: 'eslint-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('dev')
            }
        })
    ]
} as webpack.Configuration);

export default devConfig;