import Layout from '/@/layout/appMain.vue'

export default {
  path: '/login',
  component: Layout,
  meta: { title: '登录', icon: 'setting-outlined' },
  redirect: { path: '/login' },
  children: [
    {
      path: '/login',
      component: () => import('/@/views/login/index.vue'),
      name: 'Login',
      meta: { title: 'APP账号绑定', icon: 'setting-outlined' },
    },
  ],
}
