<template>
  <Todo />
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Todo from "~/components/todo.vue";
@Component({
  name: "Todos",
  components: {
    Todo
  }
})
export default class Todos extends Vue {}
</script>

<style lang="scss" scoped></style>
