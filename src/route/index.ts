import {createRouter, createWebHashHistory} from "vue-router"

const routes = [
  {
    path: "/",
    redirect: "service"
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/pages/home/home.vue")
  },
  {
    path: "/service",
    name: "service",
    redirect: "/service/login",
    component: () => import('@/pages/login/Service.vue'),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import('@/pages/login/components/Login.vue')
      },
      {
        path: "register",
        name: "register",
        component: () => import('@/pages/login/components/Register.vue')
      },
      {
        path: "reset",
        name:"reset",
        component:()=> import('@/pages/login/components/Reset.vue')
      }
    ]
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
