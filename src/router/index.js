import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ForgotPasswordView from '../views/ForgotPasswordView.vue'
import SignUp from '../views/SignUp.vue'
import AdminPanel from '../views/admin/AdminPanel.vue'
import AdminDashboard from '../views/admin/AdminDashboard.vue'

import NewStudent from '../views/admin/enroll/NewStudent.vue'
import MultipleEnroll from '../views/admin/enroll/MultipleEnroll.vue'
import Branches from '../views/admin/BranchDash.vue'
//import for students####
import ActiveStud from '../views/admin/student/activeStudent/ActiveStudent.vue'
import InactiveStud from '../views/admin/student/InactiveStudent.vue'
import StudentProfile from '../views/admin/student/activeStudent/StudentProfile.vue'
import Promotion from '../views/admin/student/Promotion.vue'
//impots for academics session
import Academic from '../views/admin/academics/AcademicSession.vue'
import SubjectView from '../views/admin/academics/SubjectView.vue'
import AssignSubjectView from '../views/admin/academics/AssignSubjectView.vue'
import ClassSection from '../views/admin/academics/class&Section/ClassSection.vue'


import TodayAttend from '../views/admin/attendance/TodayAttend.vue'
import PastAttend from '../views/admin/attendance/PastAttend.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPasswordView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    //side nav
    //The admin  route part
    {
      path: '/admin',
      name: 'admin',
      component: AdminPanel,
      children: [
        {path: "", redirect: 'admin/dashboard'},
        {path: "dashboard", component: AdminDashboard},
        {path: "/admin/branches", component: Branches},

        {
          path: "enroll",
          children: [
            {path: "new-student", component: NewStudent},
            {path: "multiple-enroll", component: MultipleEnroll}
          ]
        },

        {
          path: "student",
          children: [
            {path: "active-student", component: ActiveStud},
            {path: "inactive-student", component: InactiveStud},
            {path: "promotion", component:Promotion },
            {path: "student-profile", component: StudentProfile}
          ]
        },

        {
          path: "academics", children: [
            {path: "academic-session", component: Academic},
            {
              path: "subjects", children: [
                {path: "", component: SubjectView},
                {path: "assign", component: AssignSubjectView},
              ]
            },
            {path:"class-session", component:ClassSection}
          ]
        },

        {
          path: "attendance",
          children: [
            {path: "today-attendance", component: TodayAttend},
            {path: "past-attendance", component: PastAttend}
          ]
        },

      ]
    },
    //admin route part here

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
