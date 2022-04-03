<template>
  <div style="width: 26vw;" class="outer">
    <div style="font-size: 24px; font-weight: bold" class="item-box">注册</div>
    <div class="item-box">
      <el-input v-model="email" placeholder="邮箱"/>
    </div>
    <div class="item-box">
      <el-input v-model="username" placeholder="用户名"/>
    </div>
    <div class="item-box">
      <el-input
          v-model="password"
          type="password"
          placeholder="密码(3-20位,可包含大小写字母，数字，下划线)"
          show-password
          @input="passwordChange"
      />

    </div>
    <div class="item-box">
      <el-slider v-model="passwordSecurity" :step="33" show-stops class="my-slider" :disabled="true"/>
    </div>
    <div class="item-box">
      <el-input
          v-model="confirmPassword"
          type="password"
          placeholder="确认密码"
          show-password
      />
    </div>

    <div class="item-box">
      <el-button type="primary" style="width: 100%">注册</el-button>
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
import {ref} from "vue";

let email = ref<string>('')
let username = ref<string>('')
let password = ref<string>('')
let confirmPassword = ref<string>('')
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

</script>
<style>
:root {
  --myColor: #000;
}
</style>

<style scoped lang="scss">
.outer .item-box {
  margin-bottom: 18px;
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
