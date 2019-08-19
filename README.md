### webpack-es6-template

自用 `webpack` 模板

#### 安装

```javascript

git clone git@github.com:zouzenghu/npm-webpack-es6-template.git

npm install

```

#### 打包

注意：run build 打包时会自动使用 Eslint 检查代码

```javascript
npm run build
```

#### 单元测试

```javascript

npm start

```

#### 可处理文件

```javascript
typescript
scss
img
font
html
```

#### 生成项目依赖图

可使用该[网站](https://webpack.github.io/analyse/)查看  stats.json

```javascript
npm run dev-build  
```

#### 使用 dll 打包

注意：需要在 buildConfig -> entry.js 文件下添加需要被 dll 打包的库

```javascript
DllEntry: {
    //如果配置了Dll启动前必须运行一下npm run build-dll,默认只添加vendor.js
    //如需配置css则需自行到buildConfig->utils>template.js下配置
    vendors: ["jquery","loadsh"],
  }

npm run build-dll
```
#### 模板入口文件参数
模板将所有主要参数移出到buildConfig目录下控制
```javascript
dev.env.js //控制dev环境下主要参数
output: {
    filename: './js/[name].js',
    path: path.join(process.cwd(), 'dist'),
    chunkFilename: "./class/[name].js"
  },
  css: {
    filename: './css/[name].css',
    chunkFilename: '/css/[id].css'
  },
  image: {
    outputPath: './image',
    name: '[name].[ext]',
    limit: '2048'
  },
  html: {
    attrs: ["img:src", "img:data-src", "audio:src"],
    minimize: true
  },
  font: {
    outputPath: './font',
    name: "[name].[ext]"
  },
  devServer: {
    port: '8080',
    hot: true,
    host: '127.0.0.1',
    open: true,
    contentBase: path.join(process.cwd(), 'dist')
  },
  devtool: 'cheap-module-eval-source-map'
```
```javascript
pro.env.js //主要控制项目打包时主要参数
 output: {
    filename: './js/[name].[contenthash:6].js',
    path: path.join(process.cwd(), 'dist'),
    chunkFilename: "./class/[name].js"
  },
  css: {
    filename: './css/[name].[contenthash:6].css',
    chunkFilename: '/css/[id].css'
  },
  image: {
    outputPath: './image',
    name: '[name].[contenthash:6].[ext]',
    limit: '2048'
  },
  html: {
    attrs: ["img:src", "img:data-src", "audio:src"],
    minimize: true
  },
  font: {
    outputPath: './font',
    name: "[name].[contenthash:6].[ext]"
  },
  splitChunks: {
    chunks: 'all',
    minSize: 30000,
    maxSize: 0,
    minChunks: 2,
    maxAsyncRequests: 5,
    maxInitialRequests: 3,
    automaticNameDelimiter: '~',
    automaticNameMaxLength: 30,
    name: true,
    cacheGroups: {
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: -10,
      },
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true
      }
    }
  }
```
```javascript
  entry.js //控制公共文件的入口
  entry: {
    index: path.join(process.cwd(), 'src/index.js'),
    main: path.join(process.cwd(), 'src/components/helloWorld.js')
  },
  template: [{
      filename: "index.html",
      template: path.join(process.cwd(), "static/index.html"),
      chunks: ["index"]
    },
    {
      filename: "./page/test.html",
      template: path.join(process.cwd(), "src/components/test.html"),
      chunks: ["main"]
    }
  ],
  DllEntry: {
    //如果配置了Dll启动前必须运行一下npm run build-dll,默认只添加vendor.js
    //如需配置css则需自行到buildConfig->utils>template.js下配置
    vendors: [],
  }
```
