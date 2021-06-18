import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'ant-design-vue/dist/antd.css'
import './assets/styles/index.css'

import { Message } from 'ant-design-vue'

Vue.config.productionTip = false
Vue.prototype.$message = Message

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
