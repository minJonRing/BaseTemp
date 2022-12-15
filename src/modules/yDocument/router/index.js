import Layout from '@/layout'
export default {
  path: '/tqr',
  component: Layout,
  name: 'Tqr',
  meta: {
    title: '自定义模板使用',
    icon: 'user'
  },
  children: [
    {
      path: 'list',
      component: () => import('@/modules/yDocument/views/tqr/list'),
      name: 'TqrList',
      meta: {
        title: '自定义模板使用'
        // if do not set roles, means: this page does not require permission
      }
    },
    {
      path: 'add',
      component: () => import('@/modules/yDocument/views/tqr/add'),
      name: 'TqrAdd',
      meta: {
        title: '自定义模板使用-新增'
        // if do not set roles, means: this page does not require permission
      }
    },
    {
      path: 'edit',
      component: () => import('@/modules/yDocument/views/tqr/edit'),
      name: 'TqrEdit',
      meta: {
        title: '自定义模板使用-编辑'
        // if do not set roles, means: this page does not require permission
      }
    },
    {
      path: 'see',
      component: () => import('@/modules/yDocument/views/tqr/see'),
      name: 'TqrSee',
      meta: {
        title: '自定义模板使用-查看'
        // if do not set roles, means: this page does not require permission
      }
    }
  ]
}