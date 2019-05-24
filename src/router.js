import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import(/* webpackChunkName: "demo" */ './views/Demo.vue')
    }
  ]
})
