<template>
  <div id="app">
    <navigation />
    <router-view/>
  </div>
</template>

<script>
import navigation from './components/navigation.vue';

export default {
  components: {
    navigation,
  },
};
</script>

<style lang="scss">
@import './styles/_base';
</style>
