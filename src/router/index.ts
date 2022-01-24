import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '/@/layout/index.vue'
import main from './main/index'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    component: Layout, // 注意这里要带上 文件后缀.vue
    redirect: '/index',
    meta: { title: '管理平台' },
    children: [
      {
        path: '/index',
        component: () => import('/@/views/main/index.vue'),
        name: 'home',
        meta: {
          title: '首页',
        },
      },
    ],
  },
  {
    path: '/login',
    component: () => import('/@/views/login/index.vue'),
    name: 'Login',
    meta: { title: '登录' },
  },
  ...main,
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
