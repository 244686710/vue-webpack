<template>
  <section class="real-app">
    <input type="text" class="add-input" autofocus="autofocus" placeholder="接下去要做什么?" @keyup.enter="addTodo">
    <Item :todo="todo" v-for="todo in filterTodos" :key="todo.id" @del="deleteTodo" />
    <Tab :filter="filter" :todos="todos" @toggle="toggleFilter" @clear='clearAllCompleted' />
  </section>
</template>

<script>
  import Item from './item.vue'
  import Tab from './tab.vue'
  let id = 0
  export default {
    components: {
      Item,
      Tab
    },
    data () {
      return {
        todos: [],
        filter: 'all'
      }
    },
    computed: {
      filterTodos () {
        if (this.filter === 'all') {
          return this.todos
        }
        const completed = this.filter === 'completed'
        return this.todos.filter(todo => completed === todo.completed)
      }
    },
    methods: {
      addTodo (e) {
        this.todos.unshift({
          id: id++,
          content: e.target.value.trim(),
          completed: false
        })
        e.target.value = ''
      },
      deleteTodo (id) {
        this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
      },
      toggleFilter (state) {
        this.filter = state
      },
      clearAllCompleted  () {
        // this.todos = this.todos.filter( todo => todo.completed === false)
        this.todos = this.todos.filter(todo => !todo.completed)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .real-app {
    width 425px
    margin 0 auto
    background #fff
    padding 20px
    border-radius 5px
  }

  .add-input {
    padding 0 10px
    width 400px
    height 40px
    border-radius 5px
  }

</style>
