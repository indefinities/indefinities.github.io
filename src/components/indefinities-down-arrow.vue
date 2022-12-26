<template>
  <div class="indefinities-down-arrow">
    <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m14 20 10 10 10-10H14Z" fill="#97ADBC"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: "indefinities-down-arrow"
}
</script>

<style lang="scss">
.indefinities-down-arrow {
  position: absolute;
  bottom: 5px;
  top: calc(100vh - 10px);
  left: calc(50% - 14px);
  animation: jump-infinite 1.5s infinite;

  &:after {
    position: absolute;
    top: 10px;
    left: -10px;
    transform: rotateZ(45deg);
  }

  @keyframes jump-infinite {
    0% {
      margin-top: 0;
      opacity: 25%;
    }
    50% {
      margin-top: 20px;
      opacity: 100%;
    }
    100% {
      margin-top: 0;
      opacity: 25%;
    }
  }
}
</style>