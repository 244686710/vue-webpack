<template>
    <div id="app">
        <div id="cover">
            <Header></Header>
            <p>{{count}}</p>
            <P>{{fullName}} {{counter}}</P>
            <router-link to="/login">login</router-link>
            <router-link to="/app">app</router-link>
            <!-- <Todo></Todo> -->
            <router-view></router-view>
            <Footer></Footer>
        </div>
    </div>
</template>
<script>
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
import Todo from './views/todo/todo.vue'
export default {
  components: {
    Header,
    Footer,
    Todo
  },
  data () {
    return {
      text: 'abcacds'
    }
  },
  methods: {
    ...mapMutations(['updateCount', 'a/updateText']),
    ...mapActions(['updataCountAsync'])
  },
  mounted () {
    this['a/updateText'](123)
    // dispatch 为专门用来派发action用的
    this.$store.dispatch('updataCountAsync', {
      num: 5,
      time: 2000
    })
    // this.updataCountAsync({
    //   num: 5,
    //   time: 2000
    // })
    // let i = 1
    // setInterval(() => {
    // //   this.$store.commit('updateCount', i++)
    //   this.updateCount(i++)
    // }, 1000)
  },
  computed: {
    // count () {
    //   return this.$store.state.count
    // },
    ...mapState(['count']),
    ...mapState({
      counter: (state) => state.count
    }),
    // fullName () {
    //   return this.$store.getters.fullName
    // }
    ...mapGetters(['fullName'])
  }
}
</script>
<style lang="stylus" scoped>
    #app{
       position absolute
       left 0
       top 0
       right 0
       bottom 0
    }
    #cover{
        position absolute
        left 0
        top 0
        right 0
        bottom 0
        background-color #999
        opacity .9
        z-index 1
    }
    p{
      text-align center
    }
</style>
