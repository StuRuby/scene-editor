import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const isDev = process.env.NODE_ENV === 'development'

const config: webpack.Configuration = {
    context: __dirname,
    entry: isDev ? [
        'react-hot-loader/patch',
        '../src/app.tsx'
    ] : ['../src/app.tsx'],
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
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: isDev ? {
                            'plugins': ['react-hot-loader/babel']
                        } : {}
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev
                        },
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev
                        },
                    },
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
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
            ...(isDev ? {
                'react-dom': '@hot-loader/react-dom'
            } : {})
        }
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