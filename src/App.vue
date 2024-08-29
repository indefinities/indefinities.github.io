<script setup>
import IndefinitiesHome from "./sections/indefinities-home.vue";
import IndefinitiesFooter from "./components/indefinities-footer.vue";
import IndefinitiesNav from "./components/indefinities-nav.vue";
</script>

<template>
  <indefinities-nav />
  <indefinities-home />
  <indefinities-footer />
</template>

<style lang="scss">
@import "styles/_base.scss";
#app {
  overflow-x: clip;
}
</style>
