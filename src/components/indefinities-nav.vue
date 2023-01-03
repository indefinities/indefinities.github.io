<template>
    <div class="indefinities-nav">
      <div class="indefinities-nav__banner">
        <div class="indefinities-nav__icon" @click="navActions()">
          <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 36h36v-4H6v4Zm0-10h36v-4H6v4Zm0-14v4h36v-4H6Z" fill="#9DC0D9"/>
          </svg>
        </div>
      </div>

        <div class="indefinities-nav__menu"
             data-aos="fade-right"
             v-if="openMenu">
          <ul>
            <li>

            </li>
          </ul>
        </div>
    </div>
</template>

<script lang="js">
import { routes } from "../router.js";

export default {
  name: 'indefinities',
  data() {
    return {
      routes,
      openMenu: false,
    }
  },
  methods: {
    /**
     * Actions to execute when the menu is open.
     */
    navActions() {
      this.openMenu = !this.openMenu;
      window.onscroll = () => {

        // if the menu is open, then disable scrolling.
        if (this.openMenu) {
          window.scrollTo(document.documentElement.scrollTop, document.documentElement.scrollLeft);
        }
      };
    }
  },
}
</script>

<style lang="scss" scoped>
.indefinities-nav {
  height: fit-content;

  &__banner {
    z-index: 1;
    min-width: 100%;
    min-height: 5vh;
    position: fixed;
    top: 0;
    background-image: linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0));
  }

  &__icon {
    padding: 2%;
    cursor: pointer;
  }

  &__menu {
    display: inline-block;
    width: 50vw;
    height: 100vh;
    background-color: black;
    background-blend-mode: multiply;
  }
}
</style>