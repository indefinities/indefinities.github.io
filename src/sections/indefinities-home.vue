<template>
  <section class="indefinities-home">
      <div
          class="indefinities-home__landing"
          data-aos="fade-up"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out">

          <div class="indefinities-home__cover">
          </div>

        <div class="indefinities-home__landing__content">
          <h1>indefinite, indefinities ✨</h1>

          <p>
            ☀️ daytime UX developer, <br>
            🌙 nighttime digital illustrator, <br>
            😎 full-time café hopper <br>
          </p>

          <indefinities-button
              v-for="(option, index) in options"
              :key="index"
              :route="option.path">
            {{ option.name }}
          </indefinities-button>

          <indefinities-button url="/Hsu_Natalie_Resume.pdf">
            VIEW RESUME
          </indefinities-button>
        </div>
          <indefinities-down-arrow />
      </div>


      <div class="indefinities-home__section"
           data-aos="fade-up"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out" >

        <div class="indefinities-home__inner-content">
          <h1>
            Nat Hsu is...
          </h1>
          <p>... currently wandering the city of <strong>Boston, Massachusetts</strong></p>

          <img class="indefinities-home__image" src="/nat-hawaii.jpg" />

          <p>
            I’m a part-time graduate student in the
            <a href="https://camd.northeastern.edu/program/information-design-and-data-visualization-ms/" target="_blank">
              Information Design and Data Visualization, MS</a> program at <a href="https://northeastern.edu" target="_blank">Northeastern University</a>.
          </p>

          <p>
            Currently seeking full-time opportunities designing and developing intuitive, responsive, and accessible user
            experiences for mobile and desktop web applications.
          </p>
        </div>

          <indefinities-down-arrow />
      </div>


    <div class="indefinities-home__section"
         data-aos="fade-up"
         data-aos-duration="1000"
         data-aos-easing="ease-in-out" >
      <h1>
        PROJECT <br>
        SPOTLIGHT
      </h1>

      <indefinities-card
          v-for="(item, index) in spotlight"
          :key="index"
          :image="`/projects/${item.file}`"
          :link="item.url"
          :skill-stack="item.skillStack"
      >
        <template #title>
          {{ item.title }}
        </template>
        <template #desc>
          {{ item.desc }}
        </template>
      </indefinities-card>

    </div>

  </section>
</template>

<script lang="js">
import indefinitiesButton from "../components/indefinities-button.vue";
import IndefinitiesDownArrow from "../components/indefinities-down-arrow.vue";
import IndefinitiesCard from "../components/indefinities-card.vue";

import spotlight from "../data/spotlight.js";

export default {
  name: 'indefinities-home',
  components: {
    IndefinitiesCard,
    IndefinitiesDownArrow,
    indefinitiesButton,
  },
  data() {
    return {
      spotlight,
      options: [
        {
          path: '/about/',
          name: 'ABOUT ME',
        },
        {
          path: '/works/',
          name: 'WORKS',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import "../styles/_base.scss";

.indefinities-home {
  width: 100%;

  &__landing {
    min-height: fit-content;

    &__content {
      margin: 5vh 15vw;

      .indefinities-button {
        margin-top: 2%;
      }
    }
  }

  &__cover {
    height: 45vh;
    min-width: 100%;
    background-color: black;
  }

  &__section {
    min-height: $indefiities-page-height;
    display: block;
    margin: 30vh 15vw;
  }

  &__inner-content {
    p {
      padding: 20px 0;
    }
  }

  &__image {
    width: 375px;
  }
}
</style>
