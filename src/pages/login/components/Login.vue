<template>
    <div style="width: 26vw" class="outer">
      <div style="font-size: 24px; font-weight: bold">登录</div>
      <div>
        <el-input v-model="email" placeholder="邮箱"/>
      </div>
      <div>
        <el-input
            v-model="password"
            type="password"
            placeholder="密码"
            show-password
        />
      </div>
      <div style="display: flex; justify-content: space-between">
        <span><input type="checkbox" style="margin-right: 5px;height: 16px;width: 16px;">记住我</span>
        <router-link :to="{name:'reset'}">忘记密码?</router-link>
      </div>
      <div>
        <el-button type="primary" style="width: 100%">登录</el-button>
      </div>
      <router-link :to="{
      name:'register'
    }">
        <el-button style="width: 100%">注册</el-button>
      </router-link>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue"

let email = ref<string>('')
let password = ref<string>('')


</script>

<style scoped>
  .outer div {
    margin-bottom: 12px;
  }
</style>
