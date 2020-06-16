import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import processBarWebpackPlugin from 'progress-bar-webpack-plugin';
import compressionPlugin from 'compression-webpack-plugin';

import commonWebpackConfig from './webpack.base.config';

const prodConfig: webpack.Configuration = merge(commonWebpackConfig, {
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('prod')
            }
        }),
        new CleanWebpackPlugin({
            verbose: true,
            dry: false,
            cleanOnceBeforeBuildPatterns: [
                path.resolve(__dirname, '../dist')
            ]
        }),
        new processBarWebpackPlugin(),
        new compressionPlugin({
            test: /\.(js|css)$/,
            algorithm: 'gzip',
            filename: '[path].gz[query]',
            threshold: 8192,
            minRatio: 0.8
        })
    ]
} as webpack.Configuration);

export default prodConfig;