<template>
  <div style="width: 26vw;" class="outer">
    <div style="font-size: 24px; font-weight: bold" class="item-box">注册</div>
    <div class="item-box">
      <el-input v-model="userinfo.email" placeholder="邮箱"/>
    </div>
    <div class="item-box">
      <el-input v-model="userinfo.username" placeholder="用户名" maxlength="20" show-word-limit/>
    </div>
    <div class="item-box" style="display: flex; justify-content: space-between">
      <el-input v-model="verifyCode" placeholder="验证码" style="width: 50%"/>
      <el-button @click="getCode">{{ btnContent }}</el-button>
    </div>
    <div class="item-box">
      <el-input
          v-model="userinfo.password"
          type="password"
          placeholder="密码(3-20位,大小写字母,数字,下划线)"
          show-password
          @input="passwordChange"
          maxlength="20"
      />
    </div>
    <div class="item-box">
      <el-slider v-model="passwordSecurity" :step="33" show-stops class="my-slider" :disabled="true"/>
    </div>
    <div class="item-box">
      <el-input
          v-model="userinfo.confirmPassword"
          type="password"
          placeholder="确认密码"
          show-password
          maxlength="20"
      />
    </div>

    <div class="item-box">
      <el-button type="primary" style="width: 100%" @click="register">注册</el-button>
    </div>
    <div class="item-box">
      <router-link :to="{
        name:'login'
      }">
        <el-button style="width: 100%">返回</el-button>
      </router-link>
    </div>

  </div>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue";
import {ElMessage} from 'element-plus'
import {getVerifyCode} from "@/service/user/getVerifyCode";
import {fetchRegister} from "@/service/user/register";
import {verifyEmail, verifyPassword, verifyUsername} from "@/utils/verify";
import {useRouter} from "vue-router";

interface UserInfo {
  email: string,
  username: string,
  password: string,
  confirmPassword: string,
}

const userinfo: UserInfo = reactive({
  email: '2417170480@qq.com',
  username: '',
  password: '',
  confirmPassword: ''
})

// 验证码
let verifyCode = ref<string>('')
let btnContent = ref<string>('获取验证码')

// 验证码定时器外层函数
function getCodeOuter() {
  let timer: number | null = null
  let leftSecond = ref<number>(5)
  return function () {
    if (!verifyEmail(userinfo.email)) {
      console.log(userinfo.email)
      ElMessage.error("请输入正确的邮箱格式!")
      return
    }
    if (timer === null) {
      btnContent.value = `${leftSecond.value}s`
      //获取验证码
      getVerifyCode(userinfo.email)
          .catch(err => {
            ElMessage.error(err.message)
          })
      timer = window.setInterval(() => {
        if (leftSecond.value <= 0) {
          clearInterval(timer as any)
          timer = null
          btnContent.value = '获取验证码'
          leftSecond.value = 5
        } else {
          leftSecond.value -= 1
          btnContent.value = `${leftSecond.value}s`
        }
      }, 1000)
    }
  }
}

let getCode = getCodeOuter()

// 密码强度
let passwordSecurity = ref<number>(0)

function passwordChange(newValue: string) {
  let root: any = document.querySelector(':root')
  if (newValue === '') passwordSecurity.value = 0;
  if (/^[0-9]{3,20}$|^[a-zA-Z]{3,20}$/.test(newValue)) {
    passwordSecurity.value = 33;
    root.style.setProperty('--myColor', "#ED6F6F");
  } else if (/^[A-Za-z0-9]{3,20}$/.test(newValue)) {
    passwordSecurity.value = 66;
    root.style.setProperty('--myColor', "#EFBD47");
  } else if (/^\w{3,20}$/.test(newValue)) {
    passwordSecurity.value = 100;
    root.style.setProperty('--myColor', "#55D187");
  } else {
    passwordSecurity.value = 0;
  }
}

//注册
const router = useRouter()

function register(): void {
  let key: (keyof UserInfo)
  for (key in userinfo) {
    if (userinfo[key] === "") {
      ElMessage.error('有未填项!')
      return;
    }
  }
  if (!verifyUsername(userinfo.username)) {
    ElMessage.error('用户名格式错误!')
    return
  }
  if (!verifyPassword(userinfo.password)) {
    ElMessage.error('密码格式错误!')
    return
  }
  if (userinfo.password !== userinfo.confirmPassword) {
    ElMessage.error('两次密码输入不一致!')
    return
  }
  //发送注册请求
  fetchRegister({
    email: userinfo.email,
    username: userinfo.username,
    verifyCode: verifyCode.value,
    password: userinfo.password
  })
      .then(message => {
        ElMessage({
          message: message,
          type: 'success',
        })
        router.push({
          name: 'login'
        })
      })
      .catch(err => {
        ElMessage.error(err.message)
      })
}

</script>
<style>
:root {
  --myColor: #000;
}
</style>

<style scoped lang="scss">
.outer .item-box {
  margin-bottom: 18px;
  min-width: 280px;
}

.my-slider {
  ::v-deep .el-slider__button, {
    display: none;
  }

  ::v-deep .el-slider__button-wrapper {
    display: none;
  }

  ::v-deep .el-slider__bar {
    background-color: var(--myColor);
  }
}
</style>
