<template>
  <div class="nav">
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/todos"
      >Todo <span>{{ todos.length }}</span></nuxt-link
    >
    <nuxt-link to="/faq">FAQ</nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Getter, Vue } from "nuxt-property-decorator";
import { namespaced, NS_TODOS } from "~/utils/store/namespace";
import { TODOS } from "~/utils/store/getter.names";
@Component({
  name: "Navbar"
})
export default class Navbar extends Vue {
  @Getter(namespaced(NS_TODOS, TODOS)) todos: any;
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  height: 80px;
  width: 100%;
  justify-content: center;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    color: black;
    text-transform: uppercase;
    margin: 0px 10px;
    font-size: 20px;
    text-decoration: none;
    padding: 5px 20px;
    background-color: transparent;
    border-radius: 3px;
    transition: 0.5s;
    span {
      background-color: crimson;
      color: white;
      height: 15px;
      width: 15px;
      font-size: 10px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      top: 8px;
      left: 3px;
      transition: 0.5s;
    }
  }
  a:hover {
    color: white;
    background-color: crimson;
    span {
      top: 0px;
      background-color: white;
      color: crimson;
    }
  }
}
</style>
