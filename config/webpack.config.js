const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: '[name].js'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            }
        ]
    }
}