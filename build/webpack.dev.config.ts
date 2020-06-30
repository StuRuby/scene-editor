import webpack from 'webpack';
import merge from 'webpack-merge';
import commonWebpackConfig from './webpack.base.config';

const devConfig: webpack.Configuration = merge(commonWebpackConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin({ quiet: true })
    ]
} as webpack.Configuration);

export default devConfig;