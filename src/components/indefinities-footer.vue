<template>
    <div class="indefinities-footer">
      <div class="indefinities-footer__content">
        <div class="indefinities-footer__usernames indefinities-footer__section">
        <span>
          <img src="../assets/icons/contact/discord.svg" width="24" />
          <p>indefinties#8888</p>
        </span>
          <span>
          <img src="../assets/icons/contact/mail.svg" width="24" />
          <a href="mailto:natalie.d.hsu@gmail.com">natalie.d.hsu@gmail.com</a>
        </span>
        </div>

<!--        Turn this row into only icons in mobile view-->
        <div class="indefinities-footer__socials indefinities-footer__section">
          <indefinities-pill
              v-for="(link, index) in links"
              :key="index"
              :icon="link.icon"
              :url="link.url"
              outlined
          >
            {{ link.label }}
          </indefinities-pill>
        </div>

        <span class="indefinities-footer__section">
        <p>indefinities ©️ {{ getCurrentYear }}</p>
      </span>
      </div>
      </div>

</template>

<script lang="js">
import links from "../data/links.js";
import IndefinitiesPill from "./indefinities-pill.vue";

export default {
    name: 'indefinities-footer',
  components: {
      IndefinitiesPill
  },
  data() {
        return {
          links
        }
    },
    computed: {
      /**
       * Gets the current year
       * @returns {number}
       */
        getCurrentYear() {
          return new Date().getFullYear();
        }
    }
}
</script>

<style lang="scss">
.indefinities-footer {
  width: 100%;
  background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1));

  &__content {
    width: fit-content;
    display: block;
    margin: auto;
    text-align: center;
  }

  &__section {
    padding: 5%;

    &:nth-last-child(1) {
      padding-bottom: unset;
    }
  }

  &__usernames {
    width: fit-content;
    display: block;
    margin: auto;

    span {
      display: flex;
      flex-direction: row;
    }
  }

  &__socials {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
</style>