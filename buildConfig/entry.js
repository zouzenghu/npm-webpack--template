const path = require('path');
module.exports = {
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
}