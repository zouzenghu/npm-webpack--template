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
  ]
}