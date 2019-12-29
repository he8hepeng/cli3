module.exports = [
  {
    type: 'list', // 即类型为 选择项
    name: 'type', // 名称，作为下面 generator 函数 options 的键
    message: '请选择你要生成的模板', // 提示语
    choices: [
      { name: 'vue-cli2.x(不推荐)', value: '2' },
      { name: 'vue-cli3.0(推荐)', value: '3' }
    ],
    default: '3',
  }
]