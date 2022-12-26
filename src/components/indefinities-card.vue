<template>
  <div class="indefinities-card">
    <img :src="image"
         class="indefinities-card__image"/>

    <div class="indefinities-card__content">
      <h2>
        <slot name="title" />
      </h2>

      <div class="indefinities-card__pills">
        <indefinities-pill
            v-for="(skill, index) in skillStack"
            :key="index"
            :icon="skill.icon"
            :url="skill.url"
        >
          {{ skill.label }}
        </indefinities-pill>
      </div>

      <p>
        <slot name="desc" />
      </p>
    </div>
  </div>
</template>

<script>
import indefinitiesPill from "./indefinities-pill.vue";

export default {
  name: "indefinities-card",
  components: {
    indefinitiesPill
  },
  props: {
    image: {
      type: String,
      default: '',
      required: false,
    },
    skillStack: {
      type: Array,
      default: [],
      required: true,
    },
  }
}
</script>

<style lang="scss">
@import "../styles/_base.scss";

.indefinities-card {
  margin: 1% 0;
  border-radius: 10px;
  background-color: $indefinities-light-blue;
  color: $indefinities-dark-blue;

  &__image {
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  &__content {
    padding: 20px;
  }

  &__pills {
    display: flex;
    flex-flow: row wrap;
  }
}
</style>