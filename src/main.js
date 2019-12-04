import Vue from 'vue'
import App from './App.vue'
import router from './route/index'
import ElementUI from 'element-ui'
import Mock from './mock'
import store from './vuex/store'
import './assets/style/global.scss'

Mock.bootstrap()
Vue.config.productionTip = false

Vue.use(ElementUI)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
