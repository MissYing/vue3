import { createRouter, createWebHashHistory } from 'vue-router'

const constantRouterMap = [
  {
    path: '/',
    name: 'index',
    meta: {
      title: '主页面'
    },
    component: () => import('@/pages/index')
  },
  {
    path: '/demo',
    name: 'demo',
    meta: {
      title: '测试页面'
    },
    component: () => import('@/pages/demo')
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes: constantRouterMap
})
