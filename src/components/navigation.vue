<template>
    <div class="indefinities-navigation">
        <router-link
        class="indefinities-navigation__route"
        v-for="(route, index) in routes"
        :key="index"
        :to="route.path">
        {{ route.name }}
        </router-link>
    </div>
</template>

<script>
import { routes } from '../router/index';

export default {
  name: 'navigation',
  data() {
    return {
      routes,
    };
  },
};
</script>

<style lang="scss">
@import '../styles/_base';

.indefinities-navigation {
  @extend %fade-down-in-fast;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  max-width: 300px;
  margin-left: auto;
  margin-top: 25px;
  margin-right: 40px;

  &__route {
    color: black;
    text-decoration: none;
    font-size: $indefinities-p;
  }
}
</style>
