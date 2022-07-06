<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import indefinitiesHome from './sections/indefinities-home.vue'
import indefinitiesAbout from './sections/indefinities-about.vue'
import indefinitesWorks from './sections/indefinites-works.vue'
</script>

<template>
  <indefinities-home />
  <indefinities-about />
  <indefinites-works />
</template>

<style lang="scss">
@import 'styles/_base.scss';

#app {
  font-family: Avenir, sans-serif;
}
</style>
