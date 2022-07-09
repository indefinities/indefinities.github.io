<script setup>
/**
 * Page before the rest of works displaying featured proejcts
 */
import indefinitiesPage from '../components/indefinities-page.vue';
</script>

<template>
    <section class="indefinities-featured">
        <indefinities-page>
            <h1>Featured</h1>

            <div class="indefinities-featured__project">
                <img src="../assets/nuhacks.png" />
                <a href="https://nuhacks.io">
                    <h2>NUHacks</h2>
                </a>
                <p>Vue JS</p>
            </div>

            <div class="indefinities-featured__project">
                <img src="../assets/nuhacks.png" />
                <a href="https://nuhacks.io">
                    <h2>NUHacks</h2>
                </a>
                <p>Vue JS</p>
            </div>
        </indefinities-page>
    </section>
</template>

<style lang="scss" scoped>
.indefinities-featured {
    &__project {
        img {
            width: 100%;
        }
    }
}

</style>