<template>
  <div class="header-box">
    <ArticleTitle v-model="title"></ArticleTitle>
    <div class="button-box">
      <el-button type="primary" plain>发布</el-button>
      <el-button type="info" plain>返回首页</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArticleTitle from "./article-title.vue"
import {ref} from "vue";

let title=ref<string>('')
</script>

<style scoped lang="scss">
.header-box {
  display: flex;
  justify-content: space-between;
  height: 7vh;
  .button-box {
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 30px;
  }
}
</style>
