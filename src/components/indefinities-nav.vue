<template>
    <div class="indefinities-nav">
      <div class="indefinities-nav__icon">
        <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 36h36v-4H6v4Zm0-10h36v-4H6v4Zm0-14v4h36v-4H6Z" fill="#9DC0D9"/>
        </svg>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.indefinities-nav {
  z-index: 1;
  min-width: 100%;
  position: fixed;
  top: 0;
  background-image: linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0));

  &__icon {
    padding: 2%;
    cursor: pointer;
  }
}
</style>