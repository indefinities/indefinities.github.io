<template>
  <div class="indefinities-home">
    <div class="indefinities-home__content">
      <div class="indefinities-home__introduction">
        <h1>
          Hi I’m Nat!
        </h1>
        <h2>
          I am a Boston-based UX developer and illustrator who enjoys trying innovative boba places.
        </h2>

        <indefinities-button href="https://tinyurl.com/nathsu-resume">
          view resume
        </indefinities-button>
      </div>

    </div>
  </div>
</template>

<script>
import indefinitiesButton from '@/components/button.vue';

export default {
  name: 'home',
  components: {
    indefinitiesButton,
  },
};
</script>

<style lang="scss">
@import '../styles/_base';

.indefinities-home {
  &__content {
    @extend %fade-down-in-medium;
    max-width: 80vw;
    display: block;
    margin: 150px auto;
  }

  &__introduction {
    max-width: 40vw;
  }
}

</style>
