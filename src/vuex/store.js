import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)
let userInfo = {
  name:'',
  id:'',
  idnumber:'',
  major:'',
  examCode:'',
  courses:[]
}
const state = {
  userInfo:{}
}
const store = new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})
export default store