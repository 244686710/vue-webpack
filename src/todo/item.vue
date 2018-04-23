<template>
  <div :class="['todo-item', todo.completed ? 'completed': '']">
      <input 
        type="checkbox" name="" id=""
        class="toggle"
        v-model="todo.completed"
      >
      <label for="">{{todo.content}}</label>
      <button class="destirt" @click="deleteTodo">删除</button>
  </div>
</template>

<script>
export default {
  props: {
      todo: {
          type: Object,
          required: true
      }
  },
  methods: {
      deleteTodo() {
          this.$emit('del', this.todo.id)
      }
  }
}
</script>
<style lang="stylus" scoped>
    .todo-item{
        padding 10px
        border-bottom 1px solid #ddd
    }
</style>

