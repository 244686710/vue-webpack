<template>
    <section class="real-app">
        <input 
            type="text"
            class="add-input"
            autofocus="autofocus"
            placeholder="接下去要做什么?"
            @keyup.end="addTodo"
        >
        <Item :todo="todo"></Item>
        <Tab></Tab>
    </section>
</template>

<script>
import Item from './item.vue'
import Tab from './tab.vue'
export default {
    components: {
        Item,
        Tab
    },
    data() {
        return {
            todo: {
                id: 0,
                content: 'this is todo',
                completed: false
            }
        }
    },
    methods: {
        addTodo () {

        }
    }
}
</script>

<style lang="stylus" scoped>
    .real-app{
        width 500px
        margin 0 auto
    }
    .add-input{
        padding 0 10px
        width 400px
        height 40px
        border-radius 5px
    }
</style>
