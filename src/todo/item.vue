<template>
  <div :class="['todo-item', todo.completed ? 'completed': '']">
      <input 
        type="checkbox" name="" id=""
        class="toggle"
        v-model="todo.complated"
      >
      <label for="">{{todo.content}}</label>
      <button class="destirt" @click="deleteTodo"></button>
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

      }
  }
}
</script>
<style lang="stylus" scoped>

</style>

