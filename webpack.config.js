const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require("path");


module.exports = {
    mode: 'development',
    entry: './client/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['ts-loader'],
            },
            {
                test:  /.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/env',
                            '@babel/react',
                            '@babel/preset-react'
                        ]
                    },
                    
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                  }, {
                    loader: "css-loader" 
                  }, {
                    loader: "sass-loader"
                  }]
            },
           
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js', '.tsx', '.ts']
    },
    devServer: {
        hot: true,
        proxy: {
            '/api/': 'http://localhost:3000',
        },
        static: {
            publicPath: '/',
            directory: path.resolve(__dirname)
        },
        host: 'localhost',
        port: 8080,
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'Development',
            template: 'index.html'
        })
    ]  
}