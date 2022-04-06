<template>
  <div class="outer-box" @click="getInPublish">
    <el-icon><edit /></el-icon>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const router=useRouter()
async function getInPublish(){
  await router.push({
    name:"publish"
  })
  location.reload()
}
</script>

<style scoped lang="scss">
.outer-box {
  margin: 0 10px 0;
  &:hover {
    cursor: pointer;
  }
}
</style>
