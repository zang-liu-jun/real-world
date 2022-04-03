<template>
  <div class="right">
      <div class="middle-box">
        <router-view v-slot="{Component}">
          <Ztransition direction="right">
            <keep-alive>
              <component :is="Component"></component>
            </keep-alive>
          </Ztransition>
        </router-view>
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
