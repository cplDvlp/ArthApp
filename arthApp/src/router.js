import Vue from 'vue'
import Router from 'vue-router'
import Calculate from './views/Calculate.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/calculate',
      name: 'calculate',
      component: Calculate
    }
  ]
})
