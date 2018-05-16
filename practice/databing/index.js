import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      {{isActive ? 'active' : 'not active'}}
      <div v-html="html"></div>
    </div>
  `,
  data: {
    isActive: false,
    arr: [1, 3, 4],
    html: '<span>1234444</span>'
  }
})
