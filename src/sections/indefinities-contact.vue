<script setup>
import indefinitiesPage from "../components/indefinities-page.vue";
</script>

<template>
    <section class="indefinities-contact">
        <indefinities-page>
            <h2>send me a message.</h2>
            <textarea class="indefinities-contact__input" />
            <img class="indefinities-contact__submit" src="../assets/send.svg" />
        </indefinities-page>
    </section>
</template>

<style lang="scss" scoped>
.indefinities-contact {
    &__input {
        width: 100%;
        height: 40vh;
        border: none;
        font-size: 24pt;
    }

    &__submit {
        width: 100px;
        position: absolute;
        right: 0;
    }
}
</style>