<template>
  <div>
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
import Navbar from "~/components/navbar.vue";
@Component({
  name: "Default",
  components: {
    Navbar
  }
})
export default class Default extends Vue {}
</script>

<style lang="scss" scoped></style>
