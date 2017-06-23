// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
//import VueAntd from 'vue-antd'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css';
import Hello from './components/Hello'
import New from './components/New'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(iView)
Vue.use(VueRouter)
const router=new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {path:'/',component:Hello},
    {path:'/todo/:id',component:New,name:'todo'}
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
