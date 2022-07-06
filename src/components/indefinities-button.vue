<script setup>
// variables

defineProps({
    url: {
        type: String,
        required: false,
    }
})

</script>

<template>
    <div class="indefinities-button">
        <button @click="this.$emit('click')">
            <slot />
        </button>

    <!-- if there's a link included on the button -->
        <a v-if="url" :href="url">
            <slot />
        </a>
    </div>
</template>

<style lang="scss" scoped>
.indefinities-button {

    button {
        display: inline-block;
        border-radius: 10px;
        border: 0;
        padding: 1rem 2rem;
        margin: 0;
        background: lightblue;
        color: black;
        font-family: sans-serif;
        font-size: 1rem;
        line-height: 1;
        cursor: pointer;
        text-align: center;
        -webkit-appearance: none;
        -moz-appearance: none;
    }

}
</style>