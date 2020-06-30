import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import config from '../build/webpack.dev.config';
import path from 'path'

const compiler = webpack(config);
const options: webpackDevServer.Configuration = {
    contentBase: path.resolve(__dirname, '../dist'),
    compress: true,
    port: 3000,
    noInfo: false,
    historyApiFallback: true,
    open: true,
    hotOnly: true,
    hot: true,
    stats: {
        colors: true
    }
};

webpackDevServer.addDevServerEntrypoints(config, options)

const server = new webpackDevServer(compiler, options);
server.listen(3000, '127.0.0.1', () => console.log('Starting server on http://localhost:3000'));
