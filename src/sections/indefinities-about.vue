<script setup>
import indefinitiesPage from "../components/indefinities-page.vue";

</script>

<template>
    <section class="indefinities-about">
        <indefinities-page>
            <img
            class="indefinities-about__picture"
            src="../assets/nat-hsu.jpeg" />

            <h1>Nat Hsu</h1>
            <p><strong>Education</strong></p>
            <p>Northeastern University</p>

            <ul>
                <li>Computer Science + Interaction Design, BS (2018 - 2022)</li>
                <li>Information Design and Data Visualization, MS (2022 - Present)</li>
            </ul>

            <span>
                <p><strong>Interests</strong></p>
                <p>illustration, travel, music, anime + manga, cosplay, Genshin Impact</p>
            </span>
        </indefinities-page>
    </section>
</template>

<style lang="scss" scoped>
.indefinities-about {
    &__picture {
        width: 100%;

        @media only screen and (min-width: 600px) {
            width: 500px;
        }
    }
}
</style>