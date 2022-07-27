<script setup>

</script>

<template>
    <section 
    class="indefinities-page" 
    data-aos="fade-down" 
    data-aos-duration="2000">        
        <slot />
    </section>
</template>

<style lang="scss" scoped>
.indefinities-page {
    margin: 5vh 10px 5vh 10px;
    min-height: 100vh;

    @media only screen and (min-width: 800px) {
        display: block;
        margin-right: auto;
        margin-left: auto;
        max-width: 800px;
    }
}
</style>