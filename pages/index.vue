<template>
  <h2>HOME PAGE</h2>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component({
  name: "HomePage",
  components: {}
})
export default class HomePage extends Vue {}
</script>

<style scoped>
h2 {
  text-align: center;
  color: crimson;
}
</style>
