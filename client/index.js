import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './app.vue'
import './assets/style/global.styl'
import createRouter from './config/router'
import createStore from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()

// store.subscribe((mutation, state) => {
//   console.log(mutation.type)
//   console.log(mutation.payload)
// })

store.subscribeAction((action, state) => {
  console.log(action.type)
  console.log(action.payload)
})
// router.beforeEach((to, from, next) => {
//   console.log('before each invoked')
// })
// router.beforeResolve((to, from, next) => {
//   console.log('before each beforeResolve')
// })
// router.afterEach((to, from, next) => {
//   console.log('before each afterEach')
// })

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
