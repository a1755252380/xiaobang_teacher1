import Vue from 'vue'
import VueRouter from 'vue-router'

import Teacher from '../components/teacher/Teacher.vue'
import TeacherHome from '../components/teacher/Home.vue'
import Login from '../components/Login.vue'
import tMessage from '../components/teacher/Message.vue'
import tInformation from '../components/teacher/Information.vue'
import StudentDetails from '../components/teacher/studentDetails.vue'
import tManage from '../components/teacher/manage/Manage.vue'
import tCorrectionDetails from '../components/teacher/manage/CorrectionDetails.vue'
import tArrangement from '../components/teacher/manage/Arrangement.vue'

import Manager from '../components/manager/Manager.vue'
import ManagerHome from '../components/manager/Home.vue'
import mMessage from '../components/manager/Message.vue'
import msInformation from '../components/manager/sInformation.vue'
import mtInformation from '../components/manager/tInformation.vue'
import TeacherDetails from '../components/manager/teacherDetails.vue'
import mManage from '../components/manager/manage/Manage.vue'
import mCorrectionDetails from '../components/manager/manage/CorrectionDetails.vue'
import mArrangement from '../components/manager/manage/Arrangement.vue'

import Test from '../components/test.vue'
import Test2 from '../components/test2.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/test',component:Test},
  { path: '/test2',name:'test2',component:Test2},
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login},
  { path: '/manager', component: Manager,redirect:'/manager/home',children: [
    { path: '/manager/home', component: ManagerHome },
    { path: '/manager/message', component: mMessage },
    { path: '/manager/sInformation', component: msInformation },
    { path: '/manager/tInformation', component: mtInformation },
    { path: '/manager/teacherDetails/:id', component: TeacherDetails },
    {
      path: '/manager/manage',
      component: mManage,
    },
    { path: '/manager/correctionDetails/:id', component: mCorrectionDetails },
    { path: '/manager/arrangement/:id', component: mArrangement },
 
  ]},
  {
    path: '/teacher',
    component: Teacher,
    redirect: '/teacher/home',
    children: [
      { path: '/teacher/home', component: TeacherHome },
      { path: '/teacher/message', component: tMessage },
      // { path: '/showData', component: showData },
      { path: '/teacher/information', component: tInformation },
      { path: '/teacher/studentDetails/:id', component: StudentDetails },
      {
        path: '/teacher/manage',
        component: tManage,
      },
      { path: '/teacher/correctionDetails/:id', component: tCorrectionDetails },
      { path: '/teacher/arrangement/:id', component: tArrangement },

    ]
  },


]

const router = new VueRouter({
  routes
})

export default router
