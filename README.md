```
.
├── config                        // 現在はJest+Enzyme用の設定ファイルのみ設置
├── dist                          // コンパイル後のソースコードが配置される
└── src
│   ├── css                       // scssファイルを配置する
│   └── js                        // js, jsx, ts, tsxファイルを配置する
│       └── __tests__             // Jestテストコードを配置する
├── Dockerfile
├── README
├── docker-compose.yml
├── index.html
├── package.json
├── tsconfig.json
├── webpack.config.js
└── yarn.lock
```

#### 環境構築
```
// 作業ディレクトリへ移動
cd {任意の場所}

// gitリポジトリのclone
git clone https://dev-util.imjp.co.jp/gitbucket/git/shohei.kitabatake/5ds-tsc.git

cd 5ds-tsc

// dockerイメージの作成・ビルド
docker-compose up -d --build

// パッケージインストール
docker-compose run --rm ts yarn install
```

#### ローカルVisualStudioCodeでコーディングする場合

1. インストール
https://code.visualstudio.com/

2. 表示→拡張機能→`TSLint`をインストール

3. ローカル環境にもTypescriptとTSLintをインストール

```
npm install -g typescript --save
npm install -g tslint --save-dev
```


#### テスト実行(Jest)
```
docker-compose run --rm ts npm test
```

#### コンパイル(webpack)
```
docker-compose run --rm ts npm run build
```

#### ファイル監視・コンパイル(webpack -w)
```
docker-compose run --rm ts npm run watch
```

#### python HTTPサーバ立ち上げ
```
python -m SimpleHTTPServer 8080
```

#### アクセス
http://0.0.0.0:8080

* * *

#### node_modules インストールログ
```
# init
yarn init -yp

# install
yarn add \
  react react-dom @types/react @types/react-dom \
  webpack \

# install dev
# ts-jestはbabel-core依存
yarn add --dev \
  typescript babel-core ts-jest awesome-typescript-loader source-map-loader \
  webpack-cli \
  jest @types/jest \
  enzyme enzyme-adapter-react-16 @types/enzyme \
  react-test-renderer \
  style-loader css-loader \
  sass-loader node-sass \
```
