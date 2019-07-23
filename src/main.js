// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import './assets/css/index.css'
import 'mint-ui/lib/style.css'
import './assets/icons/iconfont.css'
import './assets/css/amend-ui-style.css'
import echarts from 'echarts'
import * as filters from './filters/'
import API from './data/api'
import  { ConfirmPlugin } from 'vux'
Vue.prototype.$echarts = echarts
Vue.prototype.$API = API
Vue.use(MintUI)
Vue.use(ConfirmPlugin)
// 遍历所有导出的过滤器并添加到全局过滤器
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
})

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
