<template>
  <div class="outer">
    <div class="item" style="font-size: 24px; font-weight: bold">登录</div>
    <div class="item">
      <el-input v-model="email" placeholder="邮箱"/>
    </div>
    <div class="item">
      <el-input
          v-model="password"
          placeholder="密码"
          show-password
          type="password"
      />
    </div>
    <div class="item" style="display: flex; justify-content: space-between">
      <span><input style="margin-right: 5px;height: 16px;width: 16px;" type="checkbox">记住我</span>
      <router-link :to="{name:'reset'}">忘记密码?</router-link>
    </div>
    <div class="item">
      <el-button style="width: 100%" type="primary" @click="login">登录</el-button>
    </div>
    <div class="item">
      <router-link :to="{
      name:'register'
    }">
        <el-button style="width: 100%">注册</el-button>
      </router-link>
    </div>

  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {fetchLogin} from "@/service/user/login";
import {ElMessage} from 'element-plus'
import {useUserStore} from "@/store";
import {useRouter} from "vue-router";

let email = ref<string>('')
let password = ref<string>('')

const router = useRouter()

const userStore = useUserStore()




function login() {
  if (email.value === '' || password.value === '') {
    ElMessage.error("有未填项")
  } else {
    fetchLogin({email: email.value, password: password.value})
        .then(res => {
          ElMessage({
            message: "登录成功，即将跳转",
            type: 'success',
          });
          userStore.setUserInfo(res)
          userStore.setToken(res.token)
          router.push({
            name: 'home'
          })
        })
        .catch(err => {
          ElMessage.error(err.message)
        })
  }
}
</script>

<style scoped>
.outer .item {
  margin-bottom: 12px;
}

.outer {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
