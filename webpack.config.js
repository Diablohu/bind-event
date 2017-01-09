'use strict';

const path = require('path');
const srcPath = path.resolve(process.cwd(), 'src');

module.exports = {
    entry: {
        'bind-event': [
            path.join(srcPath, 'bind-event.js')
        ]
    },
    output: {
        path: path.resolve(process.cwd(), 'dist/'),
        filename: '[name].js'
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    'env', {
                                        targets: {
                                            browsers: ["last 2 versions"]
                                        },
                                        modules: false
                                    }
                                ]
                            ]
                        }
                    }
                ]
            }
        ],
        noParse: /\.min\./
    }
}