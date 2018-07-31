// 'production' | 'development'
const mode = 'development';
const is_dev = (mode !== 'production');

module.exports = {
    mode: mode,
    entry: {
        // 複数設定可能
        index: './src/js/index.tsx', // TODO 削除
        material: './src/js/materialui/index.tsx', // TODO 削除
        bo_contents: './src/js/bo/contents.tsx',
    },
    output: {
        // entryのキーがnameとなる
        filename: '[name].js',
        path: __dirname + '/dist',
    },
    resolve: {
        extensions: [
            '.ts', '.tsx', '.js', '.scss', '.scss', '.json',
        ]
    },
    module: {
        // ファイルタイプに対するloaderの設定
        rules: [
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader',
            },
            {
                // TODO Material UI のCSSシステムは JSS を使ったJS埋め込み型なので、sass は削除してOK
                test: /\.scss/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // url()アセットをdistに取り込むか(２重管理注意)
                            url: false,
                            minimize: true,
                            // ソースマップを表示するか
                            sourceMap: is_dev,
                            // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            // ソースマップを表示するか
                            sourceMap: is_dev,
                        }
                    },
                ],
            },
        ]
    }
}
