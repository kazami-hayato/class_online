import axios from 'axios'

let base = ''

// 登录
export const requestLogin = params => {return axios.post(`${base}/login`,params).then(res => res.data)}

//注册
export const requestRegiste = params => {return axios.post(`${base}/registe`,params).then(res => res.data)}

//首次登录，政策+人脸识别
export const requestFaceIdentify = params => {return axios.post(`${base}/firstlogin`,params).then(res => res.data)}