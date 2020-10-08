import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/global.css' // 导入资源@@ is an alias to /src
import './plugins/element.js'
// 作为 项目的 入口
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
