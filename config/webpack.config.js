const path = require('path');

module.exports = function(env) { 
    return {
        mode: 'development',
        entry: path.resolve(`src/index.js`),
        
        module:{
            rules:[{
                test: /\.js$/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    configFile: path.resolve('config/babel.config.json')
                }
            }, {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    'style-loader',
                    {
                        loader:'css-loader',
                        options: {
                            modules: false
                        }
                    },
                    'sass-loader']
            }, {
                test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,
                type: 'asset/resource'
            }]
        },
        devtool: "eval-source-map",
        devServer: {
            host: '0.0.0.0',
            port: 8000,
            proxy: {
                "/chat":'http://localhost:9090'
            },
            liveReload: true,
            hot: true,
            compress: true
        }
    }
}