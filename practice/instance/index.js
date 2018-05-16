import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: `<div>{{text}}</div>`,
  data () {
    return {
      text: 0
    }
  }
})

app.$mount('#root')

setInterval(() => {
  app.text += 1
}, 1000)
console.log(app.$data)
console.log(app.$props)
console.log(app.$el)
console.log(app.$options)
app.$options.render = (h) => {
  return h('div', {}, 'new render function')
}
console.log(app.$root === app)

// app.$forceUpdate() 重新渲染，性能比较低
// app.$set() app.$delete()
// app.$nextTick() vue 在下一次dom更新是触发
