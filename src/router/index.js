import Vue from 'vue'
import Router from 'vue-router'
import Login from './login'
import Mcs from './mcs-route'
import Dui from '../views/dui/admin-route'
Vue.use(Router)
let routes = new Set([...Login,...Mcs,...Dui]);
const router = new Router({
  routes
})
export default router



