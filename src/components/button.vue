<template>
    <div class="indefinities-button">
        <a :href="href" target="_blank">
            <slot />
        </a>
    </div>
</template>

<script>
export default {
  name: 'indefinities-button',
  props: {
    /**
       * The link the button will direct to
       * (external or internal link)
       */
    href: {
      type: String,
      required: true,
      default: null,
    },
  },
};
</script>

<style lang="scss">
@import '../styles/_base';

.indefinities-button {
    max-height: fit-content;
    max-width: fit-content;
    padding: 15px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    background-color: grey;
    border-radius: 10px;

    > * {
    margin: 0 5px;
    }

    a {
        text-decoration: none;
        color: white;
        font-size: $indefinities-p;
    }
}
</style>
