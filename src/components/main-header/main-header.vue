<template>
  <div class="header-box">
    <div class="main-box">
      <div style="display: flex; justify-content: flex-start">
        <div class="logo" @click="goHome">
          <span>RealWorld</span>
        </div>
        <div class="main-navigation">
          <div v-for="(item,index) in routesObj" class="nav-item" @click="getInItem(item.routeName)">
            <span :class="currentItem===item.routeName?'active-item':''">{{
                item.name
              }}</span>
          </div>
        </div>
      </div>
      <div style="display: flex;align-items: center; gap: 20px">
        <MainInput></MainInput>
        <el-dropdown v-if="userStore.token.value!==''">
          <UserAvatar :src="userStore.user.image"></UserAvatar>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="getInPublish">写文章</el-dropdown-item>
              <el-dropdown-item @click="getInUser">我的主页</el-dropdown-item>
              <el-dropdown-item @click="logout">注销</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <div v-else class="login" @click="getInLogin">
          <span>登录</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useRouter} from "vue-router";
import {ref} from "vue";
import MainInput from "@/components/main-header/main-input.vue"
import UserAvatar from "@/components/main-header/user-avatar.vue"
import {useUserStore} from "@/store";

const router = useRouter()
const userStore = useUserStore()

let currentItem = ref("")

async function goHome() {
  await router.replace({
    name: "home"
  })
  location.reload()
}

const routesObj = [
  {
    name: "首页",
    routeName: "article"
  },
  {
    name: "关于我们",
    routeName: "aboutUs"
  }
]

async function getInItem(name) {
  await router.push({
    name
  });
  currentItem.value = router.currentRoute.value.name as string;
}

//search
let searchValue = ref<string>("")


async function getInPublish() {
  await router.push({
    name: "publish"
  })
  location.reload()
}

function logout() {
  localStorage.removeItem("user");
  localStorage.removeItem("token")
  userStore.$reset();
}

function getInLogin() {
  router.push({
    name: "login"
  })
}

async function getInUser() {
  await router.push({
    name: "user"
  })
  location.reload()
}
</script>

<style lang="scss" scoped>
.header-box {
  display: flex;
  justify-content: center;
  height: 7vh;
  border-bottom: 1px solid #F1F1F1;
}

.main-box {
  display: flex;
  justify-content: space-between;
  width: 80vw;

  .main-navigation {
    display: flex;
    justify-content: flex-start;

    .nav-item {
      margin: 0 1vw 0;

      &:hover {
        cursor: pointer;
        color: $main-blue;
      }

      span {
        font-size: 1rem;
        line-height: 7vh;
        transition: all 0.3s;
      }

      &:hover {
        border-bottom: 2px solid $main-blue;
      }
    }
  }
}

.active-item {
  color: $main-blue;
}

.logo {
  color: $main-blue;
  font-size: 24px;
  margin-right: 1vw;

  &:hover {
    cursor: pointer;
  }

  span {
    line-height: 7vh;
    font-weight: bold;
  }
}


.login {
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    color: $main-blue;
  }
}

@media screen and (max-width: 750px) {
  .main-box {
    width: 100vw;
  }
}
</style>
