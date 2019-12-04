
const mutations = {
  SET_USERINFO:(state,userInfo) => {
    console.log(userInfo)
    state.userInfo = userInfo
  },
  CLEAR_USERINFO:(state) => {
    state.userInfo = null
  }
}
export default mutations