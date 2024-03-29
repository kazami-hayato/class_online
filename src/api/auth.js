import axios from 'axios'


let base = ''
export const httpInstance = axios.create()
// 登录
export const requestLogin = params => {return httpInstance.post(`${base}/login`,params).then(res => res.data)}

//注册
export const requestRegiste = params => {return httpInstance.post(`${base}/registe`,params).then(res => res.data)}

//首次登录，政策+人脸识别
export const requestFaceIdentify = params => {return httpInstance.post(`${base}/firstlogin`,params).then(res => res.data)}

// axios.interceptors.request.use((config) => {
//   console.log(config)
//   return config
// })
// axios.interceptors.response.use(response => {
//   console.log(response)
//   return response
// })