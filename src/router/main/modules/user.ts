import Layout from '/@/layout/index.vue'

export default {
  path: '/user',
  component: Layout,
  meta: { title: '用户管理', icon: 'setting-outlined' },
  redirect: { path: '/user/list' },
  children: [
    {
      path: '/user/list',
      component: () => import('/@/views/user/index.vue'),
      name: 'UserList',
      meta: { title: '信息列表', icon: 'setting-outlined' },
    },
  ],
}
