import Layout from '@/layout';

const elementRouter = {
  path: '/elementUi',
  component: Layout,
  redirect: '/elementUi/table',
  name: 'Example',
  meta: { title: 'elementui组件', icon: 'el-icon-s-help' },
  children: [
    {
      path: 'table',
      name: 'Table',
      component: () => import('@/views/elementUi/table/index'),
      meta: { title: 'Table', icon: 'table' }
    },
    {
      path: 'tree',
      name: 'Tree',
      component: () => import('@/views/elementUi/tree/index'),
      meta: { title: 'Tree', icon: 'tree' }
    },
    {
      path: 'select',
      name: 'select',
      component: () => import('@/views/elementUi/select/index'),
      meta: { title: 'select', icon: 'tree' }
    },
    {
      path: 'index',
      name: 'Form',
      component: () => import('@/views/elementUi/form/index'),
      meta: { title: 'Form', icon: 'form' }
    }
  ]
}

const vueRoutes = {
  component: Layout,
  path: '/vue',
  name: 'Vue',
  redirect: '/vue/list',
  meta: { title: 'Vue', icon: 'vue' },
  children: [
    {
      path: 'list',
      name: 'vueList',
      component: () => import('@/views/commonCollect/vue/index'),
      meta: { title: 'vue列表', icon: 'vue' }
    },
    {
      path: 'detail/:url',
      name: 'vueDetail',
      component: () => import('@/views/commonCollect/vue/detail/index.vue'),
      meta: { title: 'vue详细页面', icon: 'test-list' },
      hidden: true
    }]
}

const commonCollect = {
  path: '/common/collect',
  component: Layout,
  redirect: '/common/collect/javascript',
  name: 'commonCollect',
  meta: { title: '公共收集', icon: 'common' },
  children: [
    {
      path: 'javascript',
      name: 'Javascript',
      component: () => import('@/views/commonCollect/Javascript/index'),
      meta: { title: 'Javascript', icon: 'javascript' }
    },
    {
      path: 'css',
      name: 'css',
      component: () => import('@/views/commonCollect/css/index'),
      meta: { title: 'css', icon: 'css' }
    },
    {
      path: 'npm',
      name: 'npm',
      component: () => import('@/views/commonCollect/npm/index'),
      meta: { title: 'npm', icon: 'npm' }
    }
  ]
}

const testRouter = {
  path: '/test',
  component: Layout,
  redirect: '/test/job',
  name: 'test',
  meta: { title: '测试', icon: 'test' },
  children: [
    {
      path: 'job',
      name: 'testJob',
      component: () => import('@/views/Test/JobTest/index'),
      meta: { title: '日常工作测试', icon: 'job-test' }
    }]
}
export const customRouter = [
  elementRouter,
  vueRoutes,
  commonCollect,
  testRouter
]
