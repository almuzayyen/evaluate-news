const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const WorkboxPlugin = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/client/index.js',
    output:{
        filename:"main.[contenthash].js",
        path: path.resolve(__dirname,"dist"),
        libraryTarget: 'var',
  library: 'Client',
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },

            {
                test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader","sass-loader"],
        
        
      },
            
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
         new WorkboxPlugin.GenerateSW({
      
       clientsClaim: true,
       skipWaiting: true,
     }),
     new MiniCssExtractPlugin({
         filename:'main.[contenthash].css'
                         
     })
    ]
}