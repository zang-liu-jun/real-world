<template>
  <div class="box">
    <LeftPart></LeftPart>
    <RightPart></RightPart>
  </div>

</template>

<script setup lang="ts">
import LeftPart from "./components/LeftPart.vue"
import RightPart from "./components/RightPart.vue"

</script>

<style scoped lang="scss">
  .box {
    display: flex;
    justify-content: flex-start;
  }
</style>
