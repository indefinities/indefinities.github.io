<script setup>
import indefinitiesPage from "../components/indefinities-page.vue";


// TODO: make background of labels change color when they are hovered over
</script>

<template>
    <section class="indefinities-works">
        <indefinities-page>
            <h1>Works</h1>

            <p>This page is still in a work in progress, links will work when completed. :)</p>

            <div>
                <div class="indefinities-works__section">
                    <h1>Illustration</h1>
                </div>

                <div class="indefinities-works__section">
                    <h1>Design</h1>
                </div>

                <div class="indefinities-works__section">
                    <h1>SWE/ Code</h1>
                </div>
            </div>
        </indefinities-page>

    </section>
</template>

<style lang="scss" scoped>
.indefinities-works {
    &__section {
        height: 30px;
        background-color: grey;
    }
}
</style>