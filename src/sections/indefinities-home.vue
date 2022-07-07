<script setup>
import indefinitiesNavigation from "../components/indefinities-navigation.vue";
import indefinitiesPage from "../components/indefinities-page.vue";
import indefinitiesButton from "../components/indefinities-button.vue";

</script>

<template>

  <section class="indefinities-home">
    <indefinities-page>

      <indefinities-navigation />

      <div class="indefinities-home__content">
        <h1><em>indefinite, indefinities</em></h1>

        <p>
          Boston-based UX developer and illustrator who enjoys trying innovative beverage places.
        </p>

        <indefinities-button>
          view resume
        </indefinities-button>
      </div>
    
      <img 
      class="indefinities-home__arrow"
      src="../assets/arrow_drop_down.svg" />
    </indefinities-page>
  </section>
</template>

<style lang="scss" scoped>
.indefinities-home {

  &__content {
    padding-top: 25%;
  }

  &__arrow {
    position: absolute;
    top: calc(100vh - 80px);
    left: calc(50% - 14px);
    animation: jump-infinite 1.5s infinite;

    &:after {
      position: absolute;
      top: 10px;
      left: -10px;
      transform: rotateZ(45deg);
    }
  }


  @keyframes jump-infinite {
  0% {
    margin-top: 0;
    opacity: 25%;
  }
  50% {
    margin-top: 20px;
    opacity: 100%;
  }
  100% {
    margin-top: 0;
    opacity: 25%;
  }
}
}
</style>
