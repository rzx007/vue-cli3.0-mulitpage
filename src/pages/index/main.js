import Vue from 'vue'
import App from './App.vue'
import router from './router'
import helloWorld from '@/components/HelloWorld.vue'
Vue.config.productionTip = false

Vue.component('hello-world',helloWorld)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
