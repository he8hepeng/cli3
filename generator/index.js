module.exports = (api, options, rootOptions) => {
  // 修改 `package.json` 里的字段
  api.extendPackage({
    "scripts": {
      "serve": "vue-cli-service serve",
      "build": "vue-cli-service build",
      "lint": "vue-cli-service lint"
    }
  })

  // 复制并用 ejs 渲染 `./template` 内所有的文件
  if (options.type === '3') {
    console.log(`感谢使用3.0模板,有问题请联系何鹏`)
    api.render('../template/3.0')
    // options.module 可以访问上面问题数组的第一个对象的值，默认为: 'module0'
  } else if (options.type === '2') {
    api.render('../template/3.0')
    console.log('2.0无人维护 默认安装3.0项目')
  }
}