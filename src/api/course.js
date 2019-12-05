import axios from 'axios'
import sha1 from 'js-sha1'

let base = ''

// 获取播放日志
export const getViewLog = params => {
  let month = new Date().getFullYear().toString() +  (new Date().getMonth()+1).toString()
  let ptime = new Date().getTime()
  let numPerPage = params.numPerPage
  let pageNum =  params.pageNum
  let sessionId = params.sessionId
  let vid = params.vid
  let sign = sha1("month="+month+"&numPerPage="+numPerPage+"&pageNum="+pageNum+"&ptime="+ptime+"&sessionId="+sessionId+"&vid="+vid+"rSiU6QHUxG")
  // sign的计算顺序要按字典顺序
  sign = sign.toUpperCase()
  return axios.get(`http://api.polyv.net/v2/viewlog/1f875362c3/monthly/${month}?&month=${month}&ptime=${ptime}&numPerPage=${numPerPage}&pageNum=${pageNum}&sessionId=${sessionId}&sign=${sign}&vid=${vid}`)
              .then(res => {return res.data})
}

// 获取某课程的目录树 -courseid
export const getCourseCatalog = params => {
  return axios.get(`${base}/CourseCatalog`,params).then(res => res.data)
}