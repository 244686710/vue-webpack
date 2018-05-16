import Router from 'vue-router'

import routes from './routes'

export default () => {
  return new Router({
    routes,
    mode: 'history',
    // base: '/base/'
    // linkActiveClass
    // linkExactActiveClass
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
    fallback: true // 不支持history是自动切换成hush
    // parseQuery (query) {
    //   // ...
    // },

    // stringifyQuery (obj) {
    //   // ...
    // }
  })
}
