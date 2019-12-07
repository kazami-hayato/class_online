import Personal from '../views/Personnel'
import Content from '../components/Content'
import MyExamnation from '../views/MyExamnation'
import MyGrade from '../views/MyGrade'
import MyPolicy from '../views/MyPolicy'
import Login  from '../views/Login'
import Registe from '../views/Registe'
import PolicyFirst from '../views/Policy-first'
import VideoPlay from '../components/VideoPage'
import Exam from '../views/Examination'
const childRoutes = [
  {
    path:'/personal',
    component:Personal,
    name:'mainPage'
  },
  {
    path:'/myexam',
    component:MyExamnation
  },
  {
    path:'/mygrade',
    component:MyGrade
  },
  {
    path:'/mypolicy',
    component:MyPolicy
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/registe',
    component:Registe
  },
  {
    path:'/firstlogin',
    component:PolicyFirst
  },
  {
    path:'/watch',
    component:VideoPlay
  },
  {
    path:'/exam',
    component:Exam
  }
]
const routers = [
  {
    path:'/',
    component:Content,
    redirect:'/personal',
    children:childRoutes
  }
]
export default routers