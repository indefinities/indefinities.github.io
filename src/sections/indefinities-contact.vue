<script setup>
import indefinitiesPage from "../components/indefinities-page.vue";
</script>

<template>
    <section class="indefinities-contact">
        <indefinities-page>
            <textarea class="indefinities-contact__input" />
        </indefinities-page>
    </section>
</template>

<style lang="scss" scoped>
.indefinities-contact {
    &__input {
        width: 100%;
        border: none;
        overflow: auto;
        outline: none;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        resize: none;
        background: none;
    }
}
</style>