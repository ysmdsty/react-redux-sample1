const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'index.js'
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
