import Vue from 'vue'
import Router from 'vue-router'
import PhoneCalls from './components/PhoneCalls.vue'
import FrontPage from './components/FrontPage.vue'
import Clients from './components/Clients.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'FrontPage',
      component: FrontPage
    },
    {
      path: '/Clients',
      name: 'Clients',
      component: Clients
    },
    {
      path: '/PhoneCalls',
      name: 'PhoneCalls',
      component: PhoneCalls
    }
  ]
})
