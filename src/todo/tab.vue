<template>
  <div class="helper">
      <span class="left">{{unFinishedTodoLength}} items left</span>
      <span class="tabs">
          <span 
            v-for="state in states"
            :key="state"
            :class="[state, filter === state ? 'actived': '']"
            @click="toggleFilter(state)"
          >
              {{state}}
          </span>
      </span>

      <span class="clear" @click="clearAllComleted">clear</span>
  </div>
</template>
<script>
export default {
    props: {
        filter: {
            type: String,
            required: true
        },
        todos: {
            type: Array,
            required: true
        }
    },
  data() {
      return {
          states: ['all', 'active', 'completed']
      }
  },
  computed: {
      unFinishedTodoLength () {
          return this.todos.filter(todo => !todo.completed).length
      }
  },
  methods: {
      toggleFilter(state) {
          this.$emit('toggle', state)
      },
      clearAllComleted() {
          
      }
  }
  
}
</script>

<style lang="stylus" scoped>
    .helper{
        padding-top 20px 
    }
    .tabs span {
        padding 5px
        margin 0 5px
        cursor pointer
    }
    .actived{
        border-radius 2px
        border 1px solid #333
    }
</style>

