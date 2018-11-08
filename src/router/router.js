export default [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '个人中心'
    },
    component: resolve => require(['@/pages/home/home'],resolve)
  }

]

