const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'index.js'
    },
    devServer: {
        contentBase: 'public',
        port: 8080
    },
    module: {
        rules: [
            {
                // ローダーの処理対象ファイル
                test: /\.js$/,
                // ローダーの処理対象から外すディレクトリ
                exclude: /node_modules/,
                use: [
                    {
                        // 利用するローダー
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    },
};
