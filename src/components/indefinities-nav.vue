<template>
    <div class="indefinities-nav">
      <div class="indefinities-nav__banner"
           v-if="!openMenu">
        <div class="indefinities-nav__icon"
             @click="navActions()">
          <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 36h36v-4H6v4Zm0-10h36v-4H6v4Zm0-14v4h36v-4H6Z" fill="#9DC0D9"/>
          </svg>
        </div>
      </div>

        <div class="indefinities-nav__menu"
             data-aos="fade-right"
             v-if="openMenu">
          <div class="indefinities-nav__close">
            <button
                @click="this.openMenu = !this.openMenu"
                aria-label="Close Menu"
                type="button"
                data-close>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="indefinities-nav__menu__content">
            <ul>
              <li v-for="(r, index) in routes"
                  :key="index">
                <router-link :to="r.path">
                  {{ r.name }}
                </router-link>
              </li>
            </ul>
          </div>
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
  position: fixed;
  width: 100%;
  z-index: 100;
  top: 0;
  left: 0;

  &__banner {
    top: 0;
    background-image: linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0));
  }

  &__icon {
    padding: 2%;
    cursor: pointer;
  }

  &__close {
    width: fit-content;
    margin-left: auto;
    margin-right: 20px;

    button {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
    }
  }

  &__menu {
    z-index: 1;
    margin-right: 0;
    width: 100%;
    height: 100vh;
    background-color: black;
    font-size: 48px;

    ul {
      list-style-type: none;
      width: fit-content;
      margin: 20vh auto 0;

      li {
        width: fit-content;
        margin-top: 5vh;
        margin-right: 0;
      }
    }

    a {
      font-size: 64px;
    }
  }
}
</style>