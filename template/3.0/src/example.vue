<template>
  <div class="about">
    <h1>通过vuex 模拟 登录人名称 为 {{ userName }}</h1>
    <el-button type="primary" @click="showType = true">修改用户名 按需加载</el-button>
    <el-button type="primary" @click="abc">组件传参 正常加载</el-button>
    <template v-if="showType">
      <exampleCont />
    </template>
    <template v-if="!showType && showType2">
      <transmit :message1="message1" :message2="message2" :message3="message3" :message4="message4" :message5="message5" :message6="message6" />
    </template>
    <div class="fd-less">我是演示less的</div>
    <div class="fd-lessFS">我是演示less的</div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import transmit from '@/components/Modify-name/transmit.vue'
export default {
  data () {
    return {
      showType: false,
      showType2: false,
      list: [{ x: 2 }, { x: 3 }, { x: 4 }],
      message1: 1,
      message2: '123',
      message3: true,
      message4: [12, 321],
      message5: {
        a: 2
      },
      message6: (res) => {
        console.log(this.$data, res)
      }
    }
  },
  computed: {
    // 注入 state 数据 注意 publics 为全局 其余数据应当新建Model
    ...mapState({
      userName: state => state.publics.userInfo.userName
    })
  },
  components: {
    exampleCont: () => import('@/components/Modify-name/exampleCont.vue'),
    transmit
  },
  provide () {
    return {
      'parentClick': this.parentClick
    }
  },
  created () {
    // 公共 Element 方法 具体去 assets/js/mixin/globalMinxin.js 去看
    this._messages('success', '欢迎使用', 2000)
    // 全局的 lodash 具体其他操作去 Lodash官网去看
    this._removeListData(this.list, 'x', { x: 3 })
    // 全局的 promise封装 这个只是演示
    this.asyncPromise().then(res => {
      // 修改vuex数据
      this.setUser(res.userinfo)
    })
    this.setAsync()
    console.log(this._difference({ a: 2, b: 3, f: 2, c: 5 }, { a: 2, b: 3, c: 4 }))
  },
  methods: {
    // 注入 vuex 方法
    ...mapActions(['setUser']),
    asyncPromise () {
      return new Promise((resolve, reject) => {
        this.axios.get(this.url.userInfo, {}, { a: 2 }, res => {
          resolve(res)
        })
      })
    },
    async setAsync () {
      console.log('...开始执行 4000ms')
      await this.setTime()
      console.log('...等待上方结束才执行')
    },
    setTime () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 4000)
      })
    },
    abc () {
      // 错误的命名方式 这么写打断腿
      this.showType2 = true
      this.showType = false
    },
    parentClick (_state) {
      this._messages('info', _state)
    },
    // 导出文件实例 数据流 仅为展示代码
    exportExcel () {

    }
  }
}
</script>
<style lang="less" scoped>
.about {
  .size(100%;100%);
  .b_r(4px);
  // .box_shadow(rgba(0, 0, 0, 0.3));
  padding: 10px;
}

.fd-less {
  .ts(3px,#000);
  .bg_gradientP(right; #fff, #000;);
}
.fd-lessFS {
  .fz(22px);
  .dib();
  font-weight: bold;
  .t_gradientP(right;red, blue;);
}
</style>
