<template>
  <div id="app">
    <Slug v-if="windowWidth <= 700" />
    <Content v-else />
  </div>
</template>

<script>
import Slug from "./components/Slug";
import Content from "./components/Content";
export default {
  name: "App",
  components: {
    Slug,
    Content,
  },
  data: () => ({
    windowWidth: null,
  }),
  mounted() {
    this.windowWidth = window.innerWidth;
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
};
</script>

<style>
</style>
