import {createRouter, createWebHashHistory} from "vue-router"

const routes = [
  {
    path: "/",
    redirect: "home"
  },
  {
    path: "/home",
    name: "home",
    redirect: "/home/article",
    component: () => import("@/pages/home/Home.vue"),
    children: [
      {
        path: "article",
        name:"article",
        component:()=>import("@/pages/home/components/Article.vue")
      },
      {
        path: "aboutus",
        name:"aboutUs",
        component:()=>import("@/pages/home/components/AboutUs.vue")
      },
      {
        path:"user",
        name:"user",
        component:()=> import('@/pages/home/components/User.vue')
      }
    ]
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
  },
  {
    path: "/publish",
    name:"publish",
    component:()=>import("@/pages/home/components/Publish/Publish.vue")
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
