import Vue from 'vue'

const ChildComponent = {

  template: '<div>child component</div>',
  inject: ['yeye', 'value'], // 获取provide定义的属性
  mounted () {
    console.log(this.$parent.$options.name)
    console.log('yeye: ', this.yeye, this.value)
  }
}
const component = {
  name: 'comp',
  components: {
    ChildComponent
  },
  template: `
    <div :style="style">
      <div class="header">
        <slot name="header"/>
      </div>
      <div class="body">
        <slot name="body"/>
      </div>
      <child-component/>
    </div>
  `,
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #ddd'
      }
    }
  }
}

new Vue({
  el: '#root',
  components: {
    comOne: component
  },
  provide () {
    return {
      yeye: this,
      value: this.text
    }
  },
  data () {
    return {
      text: 'aaa'
    }
  },
  template: `
    <div>
      <com-one>
        <span slot="header">this is header</span>
        <span slot="body">this is body</span>
      </com-one>
      <input type="text" v-model="text" />
    </div>
  `
  // render (createElement) {
  //   return createElement('', {}, 'com-one')
  // }
})
