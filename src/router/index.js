import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import about from '../components/pages/about'
import phone from '../components/pages/phone'
import login from '../components/pages/login'
import editor from '../components/pages/editor'
import baseForm from '../components/pages/baseForm'
import charts from '../components/pages/charts'
import drag from '../components/pages/drag'
import home from '../components/commons/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/system',
      component: home,
      name: 'system',
      children: [
        {
          path: '/phone',
          component: phone
        },
        {
          path: '/',
          redirect: '/about'
        },
        {
          path: '/about',
          name: 'about',
          component: about
        },
        {
          path: '/editor',
          name: 'editor',
          component: editor
        },
        {
          path: '/baseForm',
          name: 'baseForm',
          component: baseForm
        },
        {
          path: '/charts',
          name: 'charts',
          component: charts
        },
        {
          path: '/drag',
          name: 'drag',
          component: drag
        }
      ]
    }
  ]
})
