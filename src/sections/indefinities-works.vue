<script setup>
import indefinitiesPage from "../components/indefinities-page.vue";

</script>

<template>
    <section class="indefinities-works">
        <indefinities-page>
            <h1>Works</h1>

            <div>
                <div class="indefinities-works__section">
                    <h1>Illustration</h1>
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