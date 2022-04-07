<template>
  <div>
    <el-avatar :size="size" :src="src" class="avatar" @error="errorHandler">
      <img
          src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
      />
    </el-avatar>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useUserStore} from "@/store";
import {getUserInfo} from "@/service/user/getUserInfo";

interface Props {
  size?:string|number
  src:string
}
const {size=40}=defineProps<Props>()
const errorHandler = () => true


</script>

<style scoped>
.avatar:hover {
  cursor: pointer;
}
</style>
