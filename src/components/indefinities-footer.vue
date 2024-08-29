<template>
    <div class="indefinities-footer">
        <div class="indefinities-footer__usernames">
          <div class="indefinities-footer__socials">
            <img src="../assets/icons/contact/discord.svg" width="24" />
            <p>ny.at</p>
          </div>
          <div class="indefinities-footer__socials">
            <img src="../assets/icons/contact/mail.svg" width="24" />
            <a href="mailto:natalie.d.hsu@gmail.com">natalie.d.hsu@gmail.com</a>
          </div>
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

        <p>indefinities ©️ {{ getCurrentYear }}</p>
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
  text-align: center;
  padding-bottom: 5vh;

  &__section {
    padding: 5%;

    &:nth-last-child(1) {
      padding-bottom: unset;
    }
  }

  &__usernames {
    display: inline-flex;
    flex-flow: column wrap;
  }

  &__socials {
    display: inline-flex;
    flex-flow: row wrap;
    align-items: center;
  }
}
</style>