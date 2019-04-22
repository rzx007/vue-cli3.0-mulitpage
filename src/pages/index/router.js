import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import about from './views/Home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/abouts',
      name: 'abouts',
      component:about
    }
  ]
})
