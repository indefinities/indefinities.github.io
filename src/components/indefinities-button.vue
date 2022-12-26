<template>
    <div class="indefinities-button">
      <div v-if="route">
        <router-link :to="route" tag="button">
          <span>
            <slot />
          </span>
        </router-link>
      </div>

      <div v-if="url">
        <button @click="toLink" formtarget="_blank" >
          <span>
            <slot />
          </span>
        </button>
      </div>
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
  },
  computed: {
    /**
     * The action the button should take to go to the link
     * @returns {string}
     */
    toLink() {
      return window.location.href = this.url;
    },
  },
}
</script>

<style lang="scss">
@import "../styles/_base.scss";

.indefinities-button {
    width: 30%;
    border-radius: 10px;
    padding: 1rem 2rem;
    background-color: $indefinities-light-blue;
    cursor: pointer;
    text-align: center;

    @media only screen and (max-width: 375px) {
      width: 100%;
    }

    span {
      color: $indefinities-dark-blue;
      font-weight: 500;
    }

    button {
        background: $indefinities-light-blue;
        border-radius: 10px;
        display: inline-block;
        border: 0;
        padding: 0;
        margin: 0;
        font-family: sans-serif;
        font-size: $indefinities-text;
        line-height: 1;

    }
}
</style>