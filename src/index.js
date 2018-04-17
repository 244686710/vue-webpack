import Vue from 'vue'
import App from './app.vue'
import '../src/assets/style/test.css'
import '../src/assets/style/test-stylus.styl'
const root = document.createElement('div')
document.body.appendChild(root)
new Vue({
    render: (h) => h(App)
}).$mount(root)