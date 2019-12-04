import Mock from 'mockjs'

let studentAuth = {
  phone:'17854261210',
  account:'077018220052',
  password:'abc123'
}
let studentInfo = [];
let random = Mock.Random
studentInfo.push(
  Mock.mock({
    "name":random.cname(), // 学生姓名
    "id":random.id(), // 学生id
    "idnumber":random.id(), // 学生身份证号
    "major|1":[ // 学生专业
      "酒店管理","装修设计","计算机技术"
    ],
    'avatar':random.url(),
    "examCode": random.id(),
    "courses":[
      {
        "coursename":random.ctitle(5,8),
        "totalClass":50,
        "finishedClass":random.integer(0,50),
        "vid":random.id(),
        "coursePost":random.url()
      },
      {
        "coursename":random.ctitle(5,8),
        "totalClass":50,
        "finishedClass":random.integer(0,50),
        "vid":random.id(),
        "coursePost":random.url()
      },
      {
        "coursename":random.ctitle(5,8),
        "totalClass":50,
        "finishedClass":random.integer(0,50),
        "vid":random.id(),
        "coursePost":random.url()
      },{
        "coursename":random.ctitle(5,8),
        "totalClass":50,
        "finishedClass":random.integer(0,50),
        "vid":random.id(),
        "coursePost":random.url()
      },{
        "coursename":random.ctitle(5,8),
        "totalClass":50,
        "finishedClass":random.integer(0,50),
        "vid":random.id(),
        "coursePost":random.url()
      },{
        "coursename":random.ctitle(5,8),
        "totalClass":50,
        "finishedClass":random.integer(0,50),
        "vid":random.id(),
        "coursePost":random.url()
      }
    ]
  })
)
export {studentInfo,studentAuth}