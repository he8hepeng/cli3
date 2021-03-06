module.exports = (api, options, rootOptions) => {
  // 修改 `package.json` 里的字段
  api.extendPackage({
    "scripts": {
      "serve": "vue-cli-service serve",
      "build": "vue-cli-service build",
      "lint": "vue-cli-service lint"
    },
    "dependencies": {
      "add-asset-html-webpack-plugin": "^3.1.3",
      "axios": "^0.19.0",
      "clean-webpack-plugin": "^3.0.0",
      "compression-webpack-plugin": "^4.0.0",
      "core-js": "^2.6.5",
      "element-ui": "^2.12.0",
      "file-saver": "^2.0.2",
      "jquery": "^3.4.1",
      "jquery.nicescroll": "^3.7.6",
      "lodash": "^4.17.15",
      "moment": "^2.24.0",
      "uglifyjs-webpack-plugin": "^2.2.0",
      "vue": "^2.6.10",
      "vue-cookies": "^1.5.13",
      "vue-router": "^3.0.3",
      "vuex": "^3.0.1",
      "zip-webpack-plugin": "^3.0.0"
    },
    "devDependencies": {
      "@vue/cli-plugin-babel": "^3.11.0",
      "@vue/cli-plugin-eslint": "^3.11.0",
      "@vue/cli-service": "^3.11.0",
      "@vue/eslint-config-standard": "^4.0.0",
      "babel-eslint": "^10.0.1",
      "babel-polyfill": "^6.26.0",
      "eslint": "^5.16.0",
      "eslint-plugin-vue": "^5.0.0",
      "less": "^3.0.4",
      "less-loader": "^5.0.0",
      "mockjs": "^1.0.1-beta3",
      "style-resources-loader": "^1.2.1",
      "terser-webpack-plugin": "^3.0.1",
      "vue-template-compiler": "^2.6.10",
    "webpack-cli": "^3.3.11"
    },
    "eslintConfig": {
      "root": true,
      "env": {
        "node": true
      },
      "extends": [
        "plugin:vue/essential",
        "@vue/standard"
      ],
      "rules": {},
      "parserOptions": {
        "parser": "babel-eslint"
      }
    },
    "postcss": {
      "plugins": {
        "autoprefixer": {}
      }
    },
    "browserslist": [
      "> 1%",
      "last 2 versions"
    ]
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