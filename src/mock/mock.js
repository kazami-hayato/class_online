import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {studentInfo,studentAuth} from './data/students'
import courseCatalog from './data/course'
import {httpInstance} from '../api/auth'

export default {
  bootstrap(){
    let mock = new MockAdapter(httpInstance)
    mock.onPost('/login').reply(config => {
      let {account,password} = JSON.parse(config.data)
      return new Promise((resolve,reject)=>{
        if((account === studentAuth.account || account === studentAuth.phone) && password === studentAuth.password)
          resolve([200,{code:200,msg:'登录成功',data:studentInfo[0]}])
        else
          reject({code:-1,msg:'账号或密码错误',data:[]})
      })
    })
    mock.onGet('/CourseCatalog').reply(config => {
      console.log(config)
       return new Promise((resolve, reject) => {
         resolve([200,{code:200,msg:'获取成功',data:courseCatalog}])
       })
    })
    // mock.onGet('/meterList').reply(config => {
    //   return new Promise((resolve,reject)=>{
    //       resolve([200,{code:200,msg:'success',data:meters}])
    //   })
    // })
    // mock.onGet('/meterFamily').reply( config => {
    //   return new Promise((resolve,reject)=>{
    //       resolve([200,{code:200,msg:'success',data:meter_family}])
    //   })
    // })
  }
}