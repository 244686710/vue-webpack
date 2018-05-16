export default { // 处理异步需要用到action
  updataCountAsync (store, data) {
    setTimeout(() => {
      store.commit('updateCount', data.num)
    }, data.time)
  }
}
