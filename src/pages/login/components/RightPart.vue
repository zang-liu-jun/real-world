<template>
  <div class="right">
      <div class="middle-box">
        <Ztransition direction="right">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </Ztransition>
      </div>
  </div>

</template>

<script setup lang="ts">
import Ztransition from "@/components/z-transition/z-transition.vue"
</script>

<style scoped lang="scss">
  .right {
    display: flex;
    justify-content: center;
    width: 60vw;
    .middle-box {
      margin-top: 30vh;
    }
  }

</style>
