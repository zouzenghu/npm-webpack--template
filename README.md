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
