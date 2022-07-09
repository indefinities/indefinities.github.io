<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import indefinitiesNavigation from "./components/indefinities-navigation.vue";

import {
  indefinitiesHome,
  indefinitiesAbout,
  indefinitiesWorks,
  indefinitiesContact,
  indefinitiesFeatured,
} from './sections/sections-export.js';

</script>

<template>
  <indefinities-navigation />
  <indefinities-home />
  <indefinities-about />
  <indefinities-featured />
  <indefinities-works />
  <indefinities-contact />
</template>

<style lang="scss">
@import 'styles/_base.scss';

#app {
  font-family: Avenir, sans-serif;
}
</style>
