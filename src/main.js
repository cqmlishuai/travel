// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//css样式初始化
import './assets/styles/reset.css'
//用于解决1像素显示问题
import './assets/styles/border.css'
//用于解决手机端300毫秒延迟
import fastClick from 'fastclick'
//用于适配
import 'lib-flexible'

Vue.config.productionTip = false
fastClick.attach(document.body);

//路由导航守卫
router.beforeEach((to,from,next) => {
  //更改页面title
  if(to.meta.title){
    document.title = to.meta.title
  }
  else {
    document.title = '标题'
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
