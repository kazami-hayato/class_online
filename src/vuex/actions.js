import {requestLogin} from '@/api/auth'
import Cookies from 'js-cookie'

const actions = {
  login({commit},userInfo) {
    const {account,password} = userInfo
    console.log(userInfo)
    return new Promise((resolve,reject) => {
      requestLogin({account:account.trim(),password:password}).then(response => {
        console.log(response)
        Cookies.set('userlogin', JSON.stringify(userInfo),{expires:7});
        commit('SET_USERINFO',response.data)
        resolve()
      }).catch(error => {
        console.log(error)
        reject(error)
      })
    })
  },
  logout({commit}){
    return new Promise((resolve,reject)=>{
      commit('CLEAR_USERINFO')
      resolve()
    })
  }
}
export default actions