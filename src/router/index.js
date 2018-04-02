import Vue from 'vue'
import Router from 'vue-router'
import Skills from '@/components/Skills/Skills'
import About from '@/components/About/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'skills',
      component: Skills
    },
    {
      path: '/about/:name',
      name: 'about',
      component: About
    }
  ]
})
