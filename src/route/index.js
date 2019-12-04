import routers from './routers'
import VueRouter from 'vue-router'
import Vue from 'vue'
import NProgress from 'nprogress'
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
router.beforeEach((to, from ,next) => {
  NProgress.start()
  next()
})
router.afterEach(()=>{
  NProgress.done()
})
export default router