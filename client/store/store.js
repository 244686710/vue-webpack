import Vuex from 'vuex'

import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  const store = new Vuex.Store({
    strict: isDev, // 限制无法从外部修改数据
    state: defaultState,
    mutations,
    actions,
    getters,
    modules: {
      a: {
        namespaced: true, // 命名空间
        state: {
          text: 1
        },
        mutations: {
          updateText (state, text) {
            console.log('a.state', state)
            state.text = text
          }
        }
      },
      b: {
        state: {
          text: 2
        }
      }
    }
  })

  if (module.hot) { // vuex 热更替
    module.hot.accept([
      './state/state',
      './mutations/mutations',
      './getters/getters',
      './actions/actions'
    ], () => {
      const newState = require('./state/state').default
      const newMutations = require('./mutations/mutations').default
      const newGetters = require('./getters/getters').default
      const newActions = require('./actions/actions').default

      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        getters: newGetters,
        actions: newActions
      })
    })
  }

  return store
}
