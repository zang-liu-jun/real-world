<template>
  <div class="left">
    <Ztransition direction="left">
      <div class="middle-box">
        <div style="font-size: 5vw;">RealWorld</div>
        <div style="font-size: 1.5vw;">一个你可以畅所欲言的地方</div>
      </div>
    </Ztransition>
  </div>
</template>

<script setup>
import Ztransition from "@/components/z-transition/z-transition.vue"
</script>

<style scoped lang="scss">
  .left {
    display: flex;
    justify-content: center;
    background-color: #409EFF;
    width: 40vw;
    height: 100vh;
    color: white;
    font-size: 16px;
    .middle-box {
      margin-top: 25vh;
    }
  }

</style>
