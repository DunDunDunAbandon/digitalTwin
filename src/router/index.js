import Vue from 'vue'
import Router from 'vue-router'
import DigitalTwin from '@/components/DigitalTwin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DigitalTwin',
      component: DigitalTwin
    }
  ]
})
