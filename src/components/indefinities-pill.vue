<template>
  <div class="indefinities-pill"
  :class="outlined ? 'indefinities-pill__outlined' : 'indefinities-pill__default'">
    <a :href="url">
      <img :src="`icons/${icon}.svg`" height="24"/>
      <span><slot /></span>
    </a>
  </div>
</template>

<script>
export default {
  name: "indefinities-pill",
  props: {
    /**
     * The icon which is displayed before the label
     */
    icon: {
      type: String,
      default: '',
      required: true,
    },

    /**
     * If the pill is in outlined style
     */
    outlined: {
      type: Boolean,
      default: false,
      required: false,
    },

    /**
     * The URL which the pill will direct to
     */
    url: {
      type: String,
      default: '',
      required: true,
    },
  }
}
</script>

<style lang="scss">
@import "../styles/_base.scss";

// TODO: add a hover animation to a different color

.indefinities-pill {
  padding: 10px 20px;
  border-radius: 30px;

  a {
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }

  span {
    margin-left: 10px;
  }

  &__default {
    background-color: $indefinities-dark-blue;
  }

  &__outlined {
    border: 1px solid $indefinities-light-blue;
  }

}
</style>