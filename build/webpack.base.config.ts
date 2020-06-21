import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
    context: __dirname,
    entry: {
        app: '../src/app.tsx'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/editor-[name].js'
    },
    node: {
        fs: 'empty'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: [
                    path.resolve(__dirname, '../node_modules')
                ],
                use: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap:true,
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                strictMath: true
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(png|gif|jpe?g|svg|xml|json|ttf|woff|eot)$/,
                use: ['url-loader']
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.ico$/,
                use: 'file-loader?name=[name].[ext]'
            },
            {
                test: /\.(svg|gif|jpg|png)$/,
                use: 'file-loader?name=img/[name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html')
        })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 0
                },
                vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor',
                    priority: 10,
                    enforce: true
                }
            }
        },
        runtimeChunk: true
    }
};

export default config;