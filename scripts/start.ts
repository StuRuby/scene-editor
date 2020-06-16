import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import config from '../build/webpack.dev.config';

const compiler = webpack(config);
const options = Object.assign({}, config.devServer, {
    open: true,
    stats: {
        colors: true
    }
});

const server = new webpackDevServer(compiler, options);
server.listen(3000, '127.0.0.1', () => console.log('Starting server on http://localhost:3000'));
