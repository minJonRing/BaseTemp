/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const domeRouter = {
  path: '/dome',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Dome',
  meta: {
    title: 'DOME',
    icon: 'component'
  },
  children: [

    {
      path: 'permission',
      component: () => import('@/views'),
      redirect: '/permission/page',
      alwaysShow: true, // will always show the root menu
      name: 'Permission',
      meta: {
        title: '权限',
        roles: ['admin', 'editor'] // you can set roles in root nav
      },
      children: [
        {
          path: 'directive',
          component: () => import('@/modules/zDome/views/permission/directive'),
          name: 'DirectivePermission',
          meta: {
            title: '权限切换-更新菜单'
            // if do not set roles, means: this page does not require permission
          }
        }
      ]
    },
    {
      path: 'tinymce',
      component: () => import('@/modules/zDome/views/components-demo/tinymce'),
      name: 'TinymceDemo',
      meta: { title: '富文本编辑器' }
    },
    {
      path: 'avatar-upload',
      component: () => import('@/modules/zDome/views/components-demo/avatar-upload'),
      name: 'AvatarUploadDemo',
      meta: { title: '文件上传' }
    },
    {
      path: 'sticky',
      component: () => import('@/modules/zDome/views/components-demo/sticky'),
      name: 'StickyDemo',
      meta: { title: '滚动固定' }
    },
    {
      path: 'mixin',
      component: () => import('@/modules/zDome/views/components-demo/mixin'),
      name: 'ComponentMixinDemo',
      meta: { title: 'Component Mixin' }
    },
    {
      path: 'back-to-top',
      component: () => import('@/modules/zDome/views/components-demo/back-to-top'),
      name: 'BackToTopDemo',
      meta: { title: '回到顶部' }
    },
    {
      path: 'excel',
      component: () => import('@/views'),
      redirect: '/excel/export-excel',
      name: 'Excel',
      meta: {
        title: 'Excel导出'
      },
      children: [
        {
          path: 'export-excel',
          component: () => import('@/modules/zDome/views/excel/export-excel'),
          name: 'ExportExcel',
          meta: { title: 'Excel导出' }
        },
        {
          path: 'export-selected-excel',
          component: () => import('@/modules/zDome/views/excel/select-excel'),
          name: 'SelectExcel',
          meta: { title: 'Export选择导出' }
        },
        {
          path: 'export-merge-header',
          component: () => import('@/modules/zDome/views/excel/merge-header'),
          name: 'MergeHeader',
          meta: { title: 'Excel导出(合并页眉)' }
        },
        {
          path: 'upload-excel',
          component: () => import('@/modules/zDome/views/excel/upload-excel'),
          name: 'UploadExcel',
          meta: { title: 'Excel上传显示' }
        }
      ]
    },
    {
      path: 'example',
      component: () => import('@/views'),
      redirect: '/example/list',
      name: 'Example',
      meta: {
        title: '富文本(应用)'
      },
      children: [
        {
          path: 'create',
          component: () => import('@/modules/zDome/views/example/create'),
          name: 'CreateArticle',
          meta: { title: '新建文章' }
        },
        {
          path: 'edit/:id(\\d+)',
          component: () => import('@/modules/zDome/views/example/edit'),
          name: 'EditArticle',
          meta: { title: '编辑文章', noCache: true, activeMenu: '/example/list' },
          hidden: true
        },
        {
          path: 'list',
          component: () => import('@/modules/zDome/views/example/list'),
          name: 'ArticleList',
          meta: { title: '文章列表' }
        }
      ]
    },
    {
      path: 'zip',
      component: () => import('@/views'),
      redirect: '/zip/download',
      alwaysShow: true,
      name: 'Zip',
      meta: { title: '压缩文件下载' },
      children: [
        {
          path: 'download',
          component: () => import('@/modules/zDome/views/zip/index'),
          name: 'ExportZip',
          meta: { title: '压缩文件下载' }
        }
      ]
    },
    {
      path: 'pdf',
      component: () => import('@/views'),
      redirect: '/pdf/index',
      children: [
        {
          path: 'index',
          component: () => import('@/modules/zDome/views/pdf/index'),
          name: 'PDF',
          meta: { title: 'PDF下载' }
        }
      ]
    },
    {
      path: 'pdf/download',
      component: () => import('@/modules/zDome/views/pdf/download'),
      hidden: true
    },
    {
      path: 'theme',
      component: () => import('@/views'),
      children: [
        {
          path: 'index',
          component: () => import('@/modules/zDome/views/theme/index'),
          name: 'Theme',
          meta: { title: '主题切换' }
        }
      ]
    }
  ]
}

export default domeRouter
