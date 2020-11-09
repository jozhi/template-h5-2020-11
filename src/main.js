import Vue from 'vue'
import Vant from 'vant'
import { Toast,Dialog } from 'vant'
// import Vconsole from 'vconsole'
import App from './App.vue'
import router from './router'
import store from './store'
// import Header from '@/components/Header.vue';
import Input from '@/components/Input'
import select from '@/components/select'
import datePicker from '@/components/datePicker'
import { baseGet, basePost, noPassByName,  noPassByIdCard, noPassByMobile, noPassByBankNum} from '@/utils/index'
import 'vant/lib/index.css'
import * as api from './api/index'
import FastClick from 'fastclick'

// 表单项校验规则
import './data/validate'

// 定义到顶部命名空间中的全局方法
Vue.prototype.$baseGet = baseGet
Vue.prototype.$basePost = basePost
Vue.prototype.$noPassByName = noPassByName    // 名字脱敏处理
Vue.prototype.$noPassByIdCard = noPassByIdCard  // 身份证号脱敏处理
Vue.prototype.$noPassByMobile = noPassByMobile  // 手机号脱敏处理
Vue.prototype.$noPassByBankNum = noPassByBankNum  // 银行卡脱敏处理

// 使用 FastClick 优化点击反应慢问题
FastClick.prototype.focus = function(targetElement) {
  let length
  if (targetElement.setSelectionRange &&
    targetElement.type.indexOf('date') !== 0 &&
    targetElement.type !== 'time' &&
    targetElement.type !== 'number' &&
    targetElement.type !== 'month') {
    length = targetElement.value.length
    targetElement.focus()
    targetElement.setSelectionRange(length, length)
  } else {
    targetElement.focus()
  }
}
FastClick.attach(document.body)

Vue.use(Vant)
Vue.use(Toast)
Vue.use(Dialog)
// new Vconsole()

Vue.prototype.$api = api

// 替换为自己服务器的 url 前缀
Vue.prototype.$url = 'https://127.0.0.1/api'  //生产环境

router.beforeEach((to, from, next) => {
  Vue.prototype.route = to
  if (to.name) {
    document.title = to.name
  }
  next()
})

// 绑定自定义组件
// Vue.component('Header', Header)
Vue.component('VantInput', Input)
Vue.component('VantDatePicker', datePicker)
Vue.component('VantSelect', select)

Vue.config.productionTip = false
window.vueInstance = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// addEventListener不兼容低版本ie
// document.addEventListener('JSBridgeReady', function() {
//   window.vueInstance = new Vue({
//     router,
//     store,
//     render: h => h(App)
//   }).$mount('#app')
// }, false);
// if (document.addEventListener) {
//   console.log('我可以');
// } else {
//   console.log('我不可以');
// }
