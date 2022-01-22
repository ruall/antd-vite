import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import main from './main/index'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Main',
    component: () => import('/@/views/main/index.vue'), // 注意这里要带上 文件后缀.vue
  },
  ...main,
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
