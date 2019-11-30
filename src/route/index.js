import routers from './routers'
import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes:routers
})
// 访问控制
// router.beforeEach((to, from, next) => {
//   if (window.sessionStorage.getItem('islogined') !== '1' && (to.fullPath !== '/login' && to.fullPath !== '/registe')) {
//     next('/login')
//   } else {
//     next()
//   }
// })
export default router