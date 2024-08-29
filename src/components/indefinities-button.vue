<template>
    <div class="indefinities-button">
        <router-link v-if="route" :to="route">
            <slot />
        </router-link>

        <a v-if="url" :href="url" target="_blank" >
            <slot />
        </a>
    </div>
</template>

<script lang="js">
export default {
  name: 'indefinities-button',
  props: {
    /**
     * The route which the button should direct to
     */
    route: {
      type: String,
      default: '',
      required: false,
    },

    /**
     * The URL of the page which the button should direct to
     */
    url: {
      type: String,
      default: '',
      required: false,
    }
  }
}
</script>

<style lang="scss">
@import "../styles/_base.scss";

.indefinities-button {
    border-radius: 10px;
    padding: 1rem 2rem;
    background-color: $indefinities-light-blue;
    cursor: pointer;
    text-align: center;
    font-family: sans-serif;
    font-size: $indefinities-text;
    line-height: 1;

    a {
      color: $indefinities-dark-blue;
      font-weight: 500;
    }
}
</style>